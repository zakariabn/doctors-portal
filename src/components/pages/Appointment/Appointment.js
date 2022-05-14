import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div className="max-w-screen-xl mx-auto">
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>

      <AvailableAppointment
        date={selected}
      ></AvailableAppointment>

      <Footer></Footer>
    </div>
  );
};

export default Appointment;
