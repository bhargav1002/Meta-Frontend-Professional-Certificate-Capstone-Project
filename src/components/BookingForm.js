import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
   const todaysDate = new Date().toISOString().split("T")[0];
   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState(todaysDate);
   const [times, setTimes] = useState("")

   const handleSumbit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    <header>
      <section>
        <h1 style={{ textAlign: "center" }}>Reserve Table</h1>
        <form onSubmit={handleSumbit}>
          <fieldset className="formField">
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required min={todaysDate}/>
            </div>
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option disabled value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes} value={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={1} max={10} required></input>
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option disabled value="">Select an Option</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>
            <div className="btnReceive">
              {/* <input aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input> */}
              <button type="submit">Make Your Reservation</button>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;