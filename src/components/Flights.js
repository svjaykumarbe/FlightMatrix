import React, { useEffect, useState } from "react";
import axios from "axios";

const Flights = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/flights")
      .then(response => setFlights(response.data))
      .catch(error => console.error("Error fetching flights:", error));
  }, []);

  return (
    <div>
      <h1>Flights</h1>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.flightNumber} - {flight.departure} to {flight.destination} ({flight.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Flights;