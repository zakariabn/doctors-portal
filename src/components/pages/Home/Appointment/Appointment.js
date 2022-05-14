import React from "react";
import docImg from "../../../../asset/images/doctor.png";
import appointmentBg from "../../../../asset/images/appointment.png";

const Appointment = () => {
  return (
    <section class="hero max-w-screen-xl my-20">
      <div
        style={{ backgroundImage: `url(${appointmentBg})` }}
        class="hero-content flex-col p-0 lg:flex-row bg-center bg-cover px-[28px] py-14 md:py-0">
        <img src={docImg} class="w-1/2 hidden lg:inline-block flex-1 h-full mt-[-140px]" alt="" />
        <div className="flex-1 py-5">
          <h3 class="text-xl font-bold text-secondary mb-5">Appointment</h3>
          <h1 class="text-5xl text-white font-bold mb-5">Make an appointment Today</h1>
          <p class="mb-8 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button class="btn btn-primary bg-btn-gradient">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
