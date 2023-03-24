import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/blog/${id}`);
        setBlog(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getBlog();
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="bg-[#fbf8f5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-8">
          <div className="md:col-span-2">
            <img src={blog.data.img} alt={blog.data.blogTitle} className="h-full w-full object-cover object-center rounded-lg" />
          </div>
          <div className="md:col-span-6">
            <h1 className="text-4xl lg:text-5xl pb-4 pt-10 xl:lg:pt-20 font-title pt-10 text-center">{blog.data.blogTitle}</h1>

            <p className="text-lg leading-relaxed mb-8">
              <div dangerouslySetInnerHTML={{ __html:blog.data?.blogDesc }} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
