import { Table } from "../Common/Table";
import { useNavigate } from "react-router-dom";
import {
  UsergroupDeleteOutlined,
  EditOutlined,
  DeleteOutlined,
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
      render: (text: any, record: any) =>
        <a data-testid='span-backend' onClick={() => handleVisibleForm(record)}>
          {text}
        </a>,
      sorter: (a: any, b: any) => {
        const n = a.backend.toLocaleLowerCase().localeCompare(b.backend.toLocaleLowerCase());
        return n === 0 && a !== b ? b.backend.localeCompare(a.backend) : n;
      },
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      key: 'operation',
      sorter: (a: any, b: any) => {
        const n = a.operation.toLocaleLowerCase().localeCompare(b.operation.toLocaleLowerCase());
        return n === 0 && a !== b ? b.operation.localeCompare(a.operation) : n;
      }
    },
    {
      title: 'Number requests',
      dataIndex: 'numberRequests',
      key: 'numberRequests',
      sorter: (a: any, b: any) => parseFloat(a.numberRequests) - parseFloat(b.numberRequests),
    },
    {
      title: 'Timestamp',
      key: 'timestamp',
      dataIndex: 'timestamp',
      sorter: (a: any, b: any) => {
        const n = a.timestamp.toLocaleLowerCase().localeCompare(b.timestamp.toLocaleLowerCase());
        return n === 0 && a !== b ? b.timestamp.localeCompare(a.timestamp) : n;
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
        // {
        //   text: 'Editar',
        //   icon: <EditOutlined />,
        //   type: 'primary',
        //   onClick: (record: any) => {
        //     handleVisibleForm(record);
        //   }
        // },
        // {
        //   text: 'Eliminar',
        //   icon: <DeleteOutlined />,
        //   type: 'danger',
        //   okText: "Ok",
        //   confirm: '¿Está seguro que desea eliminar esta alarma?',
        //   onClick: (record: any) => onDelete(record._id),
        // },
      ]}
      loading={loading}
    />
  );
};

export default AlertsList;
