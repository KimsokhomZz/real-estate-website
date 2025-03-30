import React from "react";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 max-w-80 mb-8 mx-auto">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>
    </div>
  );
};

export default Projects;
