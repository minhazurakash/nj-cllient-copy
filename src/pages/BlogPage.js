import React from "react";
import { useBlog } from "../Hooks/useBlogs";

const BlogPage = () => {
  const [Blog, isLoading, refetch] = useBlog();
  return (
    <section className="bg-[#fbf8f5] py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl lg:text-5xl pb-4 pt-10 xl:lg:pt-20 font-title pt-10 text-center">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Blog?.data?.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={post.img} alt={post.blogTitle} className="h-64 w-full object-cover object-center" />
            <div className="p-6">
              <h3 className="text-lg font-medium text-[#ae9d78] mb-2">{post.blogTitle}</h3>
              {/* <p className="text-gray-700 mb-4">{post.content.substring(0, 120)}...</p> */}
              <div className="flex justify-between items-center">
                <a href="#" className="text-[#ae9d78] hover:text-[#fbf8f5] transition-colors duration-300">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>













    

  );
};

export default BlogPage;

