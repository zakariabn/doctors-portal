import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import fluoride from "../../../../asset/images/fluoride.png";
import cavity from "../../../../asset/images/cavity.png";
import whitening from "../../../../asset/images/whitening.png";
import treatment from "../../../../asset/images/treatment.png";

const Services = () => {
  return (
    <div className="max-w-screen-xl mb-20">
      <div className="text-center mb-20">
        <h3 className="text-lg font-bold text-secondary mb-2">Our Services</h3>
        <h2 className="text-3xl text-accent">Service We Provide</h2>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mb-32">
        <ServiceCard
          img={fluoride}
          title="Fluoride Treatment"
          text="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></ServiceCard>
        <ServiceCard
          img={cavity}
          title="Fluoride Treatment"
          text="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></ServiceCard>

        <ServiceCard
          img={whitening}
          title="Fluoride Treatment"
          text="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"></ServiceCard>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row justify-between gap-10 max-w-screen-lg items-center px-4">
          <figure className="">
            <img src={treatment} alt="" className="rounded-xl w-[1200px]"/>
          </figure>
          <div class="md:ml-10">
            <h2 class="text-4xl font-bold text-accent mb-5">Exceptional Dental Care, on Your Terms</h2>
            <p className="text-accent">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <div class="mt-10">
              <button class="btn btn-primary bg-btn-gradient text-white font-semibold">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
