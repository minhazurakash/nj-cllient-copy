import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox.min.js';
import React from 'react';
import { Link } from 'react-router-dom';

const ImageGallery = () => {
  const getProjects = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/Project");
    return data;
  };
  
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
  
  const projectsToShow = projects?.data?.slice(-4);
  
  return (
    <div className='bg-[#fcf9f4]'>
      <div className="bg-layer"></div>
      <h1 className="text-4xl lg:text-5xl pb-4 pt-10 xl:lg:pt-20 font-title pt-10 text-center">
        Our Projects
      </h1>
      <div className="gridimg lg:grid-cols-4 md:grid-cols-2 gap-4">
        {projectsToShow ? (
          projectsToShow.map((project) => (
            <a href={project.img} data-lightbox="gallery" key={project._id}>
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="cursor-pointer"
                />
                <div className="flex justify-center items-center transition duration-300">
                  <div className="text-white text-center">
                    <div className="mb-2">{project.title}</div>
                  </div>
                </div>
              </div>
            </a>
          ))
        ) : (
          <h1>No projects found</h1>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/projects" className="btn">
          View All
        </Link>
      </div>
    </div>
  );
};

export default ImageGallery;
