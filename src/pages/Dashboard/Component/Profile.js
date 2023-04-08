import { Button, Col, Form, Input, Row } from "antd";
import { getAuth, updatePassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { getUserProfile } from "../../../components/api/UserApi";
import auth from "../../../firebase.init";
import LoadingComponent from "../../../shared/LoadingComponent";
import MyOrders from "./MyOrders";

const Profile = () => {
  // const [updateProfile, updating] = useUpdateProfile(auth);
  const [profile, setProfile] = useState({});
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile();
        setProfile(userProfile);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleProfileSubmit = async (values) => {
    console.log(values.name);
    updateProfile(auth.currentUser, {
      displayName: values.name,
    })
      .then(() => {
        toast.success("Update User Name Success Full");
      })
      .catch((error) => {
        console.log(error);
        toast.success("error");
      });
  };
  const handlePasswordSubmit = async (values) => {
    console.log(values);
    const authUserData = getAuth();

const userData = authUserData.currentUser;
    const newPass = values.confirmNewPassword
    updatePassword(userData, newPass).then(() => {
      toast.success("Updated password");
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      toast.error(errorMessage);
    });
   
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg">
          <div className="flex justify-between items-center px-8 py-6 border-b border-gray-200">
            <h1 className="text-3xl lg:text-4xl font-bold">User Dashboard</h1>
            <Button type="link" className="bg-[#F5F2EC ] border-[#a5a5a5] border-2  text-[#a5a5a5] m-2 hover:bg-[#AE9D78] hover:text-white hover:border-white font-bold py-2 px-4">Logout</Button>
          </div>
          <MyOrders />
          <Row justify="center" gutter={[16, 16]}>
            <Col xs={24} md={16}>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
                <Form
                  layout="vertical"
                  onFinish={handleProfileSubmit}
                  initialValues={{
                    name: user.displayName,
                  }}
                >
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input
                      className="bg-gray-100 border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-600"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="bg-[#F5F2EC ] border-[#a5a5a5] border-2  text-[#a5a5a5] m-2 hover:bg-[#AE9D78] hover:text-white hover:border-white font-bold py-2 px-4"
                    >
                      Save
                    </Button>
                  </Form.Item>






                </Form>

              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Change Password</h2>
                <Form
                  layout="vertical"
                  onFinish={handlePasswordSubmit}
                  initialValues={{
                    password: "",
                    newPassword: "",
                    confirmNewPassword: "",
                  }}
                >
                  <Form.Item
                    label="Current Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your current password!",
                      },
                    ]}
                  >
                    <Input.Password
                      className="bg-gray-100 border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-600"
                      placeholder="Enter your current password"
                      autoComplete="current-password"
                    />
                  </Form.Item>
                  <Form.Item
                    label="New Password"
                    name="newPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your new password!",
                      },
                      {
                        min: 6,
                        message: "Password must be at least 6 characters!",
                      },
                    ]}
                  >
                    <Input.Password
                      className="bg-gray-100 border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-600"
                      placeholder="Enter your new password"
                      autoComplete="new-password"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Confirm New Password"
                    name="confirmNewPassword"
                    dependencies={["newPassword"]}
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your new password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            getFieldValue("newPassword") === value
                          ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "The two passwords do not match!"
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      className="bg-gray-100 border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-600"
                      placeholder="Confirm your new password"
                      autoComplete="new-password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="bg-[#F5F2EC ] border-[#a5a5a5] border-2  text-[#a5a5a5] m-2 hover:bg-[#AE9D78] hover:text-white hover:border-white font-bold py-2 px-4"
                      >
                        Save
                      </Button>
                    </Form.Item>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Profile;

