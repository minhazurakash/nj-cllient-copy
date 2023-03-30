import { Button, Col, Form, Input, Row } from "antd";
import { updatePassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState, useUpdateEmail, useUpdateProfile } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { getUserProfile } from "../../../components/api/userApi";
import auth from "../../../firebase.init";
import LoadingComponent from "../../../shared/LoadingComponent";

const Profile = () => {
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [updateEmail] = useUpdateEmail(auth);
  const [profile, setProfile] = useState({});
  const [password, setPassword] = useState({});
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
    const success = await updatePassword(values.newPassword);
    if (success) {
      alert("Updated password");
    }
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <Row justify="center" gutter={[16, 16]}>
        <Col span={16}>
          <div className="p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl lg:text-5xl font-bold text-center pb-4">
              User Dashboard
            </h1>
            <Form
              layout="vertical"
              onFinish={handleProfileSubmit}
              initialValues={{
                name: user.displayName,
                email: user.email,
              }}
            >
              <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
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
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Save
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
