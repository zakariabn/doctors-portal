import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppoServiceCard from "./AppoServiceCard";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null)



  useEffect(() => {
    const url = "http://localhost:5000/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.dir(error));
  }, []);

  return (
    <div className="my-14 text-center">
      <h3 className="text-primary text-2xl font-semibold mb-10">
        Available Services on {format(date, "PP")}
      </h3>

      {/* card  */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {services.map((service) => {
          return (
            <AppoServiceCard
              key={service._id}
              service={service}
              setTreatment={setTreatment}
              ></AppoServiceCard>
          );
        })}
      </div>
      {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment}></BookingModal>}

    </div>
  );
};

export default AvailableAppointment;
