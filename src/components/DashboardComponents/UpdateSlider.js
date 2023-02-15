import { useQueryClient } from "@tanstack/react-query";
import { Button, Upload } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSlider } from "../../Hooks/useSlider";
import { useInitialValue } from "../../Hooks/useInitialValue";

const UpdateSlider = (e) => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [Load, setLoad] = useState(false);
  const { id } = useParams();
  const [initialValue, isLoad] = useInitialValue("slider", id);

  const [Slider, isLoading, refetch] = useSlider();
  console.log(Slider);
  const [image, setImage] = useState(null);

  const handleUpdateProject = async (e) => {
    e.preventDefault();
    const sliderTitle = e.target.name.value;
    setLoad(true);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "NJ_images");
    formData.append("cloud_name", "dvmwear6h");

    console.log(formData);
    if (image) {
      fetch("https://api.cloudinary.com/v1_1/dvmwear6h/image/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then(async (data) => {
          if (data.asset_id) {
            const img = data.url;
            const newProject = { sliderTitle, img };
            console.log(newProject);
            const res = await axios.put(
              `http://localhost:5000/api/v1/slider/${id}`,
              newProject
            );

            if (res) {
              setLoad(false);
              refetch();
              if (res.data.success) {
                toast("update successful");
                navigate("/dashboard/slider");
              }
            }
          }
        })
        .catch((err) => {
          setLoad(false);
          console.log(err);
        });
    } else {
      const img = initialValue?.img;
      const newProject = { sliderTitle, img };
      console.log(newProject);
      const res = await axios.put(
        `http://localhost:5000/api/v1/slider/${id}`,
        newProject
      );

      if (res) {
        setLoad(false);
        refetch();
        if (res.data.success) {
          toast("update successful");
          navigate("/dashboard/slider");
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleUpdateProject}>
        <div className="mb-5">
          <input
            name="name"
            type="text"
            className="border w-full h-14 pl-5"
            placeholder="Slider Name"
            defaultValue={initialValue?.sliderTitle}
          />
        </div>

        <div className="my-5">
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
            rules={[{ required: true }]}
            onChange={(e) => {
              setImage(e.file.originFileObj);
            }}
          >
            <Button
              className="w-44 md:w-80 h-20 border-dashed text-2xl"
              icon={<CloudUploadOutlined />}
            >
              Upload
            </Button>
          </Upload>
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

export default UpdateSlider;
