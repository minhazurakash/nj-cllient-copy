import React from "react";
import { Link } from "react-router-dom";
import { useBlog } from "../Hooks/useBlogs";

const BlogSection = () => {
  const [Blog, isLoading, refetch] = useBlog();

  return (
    <section className="py-10 bg-[#fcf9f4] text-center">
      <div className="container mx-auto px-4 lg:px-8">
  
        <h1 className="text-4xl lg:text-5xl pb-4 pt-10 font-title pb-5 text-center">
        Latest Blog Posts
      </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Blog?.data?.slice(-4).map((post) => {
            return (
              <Link to={`/blog/${post._id}`}>
              <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                <div className="layer absolute top-0 bottom-0 rounded left-0 right-0 bg-[#968a779c]">

</div>
                  <img
                    className="lg:xl:h-[380px] lg:xl:w-[350px] h-[190px] w-[175px] rounded  object-cover img-fit cursor-pointer"
                    loading="lazy"
                    src={post.img}
                    alt={post.blogTitle}
                  />
                  <div className="absolute bottom-0 left-0 px-6 py-4">
                    <h2 className="text-2xl font-semibold text-white">{post.blogTitle}</h2>
                  </div>
                </div>
                {/* <div className="p-6">
                  <p className="text-gray-600 mb-4">{post.blogDescription}</p>
                  <a href={`/blog/${post.slug}`} className="text-gray-800 font-medium hover:underline">
                    Read More
                  </a>
                </div> */}
              </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Link to="/Blog" >
          <button className='mt-8 bg-[#F5F2EC ] mx-auto border-[#a5a5a5] border-2  text-[#a5a5a5] m-2 hover:bg-[#AE9D78] hover:text-white hover:border-white font-bold py-2 px-4'>
          View All</button>
        </Link>
    </section>
  );
};

export default BlogSection;
