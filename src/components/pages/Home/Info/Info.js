import React from "react";
import InfoCard from "./InfoCard/InfoCard";

import clockIcon from "../../../../asset/icons/clock.svg";
import markerIcon from "../../../../asset/icons/marker.svg";
import phoneIcon from "../../../../asset/icons/phone.svg";

const Info = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 mb-20 px-4">
      <InfoCard
        img={clockIcon}
        title="Opening hours"
        text="Click the button to listen on Spotiwhy app."
        bgclassName="bg-btn-gradient"
        ></InfoCard>
      <InfoCard
        img={markerIcon}
        title="Visit Our location"
        text="Click the button to listen on Spotiwhy app."
        bgclassName="bg-accent"
        ></InfoCard>
      <InfoCard
        img={phoneIcon}
        title="Contact Us"
        text="Click the button to listen on Spotiwhy app."
        bgclassName="bg-btn-gradient"
        ></InfoCard>
    </div>
  );
};

export default Info;
