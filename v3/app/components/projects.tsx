// ~/components/Projects.jsx
import React from "react";
import projectsData from "~/data/projects.json";
import githubLogo from '/socialicons/github.png'
import githubMark from '/socialicons/github-mark.png'
import randomicon from "/techicons/React-Dark.svg"
import randomProject from '/projects/chat.png'
const Projects = () => {
  return (
    <div className='max-w-screen-xl m-auto min-h-[100vh] inter'>
      <div className='inter text-7xl flex gap-4 font-medium mb-10'>
        RECENT PROJECTS
      </div>



      {projectsData.map((project, index) => (
        <>
          <div className="h-[85vh] inter overflow-hidden rounded-md mb-20">
            <div className="text-5xl font-medium mb-5">{project.name}</div>
            <div>
              <div className="text-xl font-light leading-8 w-[95%] m-auto tracking-wide mb-2">{project.description}</div>
              <div className="w-[90%] m-auto flex justify-center gap-4">
                <ul>
                  {project.techstack.map((tech, techIndex) => (
                    <li key={techIndex} className='mb-2 inline-block'>
                      <div className="flex flex-col items-center">
                        <img src={tech.icon} className="h-14 mx-1 text-center" />
                        <span className="text-neutral-600 text-[12px]">{tech.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[90%] m-auto flex justify-center mt-3">
                <img src={project.image} className="min-w-[400px] max-w-[700px] rounded-ss-2xl rounded-se-2xl" />
              </div>
            </div>
          </div>

        </>

      ))}
    </div>
  );
};

export default Projects;
