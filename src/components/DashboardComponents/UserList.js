import { message, Table } from "antd";
import { useEffect, useState } from "react";
import { deleteUser, updateUserRole } from "../api/userApi";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.websitesprofessional.com/api/v1/User")
      .then((response) => response.json())
      .then((users) => {
        console.log(users.data);
        setUsers(users.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const handleRoleChange = async (record, newRole) => {
    try {
      await updateUserRole(record.email, newRole);
      const updatedUsers = users.map((user) => {
        if (user.email === record.email) {
          return { ...user, role: newRole };
        } else {
          return user;
        }
      });
      setUsers(updatedUsers);
      message.success(`Role updated to ${newRole}`);
    } catch (error) {
      console.error("Error updating role:", error);
      message.error("Error updating role. Please try again.");
    }
  };

  const handleDeleteUser = async (record) => {
    try {
      await deleteUser(record.email);
      const updatedUsers = users.filter((user) => user.email !== record.email);
      setUsers(updatedUsers);
      message.success("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      message.error("Error deleting user. Please try again.");
    }
  };

  const adminColumns = [
    {
      title: "Name",
      dataIndex: "displayName",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <>
          {record.role !== "super-admin" && (
            <select
              value={record.role}
              onChange={(e) => handleRoleChange(record, e.target.value)}
            >
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          )}
          <button onClick={() => handleDeleteUser(record)}>Delete</button>
        </>
      ),
    },
  ];

  const superAdminColumns = [
    {
      title: "Name",
      dataIndex: "displayName",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <>
          {record.role !== "super-admin" && (
            <select
              value={record.role}
              onChange={(e) => handleRoleChange(record, e.target.value)}
            >
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
              <option value="super-admin">Super Admin</option>
            </select>
          )}
          <button onClick={() => handleDeleteUser(record)}>Delete</button>
        </>
      ),
    },
  ];

  const userColumns = [
    {
      title: "Name",
      dataIndex: "displayName",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
  ];

  return (
    <div>
      <h1>User List</h1>
      <Table
        dataSource={users}
        columns={superAdminColumns}
        loading={loading}
        rowKey={(record) => record.email}
      />
    </div>
  );
};

export default UserList;
