import React, { useEffect } from 'react';
import {
  Form, Input, Row, Col, Button, Select, Table
} from 'antd';

interface ICognito {
  visible?: boolean;
  readonly?: boolean;
  title?: string;
  handleSubmit: Function;
  loading: boolean;
  dataSource: any[];
}

const Cognito = ({
  visible,
  readonly,
  title,
  handleSubmit,
  loading,
  dataSource
}: ICognito) => {

  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const onOk = () => {
    form.validateFields().then((values) => {
      handleSubmit(values.scope);
    });
  };
  
  const columns = [
    {
      title: 'Scope',
      dataIndex: 'scope',
      key: 'scope',
    },
    {
      title: 'Mensaje',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Respuesta completa',
      dataIndex: 'responseComplete',
      key: 'responseComplete',
    },
  ];

  console.log('dataSource == ', dataSource);

  return (
    <>
      <Row className="row-title">
        <Col>{title || ''}</Col>
      </Row>
      <Form form={form} layout={'inline'} onFinish={onOk}>
        <Row gutter={8}>
          <Col span={20}>
            <Form.Item
              label="Scope cognito"
              name="scope"
              rules={[
                { required: true, message: 'Scope es requerido' }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Consultar
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {dataSource.length > 0 && (
        <Table dataSource={dataSource} columns={columns} style={{ marginTop: '25px' }} />
      )}
    </>
  );
};

export default Cognito;