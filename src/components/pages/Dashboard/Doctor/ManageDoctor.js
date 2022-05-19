import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import DoctorCard from "./DoctorCard";

const ManageDoctor = () => {
  const [doctor, setDoctor] = useState([]);

  // const { data : doctor, isLoading } = useQuery("doctor", () =>
  //   fetch("/doctor", {method: "GET", headers: {authorization: `Bearer ${localStorage.getItem("AccessToken")}`,}}).then((res) => res.json())
  // );

  useEffect(() => {
    fetch("/doctor", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);
  console.log(doctor);

  // if (isLoading) {
  //   return <Loading/>
  // }

  return (
    <div>
      <h3>Doctors</h3>
      <div className="flex flex-wrap gap-x-14 gap-y-10 justify-center">
        {doctor?.map((doctor) => {
          return <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>;
        })}
      </div>
    </div>
  );
};

export default ManageDoctor;
