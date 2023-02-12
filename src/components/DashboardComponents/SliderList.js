import { Table } from "antd";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSlider } from "../../Hooks/useSlider";
import LoadingComponent from "../../shared/LoadingComponent";
import HeaderDashBoard from "./HeaderDashBoard";

const SliderList = () => {
  const [image, setImage] = useState(null);
  const [sliderTitle, setSliderTitle] = useState("");
  const [load, setLoad] = useState(false);
  const [sliderDesc, setSliderDesc] = useState("");
  const imageInputRef = useRef();
  const [addBtnActive, setAddBtnActive] = useState(false);
  const [Sliders, isLoading, refetch] = useSlider();

  const deleteSlider = (id) => {
    setLoad(true);

    fetch(`https://bored-yoke-bee.cyclic.app/api/v1/slider/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setLoad(false);
          refetch();
          toast("slider deleted successfully");
        }
      });
  };

  //   antd resource

  const columns = [
    {
      title: "Title",
      dataIndex: "sliderTitle",
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
              <Link
                to={`/dashboard/update-slider/${_id}`}
                className="w-20 h-10 flex justify-center border border-1 border-orange-500 items-center hover:text-white hover:bg-orange-500"
              >
                Update
              </Link>
              <button
                onClick={() => deleteSlider(_id)}
                className="w-20 h-10 flex justify-center border border-1 border-red-500 items-center hover:text-white hover:bg-red-500"
              >
                Delete
              </button>
            </div>
          </>
        );
      },
    },
  ];
  const data = Sliders?.data;

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div>
      <HeaderDashBoard title="Slider" src="/dashboard/create-slider" />

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

export default SliderList;
