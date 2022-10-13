import { useState, useEffect, Fragment } from "react";
import { Table } from "../Common/Table";
import { Row, Col, Select, Button, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { Company } from "../../interfaces/Company";
import '../../sass/company.scss';
import { TableEmpty } from "../Common/TableEmpty";

const { Option } = Select;

interface ICompaniesProps {
  dataSource: Company[] | [];
  loading: boolean;
  handleDelete: Function;
  dataCountries: string[] | [];
  handleChangeFilter: Function;
  filterValue: string;
  handleVisibleForm?: Function;
}

const Companies = ({
  dataSource,
  loading,
  handleDelete,
  dataCountries,
  handleChangeFilter,
  filterValue,
  handleVisibleForm
}: ICompaniesProps) => {
  const navigate = useNavigate();

  const columns = [
    {
      title: 'Id empresa',
      dataIndex: 'id',
      key: 'id',
      filters: [{}],
      render: (text: any, record: any) =>
      <a data-testid='span-backend' onClick={() => handleVisibleForm(record)}>
        {text}
      </a>,
      sorter: (a: any, b: any) => {
        const n = a.id.toLocaleLowerCase().localeCompare(b.id.toLocaleLowerCase());
        return n === 0 && a !== b ? b.id.localeCompare(a.id) : n;
      },
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: 'description',
      sorter: (a: any, b: any) => {
        const n = a.description.toLocaleLowerCase().localeCompare(b.description.toLocaleLowerCase());
        return n === 0 && a !== b ? b.description.localeCompare(a.description) : n;
      }
    },
    {
      title: 'Id País',
      dataIndex: 'idCountry',
      key: 'idCountry',
      sorter: (a: any, b: any) => {
        const n = a.idCountry.toLocaleLowerCase().localeCompare(b.idCountry.toLocaleLowerCase());
        return n === 0 && a !== b ? b.idCountry.localeCompare(a.idCountry) : n;
      },
    },
    {
      title: 'Parámetro Empresa',
      key: 'param',
      dataIndex: 'param',
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

  const FilterComponent = () => (
    <Row className="filter-companies">
      <Col span={2}>
        <b>Id País: </b>
      </Col>
      <Col span={10}>
        <Select
          allowClear
          showSearch
          defaultValue={filterValue}
          onChange={(value) => handleChangeFilter(value)}
          style={{ width: '100%' }}
        >
          {dataCountries.map((item, index) =>
            <Option key={`opt-${index}-${item}`} value={item}>{item}</Option>
          )}
        </Select>
      </Col>
    </Row >
  );

  const getAddButtons = () => {
    return [
      {
        // text: 'Create',
        // icon: <UsergroupDeleteOutlined />,
        // onClick: () => navigate("form"),
      },
    ]
  };

  return (
    <Spin tip="Loading..." spinning={loading}>
      {(dataSource.length <= 0) ? (
        <TableEmpty
          title="Compañias"
          columns={columns}
          addButtons={getAddButtons()}
          addActions={[]}
        />
      ) : (
        <Table
          title="Compañias"
          columns={columns}
          dataSource={dataSource}
          filterComponent={<FilterComponent />}
          addButtons={getAddButtons()}
          addActions={[
            // {
            //   text: 'Edit',
            //   icon: <EditOutlined />,
            //   type: 'primary',
            //   onClick: (record: any) => {
            //     navigate(`form/${record._id}`);
            //   }
            // },
            // {
            //   text: 'Delete',
            //   icon: <DeleteOutlined />,
            //   type: 'danger',
            //   okText: "Ok",
            //   confirm: 'Are you sure you want to delete?',
            //   onClick: (record: any) => onDelete(record._id),
            // },
          ]}
          loading={loading}
        />
      )}
    </Spin>
  );
};

export default Companies;
