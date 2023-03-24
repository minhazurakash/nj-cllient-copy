import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const ProjectPage = () => {
  const getProjects = async () => {
    const { data } = await axios.get('http://localhost:5000/api/v1/Project');
    return data;
  };

  const { data: projects } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  return (
    <div className="max-w-screen-xl mx-auto">
      <h1 className="text-4xl lg:text-5xl pb-4 pt-10 xl:lg:pt-20 font-title pt-10 text-center">
        Our Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        {projects?.data ? (
          projects?.data?.map((project) => {
            return (
              <div key={project._id}>
                <a href={project.img} data-lightbox="gallery">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-300 h-300 object-cover img-fit cursor-pointer"
                  />
                </a>
                <h2 className="text-2xl font-bold mt-2 mb-1">{project.title}</h2>
                <p className="text-lg text-gray-600 mb-4">{project.description}</p>
              </div>
            );
          })
        ) : (
          <h1>No projects found</h1>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;