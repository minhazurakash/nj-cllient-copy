import { Table } from "antd";
import React, { useState } from "react";
import { useContact } from "../../Hooks/useContact";
import LoadingComponent from "../../shared/LoadingComponent";
import HeaderDashBoard from "./HeaderDashBoard";

const ContactList = () => {
  const [load, setLoad] = useState(false);

  const [Contacts, isLoading, refetch] = useContact();


    //   antd resource

    const columns = [
      {
        title: "Contact Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Contact Email",
        dataIndex: "email",
        key: "email",
      },
      {
        title: "Contact Phone",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "Contact message",
        dataIndex: "message",
        key: "message",
      },

    ];
    const data = Contacts?.data;

    if (isLoading) {
      return <LoadingComponent />;
    }
    return (
      <div>
        <HeaderDashBoard title="Contacts" src="" />
  
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
  
export default ContactList;
