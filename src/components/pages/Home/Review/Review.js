import React from "react";
import quoteBg from "../../../../asset/icons/quote.svg";
import ReviewCard from "./ReviewCard";

import people1 from "../../.../../../../asset/images/people1.png";

const Review = () => {
  return (
    <section className="max-w-screen-xl w-full px-10 mb-14" id="reviews">
      <div
        style={{ backgroundImage: `url(${quoteBg})` }}
        className="w-full h-[156px] bg-contain text-left bg-no-repeat bg-right">
        <h3 className="uppercase text-lg text-secondary font-bold">
          Testimonial
        </h3>
        <h2 className="text-accent text-3xl font-bold ">
          What Our Patients Says
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <ReviewCard
          review="It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
          avatar={people1}
          name="Winson Herry"
          location="California"></ReviewCard>
      </div>
    </section>
  );
};

export default Review;
