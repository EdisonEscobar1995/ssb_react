import axios from "axios"
import { Alert } from "../interfaces/Alert";
import { AlertMapper } from "../mappers/AlertMapper";

const { REACT_APP_URL_BASE } = process.env;

export class AlertService {

  public static getAlerts = async (token: string) => {
    const url = `${REACT_APP_URL_BASE}/v0.1/agent/alerts`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json;odata=verbose",
      },
    });
    console.log(data);
    debugger;
    const companies: Alert[] = AlertMapper.mapperAlerts(data);
    return companies;
  }

  public static saveAlert = async (token: string, data: Alert, operationAlert: string) => {
    const url = `${REACT_APP_URL_BASE}/v0.1/agent/${operationAlert}`;
    const { data: dataResponse } = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json;odata=verbose",
      },
    });
    return dataResponse;
  }
}
