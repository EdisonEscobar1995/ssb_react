import React, { useEffect } from 'react';
import {
  Form, Input, Row, Col, Modal, Select
} from 'antd';
import { Company } from '../../interfaces/Company';

interface ICompanyForm {
  visible: boolean;
  readonly: boolean;
  title: string;
  handleCancel: (e: React.MouseEvent<HTMLElement>) => void;
  handleSubmit: Function;
  companySelect: Company
}

interface IOptionSelect {
  id: string | number;
  name: string;
}

const { Option } = Select;

const CompanyForm = ({
  visible,
  readonly,
  title,
  handleCancel,
  handleSubmit,
  companySelect,
}: ICompanyForm) => {
  const {
    id, description, idCountry, empresaCode, order
  } = companySelect;

  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      form.setFieldsValue({
        id,
        description,
        idCountry,
        empresaCode,
        order
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const onOk = () => {
    form.validateFields().then((values) => {
      // handleSubmit({
      //   backend: values.backend,
      //   numberRequests: values.numberRequests,
      // }, getValueOperationAlert(values.operation));
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
              label="Id empresa"
              name="id"
              rules={[
                { required: true, message: 'Id empresa es requerido' }
              ]}
              {...formFullLayout}
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={20}>
            <Form.Item
              label="Descripción"
              name="description"
              rules={[
                { required: true, message: 'Descripción es requerida' }
              ]}
              {...formFullLayout}
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={20}>
            <Form.Item
              label="Id País"
              name="idCountry"
              rules={[
                { required: true, message: 'Id país requerido' }
              ]}
              {...formFullLayout}
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={20}>
            <Form.Item
              label="Parámetro empresa"
              name="empresaCode"
              rules={[
                { required: true, message: 'Parámetro empresa requerido' }
              ]}
              {...formFullLayout}
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={20}>
            <Form.Item
              label="Orden"
              name="order"
              rules={[
                { required: true, message: 'Parámetro empresa requerido' }
              ]}
              {...formFullLayout}
            >
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default CompanyForm;