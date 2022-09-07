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
    const companies: Alert[] = AlertMapper.mapperCompanies(data.empresaList);
    return companies;
  }
}
