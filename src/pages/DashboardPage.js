import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // Queries
  const getUsers = async () => {
    const { data } = await axios.get("https://bored-yoke-bee.cyclic.app/api/v1/user");
    return data;
  };
  const { data: databaseUser, isLoading } = useQuery({
    queryKey: ["Users"],
    queryFn: getUsers,
  });
  const [user, Loading] = useAuthState(auth);

  const visitor = databaseUser?.data?.find((u) => u.email === user.email);
  const isAdmin = visitor?.role;
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            padding: 24,
            minHeight: 600,
            background: colorBgContainer,
          }}
        >
          <div className="logo grid justify-center mb-5">
            <Link to="/">
              <img
                className="w-36"
                src="logo.png"
                alt=""
              />
            </Link>
          </div>
          <Menu
            theme="lite"
            onClick={(e) => {
              navigate(e.key);
            }}
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "profile",
                icon: <UserOutlined />,
                label: "Profile",
              },
              {
                key: "my-order",
                icon: <UserOutlined />,
                label: "My Orders",
              },
              {
                key: "slider",
                icon: <VideoCameraOutlined />,
                label: "Slider",
              },
              {
                key: "project",
                icon: <UploadOutlined />,
                label: "Project",
              },
              {
                key: "instagram",
                icon: <UploadOutlined />,
                label: "instagram",
              },
              {
                key: "package",
                icon: <UploadOutlined />,
                label: "package",
              },
              {
                key: "blog",
                icon: <UploadOutlined />,
                label: "blog",
              },
              {
                key: "orders",
                icon: <UploadOutlined />,
                label: "Orders",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="flex justify-between items-center"
            style={{ padding: 20, background: colorBgContainer }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <div>
              <ul className="flex gap-5">
                <li>Hey {user?.displayName || "User"}!</li>
                <li className="inline-block">
                  <button className="text-red-500" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 600,
              background: colorBgContainer,
            }}
          >
            {<Outlet />}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
