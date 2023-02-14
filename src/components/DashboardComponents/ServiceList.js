import { Table } from "antd";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useInstagram } from "../../Hooks/useInstagram";
import { useService } from "../../Hooks/useService";
import LoadingComponent from "../../shared/LoadingComponent";
import HeaderDashBoard from "./HeaderDashBoard";

const ServiceList = () => {
  const [load, setLoad] = useState(false);

  const [Service, isLoading, refetch] = useService();

  const deleteService = (id) => {
    setLoad(true);

    fetch(`http://localhost:5000/api/v1/service/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setLoad(false);
          refetch();
          toast("Service deleted successfully");
        }
      });
  };

  //   antd resource
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
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
                to={`/dashboard/update-service/${_id}`}
                className="w-20 h-10 flex justify-center border border-1 border-orange-500 items-center hover:text-white hover:bg-orange-500"
              >
                Update
              </Link>
              <button
                onClick={() => deleteService(_id)}
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
  const data = Service?.data;

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div>
      <HeaderDashBoard title="Service" src="/dashboard/create-service" />

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

export default ServiceList;
