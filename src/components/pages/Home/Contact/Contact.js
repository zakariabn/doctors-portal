import React from "react";

const Contact = () => {
  return (
    <section className="max-w-screen-xl w-full bg-accent py-10" id="contact-us">
      <div className=" flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h3 className="text-md text-primary font-bold">Contact Us</h3>
          <h2 className="text-white text-3xl mb-10">Stay connected with us</h2>
        </div>

        <form className="flex flex-col gap-3 w-full md:w-[465px] items-center pb-5">
          <input
            type="text"
            placeholder="Email Address"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            class="input input-bordered w-full"
          />
          <textarea class="textarea w-full  mb-5" rows='5' placeholder="Your message"></textarea>
          <button className="btn bg-btn-gradient text-accent">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
