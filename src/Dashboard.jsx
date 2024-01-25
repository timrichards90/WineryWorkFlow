import React, {useState} from 'react';
import './Dashboard.css'

function Dashboard({bookingData}) { // Receive bookingData as a prop
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleDateClick = () => {
        setSelectedDate('');
    };

    const filteredData = bookingData.filter(booking => booking.date === selectedDate);

    return (
        <div>
            <h1>Daily Booking Dashboard</h1>
            <label htmlFor="date">Select a date</label>
            <input type="date" id="date" value={selectedDate} onChange={handleDateChange} onClick={handleDateClick} />
            {selectedDate && (filteredData.length > 0 ? (
                filteredData.map((booking, index) => (
                    <div key={index}>
                        <p>Date: {booking.date}</p>
                        <p>Time: {booking.time}</p>
                        <p>Batch Code: {booking.batchCode}</p>
                        <p>Variety: {booking.variety}</p>
                        <p>Grower: {booking.grower}</p>
                    </div>
                ))
            ) : (
                <p>No bookings for this date.</p>
            ))}
        </div>
    );
}

export default Dashboard;