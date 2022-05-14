import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import drChair from "../../../asset/images/chair.png";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({selected, setSelected}) => {

  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="flex-1">
            <img src={drChair} className="w-full rounded-lg shadow-2xl" alt="" />
          </div>

          <div className="flex-1 flex justify-center text-accent">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
