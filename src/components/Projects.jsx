import React from "react";
import bewakoof from "../assets/project/bewakoof.JPG";
import policybazar from "../assets/project/policybazar.JPG";
import expanse from "../assets/project/expanse.JPG";


const Projects = () => {

  const handleLink=(link)=>{
    
      window.open(link, "_blank")
   
  };

  

  const portfolios = [
    {
      id: 1,
      name:"Bewakoof Web Clone",
      src: bewakoof,
      live: "https://gauravsft.github.io/bewakoof.github.io/",
      code:"https://github.com/gauravsft/bewakoof.github.io",
      text :"Bewakoof is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian. Bewakoof was created on the principle of creating impact through innovation, honesty and thoughtfulness. "
    },
    {
      id: 2,
      name:"Policybazar Web Clone",
      src: policybazar,
      live : "https://policy-bazaar-clone.netlify.app",
      code : "https://github.com/gauravsft/policybazaar-clone",
      text : "Policybazaar is an app that offers all kinds of insurances and investment plans. Different sorts of insurance policies can be compared to get a better value product."
    },
    {
      id: 3,
      name:"Expense Tracker",
      src: expanse,
      live : "https://gauravsft.github.io/ExpenseTracker.github.io/",
      code : "https://github.com/gauravsft/ExpenseTracker.github.io",
      text : "Expencetracker is an app that offers mangae monthly income,expense and saving."
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
          {portfolios.map(({ id, src,live,code,text,name }) => (
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
              <div className="m-4  flex items-center  h-48">
                  <h2 className="">{text}</h2>
              </div>
              <hr />
              <div className="m-4  flex items-center  h-24">
                  <h2 className=" items-center underline underline-offset-8 ... ">Tech Stack</h2>
                  <h4></h4>
              </div>
              <hr />
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
