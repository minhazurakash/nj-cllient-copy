import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox.min.js';
import React from 'react';

const ProjectsGallery = () => {


  const getProjects = async () => {
    const { data } = await axios.get("https://api.websitesprofessional.com/api/v1/Project");
    return data;
  };
  const { data: Projects } = useQuery({
    queryKey: ["Projects"],
    queryFn: getProjects,
  });
  return (
    <div className="parallax">
    <div className="grid grid-cols-3 gap-4">


{Projects?.data ? (
            Projects?.data?.map((image) => {
              return (
                <a href={image.img} data-lightbox="gallery" key={image._id}>
                <img
                  src={image.img}
                  alt={image.title}
                  className="cursor-pointer"
                />
              </a>
              );
            })
          ) : (
            <h1>No slider found</h1>
          )}
    </div>
    </div>
  );
};

export default ProjectsGallery;
