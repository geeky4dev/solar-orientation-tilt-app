import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, useMapEvents, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Compass from './components/Compass';
import L, { Icon } from 'leaflet';

// Ícono por defecto de Leaflet (azul)
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Función para crear un ícono flecha rotado según azimuth
function createArrowIcon(azimuth = 0) {
  return L.divIcon({
    className: 'arrow-icon',
    html: `<div style="transform: rotate(${azimuth - 90}deg); font-size: 30px; color: rgb(25, 0, 255);">➤</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}

function LocationSelector({ onSelect }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onSelect({ lat, lng });
    },
  });
  return null;
}

function App() {
  const [location, setLocation] = useState(null);
  const [result, setResult] = useState(null);
  const [season, setSeason] = useState('yearly');
  const [practicalTilt, setPracticalTilt] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  // Función para obtener inclinación práctica según latitud (ejemplo simple)
  function getPracticalTilt(lat) {
    if (lat >= 47 && lat <= 55) return 30; // Alemania approx.
    // Agrega más reglas aquí...
    return null;
  }

  const handleSubmit = async () => {
    if (!location) return;

    try {
      const res = await axios.post(`${API_URL}/api/optimize`, {
        latitude: location.lat,
        longitude: location.lng,
        season,
      });
      setResult(res.data);

      const tilt = getPracticalTilt(location.lat);
      setPracticalTilt(tilt);
    } catch (error) {
      console.error('Error fetching optimization data:', error);
    }
  };

  return (
    <div>
      <h1>🔆 Solar Optimizer</h1>

      <MapContainer center={[0, 0]} zoom={2} style={{ height: '300px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationSelector onSelect={setLocation} />
        {location && (
          <Marker
            position={[location.lat, location.lng]}
            icon={result ? createArrowIcon(result.optimal_azimuth) : defaultIcon}
          />
        )}
      </MapContainer>

      {location && (
        <div>
          <p>
            📍 Location: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
          </p>
          <label htmlFor="season-select">Season: </label>
          <select
            id="season-select"
            onChange={(e) => setSeason(e.target.value)}
            value={season}
          >
            <option value="yearly">Annual (*)</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
          </select>
          <button onClick={handleSubmit}>Calculate</button>
          <p>(*) Average between Summer & Winter</p>
        </div>
      )}

      {result && (
        <div>
          <h2>🔍 Results:</h2>
          <p>
            📐 Optimal inclination (astronomical):{' '}
            <strong>{result.optimal_tilt.toFixed(2)}°</strong>
          </p>

          {practicalTilt && (
            <p>
              ⚙️ Practical tilt recommendation for your location:{' '}
              <strong>{practicalTilt}°</strong>
            </p>
          )}

          <p>
            🧭 Optimal orientation (azimuth):{' '}
            <strong>{result.optimal_azimuth.toFixed(2)}°</strong>
          </p>

          <Compass azimuth={result.optimal_azimuth} />

          {practicalTilt && (
            <p style={{ fontStyle: 'italic', marginTop: '10px', color: '#555' }}>
              *Note: The practical tilt is a fixed recommended value used in real
              installations to simplify setup and maintenance. The optimal
              inclination is calculated astronómicamente para maximizar la producción
              según estación y latitud.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
