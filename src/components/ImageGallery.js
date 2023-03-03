import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox.min.js';
import React from 'react';

const ImageGallery = () => {


  const getProjects = async () => {
    const { data } = await axios.get("https://api.websitesprofessional.com/api/v1/Project");
    return data;
  };
  const { data: Projects } = useQuery({
    queryKey: ["Projects"],
    queryFn: getProjects,
  });
  return (
    <div className='bg-[#fcf9f4]'>
       
      <div className="bg-layer">
        
      </div>
      <h1 className="text-3xl pt-20 pb-10 text-[#ae9d78] w-full text-center">
            Our Projects
          </h1>
    <div className="gridimg lg:grid-cols-3 grid-cols-6 md:grid-cols-4  gap-4">


{Projects?.data ? (
            Projects?.data?.map((image) => {
              return (
                <a href={image.img} data-lightbox="gallery" key={image._id}>
                <div className="relative">
                  <img
                    src={image.img}
                    alt={image?.title}
                    className="cursor-pointer"
                  />
                  <div className="inset-0 bg-black opacity-0 hover:opacity-50 flex justify-center items-center transition duration-300">
                    <div className="text-white text-center">
                      <div className="mb-2">{image?.title}</div>
                      <div className="flex justify-center">
                        <a href={image.url} target="_blank" rel="noreferrer" className="mx-2">
                          View on Website
                        </a>
                        <a href={image.img} data-lightbox="gallery">
                          Full Screen
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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

export default ImageGallery;
