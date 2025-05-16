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
📂 Project Structure    

solar-orientation-tilt-app/       # Root directory     
├── backend/    
│   └── venv       # Recommended to avoid conflicts    
│   └── app.py     # Flask app    
│   └── pvlib_logic.py    
│   └── requirements.txt   
├── frontend/    
│   ├── public/  
│   ├── src/  
│   │   ├── components/  
│   │        ├── Compass.jsx  
│   │        └── Compass.css  
│   │   ├── App.js  
│   │   └── main.jsx  
│   ├── package.json  
├── README.md  
---
 
![Solar Optimizer 1](https://github.com/user-attachments/assets/3878015c-a4e3-48d0-8d87-2355dc909ab7)
![Solar Optimizer 1 0](https://github.com/user-attachments/assets/e5a458a5-1a3c-458c-8a07-cc8a1310d69f)
![Solar Optimizer 1 1](https://github.com/user-attachments/assets/8cde8f8e-57c4-44c1-85bc-c54af7033e69)
![Solar Optimizer 2 0](https://github.com/user-attachments/assets/0770d745-e4fd-44ea-ada9-6653b0442520)
![Solar Optimizer 2 1](https://github.com/user-attachments/assets/fa2d36c6-2b3f-4e13-803b-ea2d99a49fe2)
---
🚀 Development Step by Step 

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
2.Install dependencies:  
npm install  

3.Start React development server:  
npm start  

🐍 Backend Setup
1.Navigate to backend folder:
cd ../backend

2.(Optional) Create & activate a Python virtual environment:  
python -m venv venv  
source venv/bin/activate   # Linux/macOS  
venv\Scripts\activate      # Windows  

3.Install Python dependencies:  
pip install -r requirements.txt  

4.Run Flask server (Backend):  
source venv/bin/activate  
python3 app.py  

5.Run Frontend    
cd frontend  
npm start  


---

🎯 Usage:  
🖱️ Click on the map to select your location  
🔄 Select the season from the dropdown (Annual, Summer, Winter)  
⚡ Click Calculate to get the optimal solar panel settings  
🧭 View the results and see the arrow on the map indicating optimal azimuth  

   
