import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import LoginPage from '../pages/LoginPage';

const LoginModal = ({ visible, onCancel }) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);

    // Perform login here
  };

  return (
    <Modal
      visible={visible}
      title="Login"
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Login
        </Button>,
      ]}
    >
      <LoginPage></LoginPage>
    </Modal>
  );
};

export default LoginModal;
