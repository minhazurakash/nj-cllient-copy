import { UploadOutlined } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";
import { Button, Upload } from "antd";
import axios from "axios";
import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useInstagram } from "../../Hooks/useInstagram";

const CreateInstagram = (e) => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [Load, setLoad] = useState(false);

  const queryClient = useQueryClient();
  const [Instagram, isLoading, refetch] = useInstagram();

  const handleChange = (info) => {
    if (info.file.status === "done") {
      setImage(info.file.originFileObj);
    }
  };

  const addInstagram = (e) => {
    e.preventDefault();
    setLoad(true);
    const title = e.target.name.value;
    const link = e.target.link.value;
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
          const project = { title, img, link, content };
          const res = await axios.post(
            "https://bored-yoke-bee.cyclic.app/api/v1/instagram",
            project
          );
          if (res) {
            setLoad(false);
            refetch();
            if (res.data.success) {
              e.target.reset();
              navigate("/dashboard/instagram");
              toast("instagram Post added Successfull");
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
      <form onSubmit={addInstagram}>
        <div className="mb-5">
          <input
            name="name"
            type="text"
            className="border w-full h-14 pl-5"
            placeholder="Insta post Name"
          />
        </div>
        <div className="mb-5">
          <input
            name="link"
            type="text"
            className="border w-full h-14 pl-5"
            placeholder="Insta link"
          />
        </div>

        {/* <div className="mb-5">
          <input
            name="image"
            className="border w-full h-14 pl-5"
            placeholder="Your Images"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
            type="file"
          />
        </div> */}
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          // defaultFileList={[...fileList]}
          maxCount={1}
          // rules={[{ required: true }]}
          onChange={(e) => {
            setImage(e.file.originFileObj);
          }}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        <br />
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

export default CreateInstagram;
