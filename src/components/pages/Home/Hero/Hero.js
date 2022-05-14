import React from "react";
import heroImg from "../../../../asset/images/chair.png";
import heroBgImg from "../../../../asset/images/bg.png";

const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${heroBgImg})`}} className="hero min-h-[75vh] bg-center bg-cover max-w-screen-2xl bg-no-repeat">
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
        <img src={heroImg} className="max-w-sm lg:max-w-lg rounded-md shadow-2xl" alt="" />
        <div className="max-w-[550px]">
          <h1 className="text-5xl font-bold text-accent">Your New Smile Starts Here</h1>
          <p className="py-6 text-accent">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            soluta accusamus in cupiditate magnam eligendi officiis dolorem vel
            eius eos!
          </p>
          <button className="btn btn-primary bg-btn-gradient">Get Started</button> 
        </div>
      </div>
    </div>
  );
};

export default Hero;
