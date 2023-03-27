import { Table } from "antd";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useBlog } from "../../Hooks/useBlogs";
import Canview from "../../shared/CanView";
import LoadingComponent from "../../shared/LoadingComponent";
import HeaderDashBoard from "./HeaderDashBoard";

const BlogList = () => {
  const [image, setImage] = useState(null);
  const [sliderTitle, setSliderTitle] = useState("");
  const [load, setLoad] = useState(false);
  const [sliderDesc, setSliderDesc] = useState("");
  const imageInputRef = useRef();
  const [addBtnActive, setAddBtnActive] = useState(false);
  const [Blogs, isLoading, refetch] = useBlog();

  const deleteBlog = (id) => {
    setLoad(true);

    fetch(`https://api.websitesprofessional.com/api/v1/blog/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setLoad(false);
          refetch();
          toast("blog deleted successfully");
        }
      });
  };

  //   antd resource

  const columns = [
    {
      title: "Title",
      dataIndex: "blogTitle",
      key: "_id",
    },

    {
      title: "Action",
      dataIndex: "_id",
      key: "x",
      render: (_id) => {
        return (
          <>
            <div className="flex gap-5">
            <Canview requiredRole={['super-admin','admin']} >
              <Link
                to={`/dashboard/update-blog/${_id}`}
                className="w-20 h-10 flex justify-center border border-1 border-orange-500 items-center hover:text-white hover:bg-orange-500"
              >
                Update
              </Link>
              </Canview>
              <Canview requiredRole={['super-admin']} >
                <div>
                  <button
                    onClick={() => deleteBlog(_id)}
                    className="w-20 h-10 flex justify-center border border-1 border-red-500 items-center hover:text-white hover:bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </Canview>

            </div>
          </>
        );
      },
    },
  ];
  const data = Blogs?.data;

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div>
      <HeaderDashBoard title="Blogs" src="/dashboard/create-blog" />

      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <div className="w-36">
              <img src={record?.img} alt="" />
            </div>
          ),
        }}
        dataSource={data}
      />
    </div>
  );
};

export default BlogList;
