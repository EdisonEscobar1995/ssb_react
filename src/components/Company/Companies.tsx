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
}

const Companies = ({
  dataSource,
  loading,
  handleDelete,
  dataCountries,
  handleChangeFilter,
  filterValue
}: ICompaniesProps) => {
  const navigate = useNavigate();

  const columns = [
    {
      title: 'Id empresa',
      dataIndex: 'id',
      key: 'id',
      filters: [{}],
      render: (text: any) => <a>{text}</a>,
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
        // <>
        //   <Row className="row-title">
        //     <Col>Compañias</Col>
        //     <Col>
        //       {getAddButtons() &&
        //         getAddButtons().map((buttonProps: any, index) => (
        //           <Fragment key={`button-section-${index}`}>
        //             <Button size="large" type="primary" {...buttonProps}>
        //               {buttonProps.text}
        //             </Button>{' '}
        //           </Fragment>
        //         ))}
        //     </Col>
        //   </Row>
        //   <div className="ant-table ant-table-empty">
        //     <div className="ant-table-container">
        //       <div className="ant-table-content" style={{ overflow: 'auto hidden' }}>
        //         <table style={{
        //           width: 'auto',
        //           minWidth: '100%',
        //           tableLayout: 'auto'
        //         }}>
        //           <thead className="ant-table-thead">
        //             <tr>
        //               <th className="ant-table-cell">Id empresa</th>
        //               <th className="ant-table-cell">Descripción</th>
        //               <th className="ant-table-cell">Id País</th>
        //               <th className="ant-table-cell">Parámetro Empresa</th>
        //               <th className="ant-table-cell" style={{ textAlign: 'right' }}>Acciones</th>
        //             </tr>
        //           </thead>
        //           <tbody className="ant-table-tbody">
        //             <tr className="ant-table-placeholder" style={{ background: '#fff' }}>
        //               <td colSpan={5} className="ant-table-cell">
        //                 <div className="ant-table-expanded-row-fixed"
        //                   style={{ width: '1070px', position: 'sticky', 'left': '0px', overflow: 'hidden' }}>
        //                   <div className="ant-empty ant-empty-normal">
        //                     <div className="ant-empty-image">
        //                       <svg className="ant-empty-img-simple" width="64" height="41"
        //                         viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
        //                         <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
        //                           <ellipse className="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7"></ellipse>
        //                           <g className="ant-empty-img-simple-g" fill-rule="nonzero">
        //                             <path
        //                               d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z">
        //                             </path>
        //                             <path
        //                               d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
        //                               className="ant-empty-img-simple-path"></path>
        //                           </g>
        //                         </g>
        //                       </svg>
        //                     </div>
        //                     <div className="ant-empty-description">No hay datos</div>
        //                   </div>
        //                 </div>
        //               </td>
        //             </tr>
        //           </tbody>
        //         </table>
        //       </div>
        //     </div>
        //   </div>
        // </>
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
            {
              text: 'Edit',
              icon: <EditOutlined />,
              type: 'primary',
              onClick: (record: any) => {
                navigate(`form/${record._id}`);
              }
            },
            {
              text: 'Delete',
              icon: <DeleteOutlined />,
              type: 'danger',
              okText: "Ok",
              confirm: 'Are you sure you want to delete?',
              onClick: (record: any) => onDelete(record._id),
            },
          ]}
          loading={loading}
        />
      )}
      {/* <Table
        title="Compañias"
        columns={columns}
        dataSource={dataSource}
        filterComponent={<FilterComponent />}
        addButtons={[
          {
            // text: 'Create',
            // icon: <UsergroupDeleteOutlined />,
            // onClick: () => navigate("form"),
          },
        ]}
        addActions={[
          {
            text: 'Edit',
            icon: <EditOutlined />,
            type: 'primary',
            onClick: (record: any) => {
              navigate(`form/${record._id}`);
            }
          },
          {
            text: 'Delete',
            icon: <DeleteOutlined />,
            type: 'danger',
            okText: "Ok",
            confirm: 'Are you sure you want to delete?',
            onClick: (record: any) => onDelete(record._id),
          },
        ]}
        loading={loading}
      /> */}
    </Spin>
  );
};

export default Companies;
