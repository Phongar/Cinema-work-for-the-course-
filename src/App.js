import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";


import Navbar from "./Components/NavBar/Navbar";
import Home from "./Pages/Home/Home";
import Schedule from "./Pages/Schedule/Schedule";
import Cinemas from "./Pages/Cinemas/Cinemas";
import History from "./Pages/Info/History"
import Events from "./Pages/Events/Events";



import "./styles/main.css";
import "./styles/reset.css";


function App() {
  return (
    <div className="App">

      <Router>
      <Navbar />
     
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/cinemas" element={<Cinemas />} />
        <Route path="/history" element={<History />} />
        <Route path="/Event" element={<Events />} />
      </Routes>

      </Router>
      
    </div>
  );
}

export default App;
