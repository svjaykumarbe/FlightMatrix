import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import PassengerDetails from "./pages/PassengerDetails";
import Flights from "./components/Flights"; // Import the Flights component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/flights" element={<Flights />} /> 
        <Route path="/passenger/:id" element={<PassengerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;