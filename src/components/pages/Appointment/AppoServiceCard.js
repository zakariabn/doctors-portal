import React from "react";
import './Appointment'

const AppoServiceCard = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card bg-neutral text-accent shadow-lg ">
      <div className="card-body items-center text-center">
        <div className="mb-6 flex flex-col items-center">
          <h2 className="card-title text-xl text-primary mb-1">{name}</h2>
          <p className="text-sm font-medium">
            {slots.length > 0 ? slots[0] : "No"}
          </p>
          <p className="text-sm font-medium">
            {slots.length > 0 ? slots.length : "No"} slots available
          </p>

          {/* <div className=" flex flex-col items-start">
            {slots.map((slot) => {
              return <p className="text-md font-medium">{slot}</p>;
            })}
          </div> */}
        </div>

        <div className="card-actions justify-end">
          <label
            htmlFor="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn bg-secondary text-white">
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoServiceCard;
