import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const MyAppointment = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  // console.log(appointments);

  useEffect(() => {
    if (user) {
      const email = user?.email;
      fetch(`/booking?email=${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            toast.error("Forbidden access! Please Login again.", { toastId: "forbidden" });
            signOut(auth);
            navigate("/home");
            localStorage.removeItem("AccessToken");
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
        })
        .catch((error) => console.dir(error));
    }
  }, [user, navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full text-accent">
          <thead>
            <tr className="text-white">
              <th>Count</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>

          <tbody>
            {appointments?.map((appointment, index) => {
              const { patientName, date, time, treatment } = appointment;

              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{patientName}</td>
                  <td>{date}</td>
                  <td>{time}</td>
                  <td>{treatment}</td>
                </tr>
              );
            })}

            {/* <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
