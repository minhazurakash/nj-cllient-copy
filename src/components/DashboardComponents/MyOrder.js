import { Table } from "antd";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { useOrder } from "../../Hooks/useOrder";
import LoadingComponent from "../../shared/LoadingComponent";
import HeaderDashBoard from "./HeaderDashBoard";

const MyOrder = () => {
  const [load, setLoad] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const [Orders, isLoading, refetch] = useOrder();
  const myOrders = Orders?.data?.filter(
    (order) => order?.userEmail === user?.email
  );

  const deleteSlider = (id) => {
    setLoad(true);

    fetch(`https://bored-yoke-bee.cyclic.app/api/v1/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setLoad(false);
          refetch();
          toast("order deleted successfully");
        }
      });
  };

  //   antd resource

  const columns = [
    {
      title: "Package Name",
      dataIndex: "packageName",
      key: "packageName",
    },
    {
      title: "Package Price",
      dataIndex: "packagePrice",
      key: "packagePrice",
    },
    {
      title: "Customer Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Customer Email",
      dataIndex: "userEmail",
      key: "userEmail",
    },

    {
      title: "Action",
      dataIndex: "_id",
      key: "x",
      render: (_id) => {
        return (
          <>
            <div className="flex gap-5">
              <button className="w-20 h-10 flex justify-center border border-1 border-orange-500 items-center hover:text-white hover:bg-orange-500">
                Payment
              </button>
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
  const data = myOrders;

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div>
      <HeaderDashBoard title="Orders" src="" />

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

export default MyOrder;
