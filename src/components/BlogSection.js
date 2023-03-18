import React from "react";
import { Link } from "react-router-dom";
import { useBlog } from "../Hooks/useBlogs";

const BlogSection = () => {
  const [Blog, isLoading, refetch] = useBlog();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl lg:text-5xl pb-4 pt-10 xl:lg:pt-20 font-title pt-10 text-center">LAST 4 BLOG POSTS</h1>
          <Link to="/blog" className="text-gray-800 font-medium hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Blog?.data?.slice(-4).map((post) => {
            return (
              <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    className="w-full h-64 object-cover"
                    loading="lazy"
                    src={post.img}
                    alt={post.blogTitle}
                  />
                  <div className="absolute bottom-0 left-0 px-6 py-4">
                    <h2 className="text-2xl font-semibold text-white">{post.blogTitle}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{post.blogDescription}</p>
                  <a href={`/blog/${post.slug}`} className="text-gray-800 font-medium hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
