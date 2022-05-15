import React from "react";
const ReviewCard = ({review, avatar, name, location}) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl px-10 py-6 ">
        <div className="mb-6 text-black">
          <p className="">
            {review}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <img src={avatar} alt="" className="h-[80px] w-[80px] outline rounded-full p- outline-secondary"/>
          <div>
            <h4 className="text-accent font-semibold">{name}</h4>
            <p className="text-black">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
