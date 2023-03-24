import { Button, Form, Input } from "antd";
import React from "react";

const TitlesPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    // do something with the updated titles and subtitles
    console.log(values);
  };

  return (
    <div>
      <h1>Titles and Subtitles</h1>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item label="Section 1 Title" name="section1Title">
          <Input placeholder="Section 1 Title" />
        </Form.Item>
        <Form.Item label="Section 1 Subtitle" name="section1Subtitle">
          <Input placeholder="Section 1 Subtitle" />
        </Form.Item>
        <Form.Item label="Section 2 Title" name="section2Title">
          <Input placeholder="Section 2 Title" />
        </Form.Item>
        <Form.Item label="Section 2 Subtitle" name="section2Subtitle">
          <Input placeholder="Section 2 Subtitle" />
        </Form.Item>
        <Form.Item label="Section 3 Title" name="section3Title">
          <Input placeholder="Section 3 Title" />
        </Form.Item>
        <Form.Item label="Section 3 Subtitle" name="section3Subtitle">
          <Input placeholder="Section 3 Subtitle" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TitlesPage;
