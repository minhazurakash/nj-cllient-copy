import { Table } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { usePackage } from "../../Hooks/usePackage";
import Canview from "../../shared/CanView";
import LoadingComponent from "../../shared/LoadingComponent";
import HeaderDashBoard from "./HeaderDashBoard";

const PackageList = () => {
  const [load, setLoad] = useState(false);

  const [Packages, isLoading, refetch] = usePackage();

  const deletePackage = (id) => {
    setLoad(true);

    fetch(`https://api.websitesprofessional.com/api/v1/package/${id}`, {
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
      title: "Price to Show",
      dataIndex: "priceToShow",
      key: "priceToShow",
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
                to={`/dashboard/update-package/${_id}`}
                className="w-20 h-10 flex justify-center border border-1 border-orange-500 items-center hover:text-white hover:bg-orange-500 cursor-pointer"
              >
                Update
              </Link>
              </Canview>
              <Canview requiredRole={['super-admin']} >
              <button
                onClick={() => deletePackage(_id)}
                className="w-20 h-10 flex justify-center border border-1 border-red-500 items-center hover:text-white hover:bg-red-500 cursor-pointer"
              >
                Delete
              </button>
              </Canview>
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
