import React, { useEffect } from 'react';
import {
  Form, Input, Row, Col, Modal
} from 'antd';
import { Alert } from '../../interfaces/Alert';

interface IAlertForm {
  visible: boolean;
  readonly: boolean;
  title: string;
  handleCancel: (e: React.MouseEvent<HTMLElement>) => void;
  handleSubmit: Function;
  alertSelect: Alert
}

const AlertForm = ({
  visible,
  readonly,
  title,
  handleCancel,
  handleSubmit,
  alertSelect,
}: IAlertForm) => {
  const {
    backend, numRequests, operation, timestamp
  } = alertSelect;

  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      form.setFieldsValue({
        backend,
        numRequests,
        operation,
        timestamp
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const onOk = () => {
    form.validateFields().then((values) => {
      handleSubmit({
        ...values
      });
    });
  };

  const handleCose = () => {
    form.resetFields();
  };

  const formFullLayout = {
    labelCol: { xxl: 8, xl: 9 },
    wrapperCol: { xxl: 16, xl: 15 },
  };

  return (
    <Modal
      visible={visible}
      title={title}
      okText="Aceptar"
      cancelText="Cancelar"
      onCancel={handleCancel}
      onOk={onOk}
      afterClose={handleCose}
      closable={false}
      maskClosable={false}
      width="50%"
      className="custom-modal-plantsForm"
      forceRender
      centered
    >
      <Form form={form}>
        <Row gutter={8}>
          <Col span={20}>
            <Form.Item
              label="Backend"
              name="backend"
              rules={[
                { required: true, message: 'Backend must be required' }
              ]}
              {...formFullLayout}
            >
              <Input disabled={readonly}/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={20}>
            <Form.Item
              label="Number Requests"
              name="numRequests"
              rules={[
                { required: true, message: 'Number Requests must be required' }
              ]}
              {...formFullLayout}
            >
              <Input disabled={readonly} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={20}>
            <Form.Item
              label="Operation"
              name="operation"
              rules={[
                { required: true, message: 'Operation must be required' }
              ]}
              {...formFullLayout}
            >
              <Input disabled={readonly} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={20}>
            <Form.Item
              label="Timestamp"
              name="timestamp"
              rules={[
                { required: true, message: 'Timestamp must be required' }
              ]}
              {...formFullLayout}
            >
              <Input disabled={readonly} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default AlertForm;