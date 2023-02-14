import React from "react";
import WhoWeAreSection from "../components/WhoWeAreSection";
import { useBlog } from "../Hooks/useBlogs";

const BlogSection = () => {
  
  const [Blog, isLoading, refetch] = useBlog();
  return (
    <div>
      {/* <WhoWeAreSection /> */}
      <div className="container mx-auto px-4">
        <div className="my-5">
          <h1 className="text-3xl font-bold text-center uppercase">our Blog</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Blog?.data?.map((i) => {
            return (
              <>
                <div className="my-14 border-2 p-5 rounded-lg text-center">
                  <div className="w-ful h-96">
                    <img
                      className="w-full h-full object-cover"
                      src={i?.img}
                      alt=""
                    />
                  </div>
                  <div className="text-center mt-5">
                    <h2 className="text-2xl font-bold uppercase">
                      {i?.blogTitle}
                    </h2>
                  </div>
                </div>
              </>
            );
          })}
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
