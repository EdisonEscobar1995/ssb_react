import React, { useEffect } from 'react';
import {
  Form, Input, Row, Col, Modal, InputNumber, Select
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

interface IOptionSelect {
  id: string | number;
  name: string;
}

const { Option } = Select;

const AlertForm = ({
  visible,
  readonly,
  title,
  handleCancel,
  handleSubmit,
  alertSelect,
}: IAlertForm) => {
  const {
    backend, numberRequests, operation, timestamp
  } = alertSelect;

  const [form] = Form.useForm();

  useEffect(() => {
    if (visible) {
      form.setFieldsValue({
        backend,
        numberRequests: parseFloat(numberRequests),
        operation,
        timestamp
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const getValueOperationAlert = (operation: string) => {
    let operationAlert = "";
    switch (operation) {
      case "WC":
        operationAlert = "warningcutoff";
        break;
      case "WE":
        operationAlert = "warningerror";
        break;
      case "C":
        operationAlert = "cutoff";
        break;
      default:
        operationAlert = "recover";
        break;
    }
    return operationAlert;
  };

  const onOk = () => {
    form.validateFields().then((values) => {
      handleSubmit({
        backend: values.backend,
        numberRequests: values.numberRequests,
      }, getValueOperationAlert(values.operation));
    });
  };

  const handleCose = () => {
    form.resetFields();
  };

  const formFullLayout = {
    labelCol: { xxl: 8, xl: 9 },
    wrapperCol: { xxl: 16, xl: 15 },
  };

  const operationOptions: IOptionSelect[] = [{
    id: "WC",
    name: "Warning cutoff"
  }, {
    id: "WE",
    name: "Warning error"
  }, {
    id: "C",
    name: "Cutoff"
  }, {
    id: "R",
    name: "Recover"
  }];

  const optionsBackend: IOptionSelect[] = [{
    id: "LMS",
    name: "LMS"
  }, {
    id: "BDC",
    name: "BDC"
  }, {
    id: "SSB",
    name: "SSB"
  }, {
    id: "INFR",
    name: "INFR"
  }, {
    id: "SCN",
    name: "SCN"
  }, {
    id: "MS",
    name: "MS"
  }, {
    id: "WCO",
    name: "WCO"
  }, {
    id: "STL",
    name: "STL"
  }];

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
              label="Operation"
              name="operation"
              rules={[
                { required: true, message: 'Operation must be required' }
              ]}
              {...formFullLayout}
            >
              <Select disabled={readonly}>
                {operationOptions.map((item: IOptionSelect) =>
                  <Option value={item.id}>{item.name}</Option>
                )}
              </Select>
            </Form.Item>
          </Col>
        </Row>
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
              <Select disabled={readonly}>
                {optionsBackend.map((item: IOptionSelect) =>
                  <Option value={item.id}>{item.name}</Option>
                )}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={20}>
            <Form.Item
              label="Number Requests"
              name="numberRequests"
              rules={[
                { required: true, message: 'Number Requests must be required' }
              ]}
              {...formFullLayout}
            >
              <InputNumber
                style={{ width: '100%' }}
                disabled={readonly}
                min={0}
              />
            </Form.Item>
          </Col>
        </Row>
        {alertSelect.backend !== "" && (
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
                <Input disabled />
              </Form.Item>
            </Col>
          </Row>
        )}
      </Form>
    </Modal>
  );
};

export default AlertForm;