import axios from "axios"
import { Company } from "../interfaces/Company";
import { CompanyMapper } from "../mappers/CompanyMapper";

const { REACT_APP_URL_BASE } = process.env;

export class CompanyService {

  public static getCompanies = async (token: string) => {
    const url = `${REACT_APP_URL_BASE}/sif/v3/empresas`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json;odata=verbose",
      },
    });
    console.log('data == ', data);
    const companies: Company[] = CompanyMapper.mapperCompanies(data.empresaList);
    return companies;
  }
}