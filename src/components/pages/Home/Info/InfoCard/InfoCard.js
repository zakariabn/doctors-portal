import React from "react";

const InfoCard = ({ img, title, text, bgClass }) => {
  return (
    <div className={`flex gap-4 px-4 py-6 rounded-xl bg-accent shadow-xl ${bgClass}`}>
      <img src={img} alt="" />

      <div className="text-white flex flex-col justify-between py-2">
        <h2 className="card-title">{title}</h2>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
