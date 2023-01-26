import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import LoadingOverlay from "../../shared/LoadingOverlay";
import { Table } from "antd";
import { Link } from "react-router-dom";
import LoadingComponent from "../../shared/LoadingComponent";

const ProjectList = () => {
  const [image, setImage] = useState(null);
  const [sliderTitle, setSliderTitle] = useState("");
  const [load, setLoad] = useState(false);
  const [sliderDesc, setSliderDesc] = useState("");
  const imageInputRef = useRef();
  const [addBtnActive, setAddBtnActive] = useState(false);

  const getProject = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/project");
    return data;
  };
  const { data: Projects, isLoading } = useQuery({
    queryKey: ["Project"],
    queryFn: getProject,
  });
  console.log(Projects?.data);

  //   const deleteBlog = (id) => {
  //     setLoad(true);

  //     fetch(`http://localhost:5000/api/v1/slider/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         if (result.success) {
  //           setLoad(false);
  //           toast("slider deleted successfully");
  //         }
  //       });
  //   };

  //   antd resource
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "_id",
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => {
        return (
          <>
            <div className="flex gap-5">
              <Link className="w-20 h-10 flex justify-center border border-1 border-orange-500 items-center hover:text-white hover:bg-orange-500">
                Update
              </Link>
              <button className="w-20 h-10 flex justify-center border border-1 border-red-500 items-center hover:text-white hover:bg-red-500">
                Delete
              </button>
            </div>
          </>
        );
      },
    },
  ];
  const data = Projects?.data;

  if (load || isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <div className="w-36">
              <img src={record?.img} alt="" />
            </div>
          ),
          //   rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />
    </div>
  );
};

export default ProjectList;
