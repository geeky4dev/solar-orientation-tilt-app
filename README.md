# ☀️ Solar Optimizer

A simple web app to calculate the **optimal tilt** and **azimuth** (orientation) for solar panels based on your location and season.  
Built with **React**, **Leaflet.js**, and **Flask**.

---

## 🚀 Features

- 🗺️ Interactive map to select your geographic location (latitude & longitude)  
- 🌞 Choose season: Annual, Summer, or Winter for solar optimization  
- ⚙️ Fetch optimal solar panel tilt & azimuth from backend API  
- 🧭 Visual results with directional arrow on map and compass component  
- 📱 Responsive and user-friendly UI  

---

## 🛠️ Technologies Used

| Frontend       | Backend      | Other                     |
|----------------|--------------|---------------------------|
| React          | Flask (Python) | Leaflet.js (maps)         |
| React-Leaflet  | pvlib (optional) | Axios (API requests)       |
| Leaflet.js     |              | OpenStreetMap (map tiles) |

---

## 📦 Installation & Setup

### 🔧 Prerequisites

- Node.js (for React frontend)  
- Python 3.x & Flask (for backend API)  
- npm or yarn  

---

### ⚙️ Frontend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/solar-optimizer.git
   cd solar-optimizer/frontend
