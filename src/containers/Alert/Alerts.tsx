import { useContext, useEffect, useState } from "react";
import { Alert } from "../../interfaces/Alert";
import { AlertForm, AlertsList } from "../../components";
import AppContext from "../../context/AppContext";
import { AlertService } from "../../services/alert";
import { useAuth } from "react-oauth2-pkce";


const AlertsContainer = () => {
  const { setDefaultMenu } = useContext(AppContext);
  const { authService } = useAuth();
  const token = authService.getAuthTokens();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dataSource, setDataSource] = useState<Alert[] | []>([]);
  const [alertSelect, setAlertSelect] = useState<Alert>({
    backend: "",
    numRequests: "",
    operation: "",
    timestamp: ""
  });

  /* const getAlerts = async () => {
    try {
      setLoading(true);
      const companies: Alert[] =
        await AlertService.getAlerts(token?.access_token);
      setDataSource(companies);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error en getAlerts = ', error);
    }
  }; */

  useEffect(() => {
    if (setDefaultMenu) {
      setDefaultMenu('alerts');
    };
    // getAlerts();
    setLoading(true);
    setDataSource([{
      backend: 'sf1/1',
      numRequests: '2',
      operation: 'edit',
      timestamp: '2021-01-01'
    }, {
      backend: 'sf1/2',
      numRequests: '3',
      operation: 'delete',
      timestamp: '2021-01-01'
    }, {
      backend: 'sf1/3',
      numRequests: '4',
      operation: 'edit',
      timestamp: '2021-01-01'
    }, {
      backend: 'sf1/4',
      numRequests: '5',
      operation: 'read',
      timestamp: '2021-01-01'
    }]);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleVisibleForm = (selectAlert?: Alert) => {
    if (selectAlert) {
      setAlertSelect(selectAlert);
    }
    setVisible(true);
  };

  return (
    <>
    <AlertsList
      dataSource={dataSource}
      loading={loading}
      handleDelete={() => { }}
      handleVisibleForm={handleVisibleForm}
    />
    <AlertForm
      title="Crear alarma"
      visible={visible}
      handleCancel={() => setVisible(false)}
      handleSubmit={(values: Alert) => {
        console.log(values);
      }}
      readonly={false}
      alertSelect={alertSelect}
    />
    </>
  )
};

export default AlertsContainer;
