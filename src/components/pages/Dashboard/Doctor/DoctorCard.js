import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div class="card shadow-xl mb-5">
      <div className="w-[385px] h-[215px] overflow-hidden">
        <figure>
          <img src={doctor.img} alt="Shoes" className="w-full" />
        </figure>
      </div>

      <div class=" mt-5 p-3">
        <h2 class="card-title mb-4">{doctor.name}</h2>
        <div className="flex gap-4">
          <button className="btn-sm btn-info rounded-full">Update</button>
          <button className="btn-sm btn-info rounded-full">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
