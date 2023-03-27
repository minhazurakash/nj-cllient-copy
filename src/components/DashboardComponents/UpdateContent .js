import { Button, Form, Input, message } from "antd";
import axios from "axios";
import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";

const UpdateContent = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const editor = useRef(null);

    const [contentData, getContent] = useState({});
    useEffect(() => {
        fetch(`https://api.websitesprofessional.com/api/v1/content/641da964fe0d23ca3d1ec900`)
          .then((res) => res.json())
          .then((data) => {
            getContent(data?.data);
          });
      }, []);
      const [content, setContent] = useState("");


console.log(contentData.aboutMeContent);
    const initialValues = {
        aboutMeContent:contentData.aboutMeContent ,
        aboutMeSubTitle:contentData.aboutMeSubTitle,
        heroTitle:contentData.heroTitle ,
        heroSubTitle:contentData.heroSubTitle ,
        phone:contentData.phone ,
        email:contentData.email ,
        github:contentData.github,
        linkdin:contentData.linkdin ,
        instagram:contentData.instagram 
      }

      useEffect(() => {
        form.setFieldsValue(initialValues);
      }, [form, initialValues]);
      
    // console.log(contentData.aboutMeContent);
    const handleFormSubmit = async (values) => {
        try {
            setLoading(true);
            const formData = {
                aboutMeContent: content,
                aboutMeSubTitle: values.aboutMeSubTitle,
                heroTitle: values.heroTitle,
                heroSubTitle: values.heroSubTitle,
                phone: values.phone,
                email: values.email,
                github: values.github,
                linkdin: values.linkdin,
                instagram: values.instagram,
            };
            setContent(content)
            console.log(formData);
            const response = await axios.put(
                "https://api.websitesprofessional.com/api/v1/content/641da964fe0d23ca3d1ec900",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response && response.data.success) {
                message.success("Content updated successfully!");
            }
        } catch (error) {
            console.log(error);
            message.error("Failed to update content, please try again later.");
        } finally {
            setLoading(false);
        }
    };
// console.log(contentData.aboutMeSubTitle);


console.log(content)
    return (
        <div>
            <h1>Update Content</h1>
            <Form form={form} initialValues={initialValues} onFinish={handleFormSubmit}>
                <Form.Item label="About Me Subtitle" name="aboutMeSubTitle" >
                    <Input placeholder="About Me Subtitle" name="aboutMeSubTitle" />
                </Form.Item>
                <Form.Item label="About Me Content" name="aboutMeContent">
                    <JoditEditor
                    name="aboutMeContent"
                        ref={editor}
                        // value={content}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        // defaultValue={contentData.aboutMeContent}
                        
                        onChange={(newContent) => { }}
                    />
                </Form.Item>
                <Form.Item label="Hero Title" name="heroTitle">
                    <Input placeholder="Hero Title" />
                </Form.Item>
                <Form.Item label="Hero Subtitle" name="heroSubTitle">
                    <Input placeholder="Hero Subtitle" />
                </Form.Item>
                <Form.Item label="Phone" name="phone">
                    <Input placeholder="Phone" />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item label="GitHub" name="github">
                    <Input placeholder="GitHub" />
                </Form.Item>
                <Form.Item label="linkdin" name="linkdin">
                    <Input placeholder="linkdin" />
                </Form.Item>
                <Form.Item label="Instagram" name="instagram">
                    <Input placeholder="Instagram" />
                </Form.Item>

                <Button type="primary" htmlType="submit" loading={loading}>
                    Update Content
                </Button>

            </Form>
        </div>
    );
};

export default UpdateContent;