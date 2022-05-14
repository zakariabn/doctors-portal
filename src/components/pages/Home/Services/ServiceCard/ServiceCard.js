import React from "react";

const ServiceCard = ({img, title, text}) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt={title}
          className="w-[100px]"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title text-accent">{title}</h2>
        <p className="text-black text-sm">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
