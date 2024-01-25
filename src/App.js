import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./NavBar";
import DailyBooking from './DailyBooking';
import Dashboard from "./Dashboard";

function App() {
  const [bookingData, setBookingData] = useState([]); // Lift the state up to the App component

  return (
    <Router>
        <NavBar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard bookingData={bookingData} />} /> {/* Pass the bookingData prop */}
        <Route path="/daily-booking" element={<DailyBooking bookingData={bookingData} setBookingData={setBookingData} />} /> {/* Pass the bookingData and setBookingData props */}
      </Routes>
    </Router>
  );
}

export default App;