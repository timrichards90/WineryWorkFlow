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

    // Sort the filteredData array based on date and time
    const sortedData = filteredData.sort((a, b) => {
        return new Date(a.date + 'T' + a.time) - new Date(b.date + 'T' + b.time);
    });

    return (
        <div>
            <h1>Daily Booking Dashboard</h1>
            <label htmlFor="date">Select a date</label>
            <input type="date" id="date" value={selectedDate} onChange={handleDateChange} onClick={handleDateClick} />
            {selectedDate && (sortedData.length > 0 ? (
                sortedData.map((booking, index) => (
                    <div key={index}>
                        <p>Date: {booking.date}</p>
                        <p>Time: {booking.time}</p>
                        <p>Batch Code: {booking.batchCode}</p>
                        <p>Variety: {booking.variety}</p>
                        <p>Grower: {booking.grower}</p>
                        <p>Quantity: {booking.quantity}</p>
                        <hr /> {/* Add a dividing line */}
                    </div>
                ))
            ) : (
                <p>No bookings for this date.</p>
            ))}
        </div>
    );
}

export default Dashboard;