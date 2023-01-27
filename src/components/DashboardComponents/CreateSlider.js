import React, { useRef, useState, useMemo } from "react";
import JoditEditor from "jodit-react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "axios";
import { useSlider } from "../../Hooks/useSlider";
import { useNavigate } from "react-router-dom";

const CreateSlider = (e) => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [Load, setLoad] = useState(false);

  const queryClient = useQueryClient();
  const [Sliders, isLoading, refetch] = useSlider();
  console.log(Sliders);

  const postSlider = (e) => {
    e.preventDefault();
    setLoad(true);
    const title = e.target.name.value;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "NJ_images");
    formData.append("cloud_name", "dvmwear6h");

    // post api call
    fetch("https://api.cloudinary.com/v1_1/dvmwear6h/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.asset_id) {
          const img = data.url;
          const Slider = { sliderTitle: title, img, sliderDesc: content };
          const res = await axios.post(
            "http://localhost:5000/api/v1/slider",
            Slider
          );
          if (res) {
            setLoad(false);
            refetch();
            if (res.data.success) {
              e.target.reset();
              navigate("/dashboard/slider");
              toast("Slider Post added Successfull");
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //clear all input field
  };

  return (
    <div>
      <form onSubmit={postSlider}>
        <div className="mb-5">
          <input
            name="name"
            type="text"
            className="border w-full h-14 pl-5"
            placeholder="Service Name"
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
            placeholder="Service Name"
            value={`${Load ? "Loading" : "Submit"}`}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateSlider;
