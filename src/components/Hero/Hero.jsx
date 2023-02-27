import React from "react";

const Hero = () => {
  return (
    <section className="container ">
      <div className="py-16 ">
        <div className="big__hero text-6xl">
          <p>Turning</p>
          <p>art</p>
          <p>into</p>
          <p>designs</p>
        </div>
        <div className="flex gap-32  py-10">
          <div className="text-sm font-bold text-light-green">
            <p>The future</p>
            <p>of designs</p>
          </div>
          <div className="text-sm font-bold text-light-green">
            <p>The future</p>
            <p>of designs</p>
          </div>
        </div>
        <div className="">
          <p className="text-xs max-w-[60%] text-light-green">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quos
            at voluptatum. Odio quos tenetur sed laboriosam minima excepturi!
            Harum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
