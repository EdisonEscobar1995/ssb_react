import { useContext, useEffect, useState } from "react";
import { Alert } from "../../interfaces/Alert";
import { AlertForm, AlertsList } from "../../components";
import AppContext from "../../context/AppContext";
import { AlertService } from "../../services/alert";
import { useAuth } from "react-oauth2-pkce";
import notify from "../../utils/notify";


const AlertsContainer = () => {
  const { setDefaultMenu } = useContext(AppContext);
  const { authService } = useAuth();
  const token = authService.getAuthTokens();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dataSource, setDataSource] = useState<Alert[] | []>([]);
  const [titleFormAlert, setTitleFormAlert] = useState("");
  const emptyAlert = {
    backend: "",
    numberRequests: "",
    operation: "",
    timestamp: ""
  };
  const [alertSelect, setAlertSelect] = useState<Alert>(emptyAlert);

  const getAlerts = async () => {
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
  };

  useEffect(() => {
    if (setDefaultMenu) {
      setDefaultMenu('alerts');
    };
    setLoading(true);
    getAlerts();
    /* setDataSource([{
      backend: 'sf1/1',
      numberRequests: '2',
      operation: 'edit',
      timestamp: '2021-01-01'
    }, {
      backend: 'sf1/2',
      numberRequests: '3',
      operation: 'delete',
      timestamp: '2021-01-01'
    }, {
      backend: 'sf1/3',
      numberRequests: '4',
      operation: 'edit',
      timestamp: '2021-01-01'
    }, {
      backend: 'sf1/4',
      numberRequests: '5',
      operation: 'read',
      timestamp: '2021-01-01'
    }]);
    setTimeout(() => {
      setLoading(false);
    }, 5000); */
  }, []);

  const handleVisibleForm = (selectAlert?: Alert) => {
    setTitleFormAlert("Crear alarma");
    setAlertSelect(emptyAlert);
    if (selectAlert) {
      setAlertSelect(selectAlert);
      setTitleFormAlert("Editar alarma");
    }
    setVisible(true);
  };

  const handleSubmit = async (values: Alert, operationAlert: string) => {
    debugger;
    try {
      const response = await AlertService.saveAlert(token?.access_token, values, operationAlert);
      console.log(response);
      if (response && response.code === "200") {
        notify({ type: 'success', message: response.message });
        setVisible(false);
        getAlerts();
      }
    } catch (error) {
      setLoading(false);
      console.error('Error en saveAlert = ', error);
    }
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
      title={titleFormAlert}
      visible={visible}
      handleCancel={() => setVisible(false)}
      handleSubmit={handleSubmit}
      readonly={false}
      alertSelect={alertSelect}
    />
    </>
  )
};

export default AlertsContainer;
