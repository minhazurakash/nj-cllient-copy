import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useInitialValue } from "../../Hooks/useInitialValue";
import { usePackage } from "../../Hooks/usePackage";

const UpdatePackage = (e) => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [Load, setLoad] = useState(false);
  const { id } = useParams();

  const queryClient = useQueryClient();
  const [Packages, isLoad, refetch] = usePackage();
  const [Package, isLoading] = useInitialValue("package", id);

  const [content, setContent] = useState("");
  useEffect(() => {
    setContent(Package?.content);
  }, [Package]);



  const handleUpdateProject = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const priceToShow = e.target.priceToShow.value;
    const newProject = { name, price,priceToShow, content };
    setLoad(true);
    try {
      const response = await axios.put(`https://api.websitesprofessional.com/api/v1/package/${id}`, newProject);

      console.log(response.data);

      if (response.data.success) {
        navigate("/dashboard/package");
        toast('Blog post updated successfully!');
      }
    } catch (error) {
      console.error(error);
    }
  };



 
  // if (isLoading) {
  //   return <LoadingComponent />;
  // }
  return (
    <div>
      <form onSubmit={handleUpdateProject}>
        <div className="mb-5">
          <input
            name="name"
            type="text"
            className="border w-full h-14 pl-5"
            placeholder="Package Name"
            defaultValue={Package?.name}
          />
        </div>
        <div className="mb-5">
          <input
            name="price"
            type="text"
            className="border w-full h-14 pl-5"
            placeholder="Package price"
            defaultValue={Package?.price}
          />
        </div>
        <div className="mb-5">
          <input
            name="priceToShow"
            type="text"
            className="border w-full h-14 pl-5"
            placeholder="Package price"
            defaultValue={Package?.priceToShow}
          />
        </div>


        <div>
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
          />
        </div>
        <div className="mt-8">
          <input
            type="submit"
            className="w-36 h-10 flex justify-center border border-1 border-red-500 items-center hover:text-white hover:bg-red-500 cursor-pointer"
            placeholder="Project Name"
            value={`${Load ? "Loading" : "Submit"}`}
          />
        </div>
      </form>
    </div>
  );
};

export default UpdatePackage;
