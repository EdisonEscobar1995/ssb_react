import { Table } from "../Common/Table";
import { useNavigate } from "react-router-dom";
import {
  UsergroupDeleteOutlined,
  EditOutlined,
  DeleteOutlined,
  DoubleRightOutlined
} from '@ant-design/icons';

const AlertsList = ({
  dataSource,
  loading,
  handleDelete,
  handleVisibleForm
}: any) => {
  const navigate = useNavigate();
  
  const columns = [
    {
      title: 'Backend',
      dataIndex: 'backend',
      key: 'backend',
      render: (text: any) => <a>{text}</a>,
      sorter: (a: any, b: any) => {
        const n = a.id.toLocaleLowerCase().localeCompare(b.id.toLocaleLowerCase());
        return n === 0 && a !== b ? b.id.localeCompare(a.id) : n;
      },
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      key: 'operation',
      sorter: (a: any, b: any) => {
        const n = a.description.toLocaleLowerCase().localeCompare(b.description.toLocaleLowerCase());
        return n === 0 && a !== b ? b.description.localeCompare(a.description) : n;
      }
    },
    {
      title: 'Number requests',
      dataIndex: 'numberRequests',
      key: 'numberRequests',
      sorter: (a: any, b: any) => {
        const n = a.idCountry.toLocaleLowerCase().localeCompare(b.idCountry.toLocaleLowerCase());
        return n === 0 && a !== b ? b.idCountry.localeCompare(a.idCountry) : n;
      },
    },
    {
      title: 'Timestamp',
      key: 'timestamp',
      dataIndex: 'timestamp',
      sorter: (a: any, b: any) => {
        const n = a.param.toLocaleLowerCase().localeCompare(b.param.toLocaleLowerCase());
        return n === 0 && a !== b ? b.param.localeCompare(a.param) : n;
      },
    }
  ];

  const onDelete = (id: string) => {
    console.log('id == ', id)
    handleDelete(id);
  };

  return (
    <Table
      title="Alertas"
      columns={columns}
      dataSource={dataSource}
      addButtons={[
        {
          text: 'Crear Alerta',
          icon: <UsergroupDeleteOutlined />,
          onClick: () => handleVisibleForm(),
        },
      ]}
      addActions={[
        {
          text: 'Edit',
          icon: <EditOutlined />,
          type: 'primary',
          onClick: (record: any) => {
            handleVisibleForm(record);
          }
        },
        {
          text: 'Delete',
          icon: <DeleteOutlined />,
          type: 'danger',
          okText: "Ok",
          confirm: 'Are you sure you want to delete this QPR?',
          onClick: (record: any) => onDelete(record._id),
        },
      ]}
      loading={loading}
    />
  );
};

export default AlertsList;
