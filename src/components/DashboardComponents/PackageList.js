import { Table } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { usePackage } from "../../Hooks/usePackage";
import LoadingComponent from "../../shared/LoadingComponent";
import HeaderDashBoard from "./HeaderDashBoard";

const PackageList = () => {
  const [load, setLoad] = useState(false);

  const [Packages, isLoading, refetch] = usePackage();

  const deletePackage = (id) => {
    setLoad(true);

    fetch(`https://bored-yoke-bee.cyclic.app/api/v1/package/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setLoad(false);
          refetch();
          toast("package deleted successfully");
        }
      });
  };

  //   antd resource
  const columns = [
    {
      title: "Title",
      dataIndex: "name",
      key: "_id",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
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
                to={`/dashboard/update-package/${_id}`}
                className="w-20 h-10 flex justify-center border border-1 border-orange-500 items-center hover:text-white hover:bg-orange-500 cursor-pointer"
              >
                Update
              </Link>
              <button
                onClick={() => deletePackage(_id)}
                className="w-20 h-10 flex justify-center border border-1 border-red-500 items-center hover:text-white hover:bg-red-500 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </>
        );
      },
    },
  ];
  const data = Packages?.data;

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div>
      <HeaderDashBoard title="package" src="/dashboard/create-package" />
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

export default PackageList;
