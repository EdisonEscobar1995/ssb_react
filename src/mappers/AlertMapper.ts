import { Alert } from "../interfaces/Alert";

export class AlertMapper {
  public static mapperAlert(data: any): Alert {
    let option: Alert = null;
    if (data) {
      option = {
        backend: data.backend || '',
        numRequests: data.numRequests || '',
        operation: data.operation || '',
        timestamp: data.timestamp || '',
      };
    }
    return option;
  }

  public static mapperCompanies(data: any): Alert[] {
    return data.map((item: any) => {
      return this.mapperAlert(item?.empresa);
    });
  }

}
