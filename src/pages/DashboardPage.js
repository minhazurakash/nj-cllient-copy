import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import CanView from "../shared/CanView";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {

  
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // Queries
  const getUsers = async () => {
    const { data } = await axios.get("https://api.websitesprofessional.com/api/v1/user");
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

  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`https://api.websitesprofessional.com/api/v1/user/${user.email}`)
        .then((response) => response.json())
        .then((data) => {
          setUserRole(data.data.role);
        })
        .catch((error) => {
          console.error("Error fetching user role:", error);
        });
    }
  }, [user]);


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
              <img className="w-36" src="logo.png" alt="" />
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
                key: "Titles",
                icon: <UserOutlined />,
                label: "Title",
                className:<CanView requiredRole={['super-admin']}/>
              },
              {
                key: "users",
                icon: <UserOutlined />,
                label: "Users",
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
                key: "service",
                icon: <UploadOutlined />,
                label: "service",
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
              {
                key: "content",
                icon: <UploadOutlined />,
                label: "content",
              },
              {
                key: "Contacts",
                icon: <UploadOutlined />,
                label: "Contacts",
              },
            ]}
          />
        </Sider>
        <style>
    {`
      .hide {
        display: none;
      }
    `}
  </style>
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
                <li>Hey {user?.displayName || "User"}! </li>
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
