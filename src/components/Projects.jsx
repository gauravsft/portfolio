import React from "react";
import bewakoof from "../assets/project/bewakoof.JPG";
import policybazar from "../assets/project/policybazar.JPG";
import expanse from "../assets/project/expanse.JPG";
import pharmeasy from '../assets/project/pharmeasy.JPG'


const Projects = () => {

  const handleLink=(link)=>{
    
      window.open(link, "_blank")
   
  };

  

  const portfolios = [
    {
      id: 1,
      src: bewakoof,
      live: "https://gauravsft.github.io/bewakoof.github.io/",
      code:"https://github.com/gauravsft/bewakoof.github.io"
    },
    {
      id: 2,
      src: policybazar,
      live : "https://policy-bazaar-clone.netlify.app",
      code : "https://github.com/gauravsft/bewakoof.github.io",
    },
    {
      id: 3,
      src: expanse,
      live : "https://gauravsft.github.io/ExpenseTracker.github.io/",
      code : "https://github.com/gauravsft/ExpenseTracker.github.io",
    },
    {
      id: 4,
      src: pharmeasy,
      live : "https://github.com/gauravsft/pharmeasy.in-clone",
      code : "https://github.com/gauravsft/pharmeasy.in-clone"
    },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out my popular project right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,live,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>handleLink(live)}>
                  Live Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=>handleLink(code)}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
