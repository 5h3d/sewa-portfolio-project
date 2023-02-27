import React from "react";

const Projects = () => {
  const projectsArr = [1, 2, 3, 4];
  return (
    <section className="container">
      <div className="project__header py-20 text-center">
        <p className="small">Hello world! How are you?</p>
        <h3 className="text-4xl">I am just better</h3>
      </div>
      <div className="projects  pt-20 pb-20 md:pb-40 grid gap-40 md:grid-cols-2 md:gap-2">
        {projectsArr.map((item, index) => (
          <div
            className={
              index == 0| index == 2
                ? "project border border-[#756dd3] pt-2 pb-8 px-2 max-w-[500px] mx-auto"
                : "project border border-[#fc8e57] pt-2 pb-8 px-2 max-w-[500px] mx-auto translate-y-44"
            }
          >
            <div className="box  h-[400px] bg-[#3a4039]"></div>
            <p className="text-sm mt-12">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              iste vero maiores unde voluptatibus ipsum? Officia nobis sint
              cumque corrupti!
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
