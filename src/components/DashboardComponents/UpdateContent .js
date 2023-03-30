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
    useEffect(() => {
        setContent(contentData?.aboutMeContent);
    }, [contentData]);

    console.log(contentData.aboutMeContent);
    const initialValues = {
        websiteSlogan: contentData.websiteSlogan,
        // websiteLogo: contentData.websiteLogo,
        aboutMeContent: contentData.aboutMeContent,
        aboutMeSubTitle: contentData.aboutMeSubTitle,
        websiteSlogan: contentData.websiteSlogan,
        heroTitle: contentData.heroTitle,
        heroSubTitle: contentData.heroSubTitle,
        phone: contentData.phone,
        email: contentData.email,
        github: contentData.github,
        linkdin: contentData.linkdin,
        instagram: contentData.instagram,
        facebook: contentData.facebook
    }

    useEffect(() => {
        form.setFieldsValue(initialValues);
    }, [form, initialValues]);

    const [imageData, setImageData] = useState('');
    useEffect(() => {
        setImageData(contentData?.aboutMeImage);
    }, [contentData]);

    const [logoData, setLogoData] = useState('');
    useEffect(() => {
        setLogoData(contentData?.websiteLogo);
    }, [contentData]);
    // console.log(contentData.aboutMeContent);
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageData(reader.result);
        };
        // console.log();
    };


    const handleLogoUpload = (event) => {
        console.log(event.target.files);
        const file2 = event.target.files[0];
        const reader2 = new FileReader();
        reader2.readAsDataURL(file2);
        reader2.onloadend = () => {
            setLogoData(reader2.result);
        };
        // console.log();
    };
    const handleFormSubmit = async (values) => {

        try {
            setLoading(true);
            const formData = {
                websiteSlogan: values.websiteSlogan,
                websiteLogo: logoData,
                aboutMeContent: content,
                aboutMeImage: imageData,
                aboutMeSubTitle: values.aboutMeSubTitle,
                heroTitle: values.heroTitle,
                heroSubTitle: values.heroSubTitle,
                phone: values.phone,
                email: values.email,
                github: values.github,
                linkdin: values.linkdin,
                instagram: values.instagram,
                facebook: values.facebook,
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
                <Form.Item label="Website Logo" name="websiteLogo">
                    {/* {contentData.aboutMeContent} */}
                    <img src={contentData.websiteLogo} style={{ height: 100 }} alt="" />
                    <Input type="file" onChange={handleLogoUpload} name="websiteLogo" />
                </Form.Item>
                <Form.Item label="website slogan" name="websiteSlogan">
                    <Input placeholder="website slogan" />
                </Form.Item>



                <Form.Item label="About Me Subtitle" name="aboutMeSubTitle" >
                    <Input placeholder="About Me Subtitle" name="aboutMeSubTitle" />
                </Form.Item>



                <Form.Item label="About Me Content" name="aboutMeContent">
                    <JoditEditor
                        name="aboutMeContent"
                        ref={editor}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this 
                    // onChange={(newContent) => { }}
                    />
                </Form.Item>
                <Form.Item label="About Me Image" name="aboutMeImage">
                    {/* {contentData.aboutMeContent} */}
                    <img src={contentData.aboutMeImage} style={{ height: 100 }} alt="" />
                    <Input type="file" onChange={handleImageUpload} name="aboutMeImage" />
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
                
                <Form.Item label="Facebook" name="facebook">
                    <Input placeholder="Facebook" />
                </Form.Item>

                <Button type="primary" htmlType="submit" loading={loading}>
                    Update Content
                </Button>

            </Form>
        </div>
    );
};

export default UpdateContent;