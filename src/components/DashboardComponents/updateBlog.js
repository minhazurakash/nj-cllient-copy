import { useQueryClient } from "@tanstack/react-query";
import { Button, Upload } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import axios from "axios";
import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useBlog } from "../../Hooks/useBlogs";
import { useInitialValue } from "../../Hooks/useInitialValue";

const UpdateBlog = (e) => {
  const navigate = useNavigate();
  const editor = useRef(null);
  const [Load, setLoad] = useState(false);
  const { id } = useParams();
  const [initialValue, isLoad] = useInitialValue("blog", id);

  const queryClient = useQueryClient();
  const [blog, isLoading, refetch] = useBlog();
  console.log(blog);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    setContent(initialValue?.blogDesc);
  }, [initialValue]);

  const handleUpdateProject = async (e) => {
    e.preventDefault();
    const blogTitle = e.target.name.value;
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
            const newProject = { blogTitle, img, blogDesc: content };
            console.log(newProject);
            const res = await axios.put(
              `http://localhost:5000/api/v1/blog/${id}`,
              newProject
            );

            if (res) {
              setLoad(false);
              refetch();
              if (res.data.success) {
                toast("update successful");
                navigate("/dashboard/blog");
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
      const newProject = { blogTitle, img, blogDesc: content };
      console.log(newProject);
      const res = await axios.put(
        `http://localhost:5000/api/v1/blog/${id}`,
        newProject
      );

      if (res) {
        setLoad(false);
        refetch();
        if (res.data.success) {
          toast("update successful");
          navigate("/dashboard/blog");
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
            placeholder="Blog Name"
            defaultValue={initialValue?.blogTitle}
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
            value={`${Load ? "Loading" : "Submit"}`}
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;
