import { Button, Col, Form, Input, Row, Table, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { updatePassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState, useUpdateEmail, useUpdateProfile } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { getUserOrders, getUserProfile } from "../../components/api/userApi";
import auth from "../../firebase.init";
import Footer from "../../shared/Footer";
import LoadingComponent from "../../shared/LoadingComponent";
import Navigation from "../../shared/Navigation";

const UserDashboardPage = () => {
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [updateEmail] = useUpdateEmail(auth);
    const [profile, setProfile] = useState({});
    const [password, setPassword] = useState({});
    const [orders, setOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log(user);
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const userProfile = await getUserProfile();
                setProfile(userProfile);
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        };

        const fetchUserOrders = async () => {
            //  console.log(user.email);
            try {
                const userOrders = await getUserOrders(user.email);
                console.log(userOrders);
                setOrders(userOrders);
            } catch (error) {
                console.error("Error fetching user orders:", error);
            }

        };

        // fetchUserProfile();
        fetchUserOrders();
    }, []);

    const handleProfileSubmit = async (values) => {
        // console.log(values);
        const successName = await updateProfile({
            displayName: values.name,
            // email: values.email,
        });

    };

    const handlePasswordSubmit = async (values) => {
        // console.log(values.newPassword);
        const success = await updatePassword(values.newPassword);
        if (success) {
            alert('Updated password');
        }
    };

    const columns = [
        {
            title: "Order ID",
            dataIndex: "_id",
            key: "_id",
        },
        {
            title: "Product",
            dataIndex: "product",
            key: "product",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Total",
            dataIndex: "total",
            key: "total",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
    ];
    if (loading) {
        return <LoadingComponent />;
    }
    return (
        
        <>
<div>
<Navigation ></Navigation>
</div>


            <Tabs defaultActiveKey="profile" centered>
                <TabPane tab="Profile" key="profile">
                    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">


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
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    className="w-full"
                                                >
                                                    Save
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </div>




                    </div>
                </TabPane>
                <TabPane tab="Change Password" key="password">
                    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                        <Row justify="center" gutter={[16, 16]}>
                            <Col span={16}>
                                <div className="p-8 bg-white shadow-lg rounded-lg">
                                    <h1 className="text-4xl lg:text-5xl font-bold text-center pb-4">
                                        User Dashboard
                                    </h1>
                                    <Form
                                        layout="vertical"
                                        onFinish={handlePasswordSubmit}

                                    >
                                        <h2 className="text-2xl font-bold mb-4">Update Password</h2>
                                        <Form.Item
                                            label="oldPassword"
                                            name="oldPassword"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input your old Password!",
                                                    type: "password"
                                                },
                                            ]}
                                        >
                                            <Input.Password placeholder="Enter your old Password" />
                                        </Form.Item>
                                        <Form.Item
                                            label="newPassword"
                                            name="newPassword"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Please input your new Password!",
                                                    type: "password",
                                                },
                                            ]}
                                        >
                                            <Input.Password placeholder="Enter your new Password" />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                className="w-full"
                                            >
                                                Save
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </TabPane>
                <TabPane tab="Orders" key="orders">
                    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <h1 className="text-4xl lg:text-5xl font-bold text-center pb-4">User Dashboard</h1>
                                <Table dataSource={orders} columns={columns} />
                            </div>
                        </div>
                    </div>
                </TabPane>
            </Tabs>

            <Footer />
        </>


    );
};

export default UserDashboardPage;
