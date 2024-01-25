import React, {useState} from 'react';
import './DailyBooking.css';

function DailyBooking() {
    const varieties = ["Basil", "Cilantro", "Dill", "Mint", "Parsley", "Rosemary", "Sage", "Thyme"];
    const growers = ["Grower 1", "Grower 2", "Grower 3", "Grower 4", "Grower 5"];

    // Create state variables for form data
    const [bookingData, setBookingData] = useState([]);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    // Handle form submission
// Handle form submission
const handleSubmit = (event) => {
  event.preventDefault();
  const date = new Date(event.target.date.value);
  const formattedDate = date.toISOString().split('T')[0]; // Format the date as "yyyy-mm-dd"
  const time = event.target.time.value;
  const batchCode = event.target.batchCode.value;
  const variety = event.target.variety.value;
  const grower = event.target.grower.value;

  if (!date || !time || !batchCode || !variety || !grower) {
    alert('Please fill in all form fields.');
    return;
  }

  setBookingData(prevData => [...prevData, {
    date: formattedDate,
    time: time,
    batchCode: batchCode,
    variety: variety,
    grower: grower
  }]);

  window.confirm("Booking successful!");
  event.target.reset()
};

    return (
        <div className="container">
            <h1>Daily Booking Entry</h1>
            {bookingSuccess && <p>Booking Successful!</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date"/>
                </div>
                <div>
                    <label htmlFor="time">Time</label>
                    <input type="time" name="time" id="time"/>
                </div>
                <div>
                    <label htmlFor="batchCode">Batch Code</label>
                    <input type="text" name="batchCode" id="batchCode" placeholder="Enter batch code"/>
                </div>
                <div>
                    <label htmlFor="variety">Variety</label>
                    <select name="variety" id="variety">
                        <option value="">Select a variety</option>
                        {varieties.map(variety => (
                            <option key={variety} value={variety}>{variety}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="grower">Grower</label>
                    <select name="grower" id="grower">
                        <option value="">Select a grower</option>
                        {growers.map(grower => (
                            <option key={grower} value={grower}>{grower}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <input type="submit" value="Submit Booking"/>
                </div>
            </form>
        </div>
    );
}

export default DailyBooking;
