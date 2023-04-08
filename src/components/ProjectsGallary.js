import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox.min.js';
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsGallery = () => {
  const getProjects = async () => {
    const { data } = await axios.get("https://api.websitesprofessional.com/api/v1/Project");
    return data;
  };
  
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
  
  const projectsToShow = projects?.data?.slice(-4);
  
  return (
    <div className=' bg-[#F5F2EC]'>
      <div className=' max-w-screen-xl mx-auto'>
      <div className="bg-layer"></div>
      <h1 className="text-4xl lg:text-5xl pb-4 pt-10 xl:lg:pt-20 font-title pt-10 text-center">
        Projects
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        {projects?.data ? (
          projects?.data?.map((project) => {
            return (
              <div className='rounded-lg' key={project._id}>
                <a href={project.img} data-lightbox="gallery">

                <div className="relative text-center">
                  <div className="layer absolute top-0 bottom-0 rounded left-0 right-0 bg-[#968a779c]">

                  </div>
                  <img
                    className="lg:xl:h-[380px] lg:xl:w-[350px] h-[190px] w-[175px] rounded  object-cover img-fit cursor-pointer"
                    loading="lazy"
                    src={project.img}
                    alt={project.title}
                  />
                  <div className="absolute bottom-0 left-0 px-6 py-4">
                    <h2 className="lg:text-2xl text-sm font-semibold text-[#fff]">{project.title}</h2>
                  </div>
                </div>
                </a>

              </div>
            );
          })
        ) : (
          <h1>No projects found</h1>
        )}
      </div>
      <div className="flex justify-center mb-5">
        <Link to="/projects" >
          <button className='bg-[#F5F2EC ] border-[#a5a5a5] border-2  text-[#a5a5a5] m-2 hover:bg-[#AE9D78] hover:text-white hover:border-white font-bold py-2 px-4'>
          View All</button>
        </Link>
      </div>
    </div>
    </div>
    
  );
};

export default ProjectsGallery;
