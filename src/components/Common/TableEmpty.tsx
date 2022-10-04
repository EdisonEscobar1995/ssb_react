import { Fragment } from 'react';
import { Table as TableAnt, Button, Row, Col, Tooltip, Popconfirm } from 'antd';
import "../../sass/table.scss";

interface ITableEmpty {
  title?: string;
  columns: any[];
  addButtons: any[] | [];
  addActions: any[] | [];
}

export const TableEmpty = ({
  title,
  columns,
  addButtons,
  addActions,
}: ITableEmpty) => {
  const columnsWithMore = [...columns];
  if (addActions && addActions.length > 0) {
    columnsWithMore.push({
      title: 'Acciones',
      key: '',
      align: 'right',
      width: 50 * ((addActions && addActions.length) || 0),
      render: (value: any, record: any) =>
        addActions &&
        addActions.map((action, index) => (
          <Tooltip key={`action-button-${index}-${record?.id || index}`} title={action.text}>
            {' '}
            {action.confirm ? (
              <Popconfirm
                title={action.confirm}
                okText={action.okText || 'Ok'}
                cancelText={action.cancelText || 'Cancel'}
                placement="bottomRight"
                onConfirm={() => action.onClick(record)}
              >
                <Button
                  type={action.type || 'ghost'}
                  shape="circle"
                  icon={action.icon}
                />
              </Popconfirm>
            ) : (
              <Button
                type={action.type || 'ghost'}
                shape="circle"
                icon={action.icon}
                onClick={() => action.onClick(record)}
              />
            )}
          </Tooltip>
        )),
    });
  }

  return (
    <>
      <Row className="row-title">
        <Col>{title || ''}</Col>
        <Col>
          {addButtons &&
            addButtons.map((buttonProps, index) => (
              <Fragment key={`button-section-${index}`}>
                <Button size="large" type="primary" {...buttonProps}>
                  {buttonProps.text}
                </Button>{' '}
              </Fragment>
            ))}
        </Col>
      </Row>
      <div className="ant-table ant-table-empty">
        <div className="ant-table-container">
          <div className="ant-table-content" style={{ overflow: 'auto hidden' }}>
            <table style={{
              width: 'auto',
              minWidth: '100%',
              tableLayout: 'auto'
            }}>
              <thead className="ant-table-thead">
                <tr>
                  {columnsWithMore.map((column, index) =>
                    <th key={`empty-th-${column.key}-${index}`} className="ant-table-cell">
                      {column.title}
                    </th>
                  )}
                  <th className="ant-table-cell" style={{ textAlign: 'center' }}>Acciones</th>
                </tr>
              </thead>
              <tbody className="ant-table-tbody">
                <tr className="ant-table-placeholder" style={{ background: '#fff' }}>
                  <td colSpan={5} className="ant-table-cell">
                    <div className="ant-table-expanded-row-fixed"
                      style={{ width: '1070px', position: 'sticky', 'left': '0px', overflow: 'hidden' }}>
                      <div className="ant-empty ant-empty-normal">
                        <div className="ant-empty-image">
                          <svg className="ant-empty-img-simple" width="64" height="41"
                            viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(0 1)" fill="none" fillRule="evenodd">
                              <ellipse className="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7"></ellipse>
                              <g className="ant-empty-img-simple-g" fillRule="nonzero">
                                <path
                                  d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z">
                                </path>
                                <path
                                  d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                                  className="ant-empty-img-simple-path"></path>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="ant-empty-description">No hay datos</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
