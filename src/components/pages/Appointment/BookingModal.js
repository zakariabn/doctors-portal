import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  console.log(date);

  function handelBooking(e) {
    e.preventDefault();

    const AppointmentDate = format(date, "PP");
    const time = e.target.time.value;
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;

    const bookingInfo = {
      date : AppointmentDate,
      time : time,
      name : name,
      phone : phone,
      email : email
    }
    console.log(bookingInfo);
    setTreatment(null);
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle text-accent">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle text-accent hover:text-white absolute right-2 top-2">
            ✕
          </label>
          <h3 className="font-bold text-lg">Booking for: {treatment.name}</h3>

          <form
            className="flex flex-col  gap-4 items-center my-10"
            onSubmit={handelBooking}>
            <input
              type="text"
              placeholder="Date"
              value={format(date, "PP")}
              readOnly
              disabled
              className="input input-bordered border-none disabled:bg-gray-300  w-full max-w-xs"
            />
            <select
              name="time"
              className="select select-bordered border-gray-400 w-full max-w-xs">
              {treatment.slots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered border text-lg text-accent border-gray-400  w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input input-bordered border text-lg text-accent border-gray-400 w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered border text-lg text-accent border-gray-400 w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="input input-bordered border text-lg text-accent border-gray-400 bg-btn-gradient text-white font-medium hover:cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
