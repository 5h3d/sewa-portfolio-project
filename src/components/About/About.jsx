import React from "react";

const About = () => {
  return (
    <section className="container relative">
      <div className="img bg-[#3a4039] opacity-60 w-36 h-52 absolute right-5 -top-8"></div>
      <div className="about__header  border-t border-[#3a4039] pt-12  pb-3">
        <div className="about__title">
          <div className="box w-16 h-16 bg-[#3a4039] rounded-full"></div>
        </div>
      </div>
      <p className="text-4xl ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fuga
        impedit dolor dicta vero magni, illo molestias! Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Nemo fuga impedit dolor dicta vero
      </p>
      <div className="small__about py-10">
        <p className="text-sm text-light-green">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sit esse alias ipsam tempora et, voluptatibus exercitationem iure nemo deserunt.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sit esse alias ipsam tempora et, voluptatibus exercitationem iure nemo deserunt.
        </p>
      </div>
    </section>
  );
};

export default About;
