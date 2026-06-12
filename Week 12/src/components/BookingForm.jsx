import { useState } from "react";

function BookingForm() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      `Ticket Booked Successfully!
       ${source} → ${destination}
       on ${travelDate}`
    );

    setSource("");
    setDestination("");
    setTravelDate("");
  };

  return (
    <div>
      <h2>Flight Booking</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Source City"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="text"
          placeholder="Destination City"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">
          Book Ticket
        </button>
      </form>

      <h3>{message}</h3>
    </div>
  );
}

export default BookingForm;
