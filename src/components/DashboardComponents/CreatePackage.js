import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePackage } from "../../Hooks/usePackage";

const CreatePackage = (e) => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [Load, setLoad] = useState(false);

  const queryClient = useQueryClient();
  const [Packages, isLoading, refetch] = usePackage();




  const postProject = async (e) => {
    e.preventDefault();
    setLoad(true);
    const name = e.target.name.value;
    const price = e.target.price.value;
    const newProject = { name, price, content };
    // console.log(newProject);
    try {
      
      const response = await axios.post('http://localhost:5000/api/v1/package',
        newProject);

      if (response.data.success) {
        e.target.reset();
        navigate("/dashboard/package");
        toast("package Post added Successfull");
      }
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div>
      <form onSubmit={postProject}>
        <div className="mb-5">
          <input
            name="name"
            type="text"
            className="border w-full h-14 pl-5"
            placeholder="Package Name"
          />
        </div>
        <div className="mb-5">
          <input
            name="price"
            type="text"
            className="border w-full h-14 pl-5"
            placeholder="Package Price"
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
            placeholder="Service Name"
            value={`${Load ? "Loading" : "Submit"}`}
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePackage;
