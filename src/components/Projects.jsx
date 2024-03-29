import React from "react";
import bewakoof from "../assets/project/bewakoof.JPG";
import policybazar from "../assets/project/policybazar.JPG";
import medium from "../assets/project/medium.JPG";


const Projects = () => {

  const handleLink = (link) => {

    window.open(link, "_blank")

  };



  const portfolios = [
    {
      id: 1,
      name: "Bewakoof Web Clone",
      tech: "HTML, CSS, JavaScript, Json-Server,DOM Api",
      src: bewakoof,
      live: "https://gauravsft.github.io/bewakoof.github.io/",
      code: "https://github.com/gauravsft/bewakoof.github.io",
      text: "Bewakoof is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian."
    },
    {
      id: 2,
      name: "Policybazar Web Clone",
      src: policybazar,
      tech: "HTML, CSS, JavaScript, DOM Api",
      live: "https://policy-bazaar-clone.netlify.app",
      code: "https://github.com/gauravsft/policybazaar-clone",
      text: "Policybazaar is an app that offers all kinds of insurances and investment plans. Different sorts of insurance policies can be compared to get a better value product."
    },
    {
      id: 3,
      name: "Medium Web Clone",
      tech: "React, NodeJs , ExpressJs , MongoDB , Chakra UI",
      src: medium,
      live: "https://medium-web-app.netlify.app/",
      code: "https://github.com/gauravsft/Medium-Clone",
      text: "Medium is a social publishing platform that is open to all and home to a diverse array of stories, ideas, and perspectives."
    }


  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out my popular project right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-12 min-h-fit mb-8">
          {portfolios.map(({ id, src, live, code, text, name, tech }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="m-4 rounded-lg bg-green-800 flex items-center justify-center h-8">
                <h2 className="items-center">{name}</h2>
              </div>
              <hr />
              <div className="m-4  flex items-center  h-60">
                <h2 className="">{text}</h2>
              </div>
              <hr />
              <div className="h-28">
                <div className="m-4  flex items-center justify-center">
                  <h2 className=" items-center underline underline-offset-8 ... ">Tech Stack</h2>
                </div>
                <div className="m-4  flex items-center justify-center ">
                  <h4 className="items-center">{tech}</h4>
                </div>
              </div>
              <hr />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => handleLink(live)}>
                  Live Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => handleLink(code)}>
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
