import React, { useRef, useState, useMemo } from "react";
import JoditEditor from "jodit-react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { usePackage } from "../../Hooks/usePackage";
import LoadingComponent from "../../shared/LoadingComponent";
import { useSinglePackage } from "../../Hooks/useSinglePackage";

const UpdatePackage = (e) => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [Load, setLoad] = useState(false);
  const { id } = useParams();

  const queryClient = useQueryClient();
  const [Packages, refetch] = usePackage();
  const [Package, isLoading] = useSinglePackage(id);
  console.log(Package, Package.content);

  const [content, setContent] = useState(Package.content);
  const [image, setImage] = useState(null);

  const handleUpdateProject = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    setLoad(true);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "NJ_images");
    formData.append("cloud_name", "dvmwear6h");

    console.log(formData);
    fetch("https://api.cloudinary.com/v1_1/dvmwear6h/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.asset_id) {
          const img = data.url;
          const newProject = { name, price, img, content };
          console.log(newProject);
          const res = await axios.put(
            `http://localhost:5000/api/v1/package/${id}`,
            newProject
          );

          if (res) {
            setLoad(false);
            refetch();
            if (res.data.success) {
              toast("update successful");
              navigate("/dashboard/package");
            }
          }
        }
      })
      .catch((err) => {
        setLoad(false);
        console.log(err);
      });
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
            // defaultValue={Package?.name}
          />
        </div>
        <div className="mb-5">
          <input
            name="price"
            type="number"
            className="border w-full h-14 pl-5"
            placeholder="Package price"
            // defaultValue={Package?.price}
          />
        </div>

        <div className="mb-5">
          <input
            name="image"
            className="border w-full h-14 pl-5"
            placeholder="Your Images"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
            type="file"
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
