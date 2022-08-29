import { Table } from "../Common/Table";
import { useNavigate } from "react-router-dom";
import {
  UsergroupDeleteOutlined,
  EditOutlined,
  DeleteOutlined,
  DoubleRightOutlined
} from '@ant-design/icons';

const Companies = ({
  dataSource,
  loading,
  handleDelete
}: any) => {
  const navigate = useNavigate();
  
  const columns = [
    {
      title: 'Id empresa',
      dataIndex: 'empresaCode',
      key: 'empresaCode',
      render: (text: any) => <a>{text}</a>,
      sorter: (a: any, b: any) => {
        const n = a.empresaCode.toLocaleLowerCase().localeCompare(b.empresaCode.toLocaleLowerCase());
        return n === 0 && a !== b ? b.localeCompare(a) : n;
      },
    },
    {
      title: 'Descripción',
      dataIndex: 'empresaDescription',
      key: 'empresaDescription',
      sorter: (a: any, b: any) => {
        const n = a.empresaDescription.toLocaleLowerCase().localeCompare(b.empresaDescription.toLocaleLowerCase());
        return n === 0 && a !== b ? b.localeCompare(a) : n;
      }
    },
    {
      title: 'Id País',
      dataIndex: 'order',
      key: 'order',
      sorter: (a: any, b: any) => a.order - b.order,
    },
    {
      title: 'Parámetro Empresa',
      key: 'param',
      dataIndex: 'param',
      sorter: (a: any, b: any) => a.param.length - b.param.length
    }
  ];

  const onDelete = (id: string) => {
    console.log('id == ', id)
    handleDelete(id);
  };

  return (
    <Table
      title="Compañias"
      columns={columns}
      dataSource={dataSource}
      addButtons={[
        {
          text: 'Create QPR',
          icon: <UsergroupDeleteOutlined />,
          onClick: () => navigate("form"),
        },
      ]}
      addActions={[
        {
          text: 'Edit',
          icon: <EditOutlined />,
          type: 'primary',
          onClick: (record: any) => {
            debugger;
            navigate(`form/${record._id}`);
          }
        },
        {
          text: 'Supplier Investigation',
          icon: <DoubleRightOutlined />,
          type: 'primary',
          onClick: (record: any) => {
            debugger;
            navigate(`/ticketresponse`);
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

export default Companies;
