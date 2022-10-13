import { useContext, useEffect, useState } from "react";
import { Company } from "../../interfaces/Company";
import { Companies } from "../../components";
import AppContext from "../../context/AppContext";
import { CompanyService } from "../../services/company";
import { useAuth } from "react-oauth2-pkce";
import CompanyForm from "../../components/Company/CompanyForm";


const CompaniesContainer = () => {
  const { setDefaultMenu } = useContext(AppContext);
  const { authService } = useAuth();
  const token = authService.getAuthTokens();
  const [loading, setLoading] = useState(false);
  const [dataSourceGlobal, setDataSourceGlobal] = useState<Company[] | []>([]);
  const [dataSource, setDataSource] = useState<Company[] | []>([]);
  const [countriesData, setCountriesData] = useState<string[] | []>([]);
  const [visible, setVisible] = useState(false);
  const [titleFormCompany, setTitleFormCompany] = useState("");
  const [filterValue, setFilterValue] = useState<string>("");
  const emptyCompany: Company = {
    id: "",
    param: "",
    idCountry: "",
    description: "",
    order: 0,
    empresaCode: ""
  };
  const [companySelect, setCompanySelect] = useState<Company>(emptyCompany);

  const handleUniqueCountries = (dataCompanies: Company[]) => {
    const countries: string[] = [];
    dataCompanies.forEach((item) => {
      if (countries.findIndex(element => element === item.idCountry) < 0) {
        countries.push(item.idCountry);
      }
    });
    console.log('countries == ', countries);
    setCountriesData(countries);
  };

  const getCompanies = async () => {
    try {
      setLoading(true);
      const companies: Company[] =
        await CompanyService.getCompanies(token?.access_token);
      setDataSource(companies);
      setDataSourceGlobal(companies);
      handleUniqueCountries(companies);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error en getCompanies = ', error);
    }
  };

  const handleChangeFilter = (value: string) => {
    console.log(value);
    setFilterValue(value);
    let dataFilter = [...dataSourceGlobal];
    if (value) {
      dataFilter = dataSourceGlobal.filter(element => element.idCountry === value);
    }
    setDataSource(dataFilter);
  };

  useEffect(() => {
    if (setDefaultMenu) {
      setDefaultMenu('companies');
    };
    getCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVisibleForm = (selectAlert?: Company) => {
    setTitleFormCompany("Crear compañia");
    setCompanySelect(emptyCompany);
    if (selectAlert) {
      setCompanySelect(selectAlert);
      setTitleFormCompany("Editar compañia");
    }
    setVisible(true);
  };

  return (
    <>
      <Companies
        dataSource={dataSource}
        loading={loading}
        handleDelete={() => { }}
        dataCountries={countriesData}
        handleChangeFilter={handleChangeFilter}
        filterValue={filterValue}
        handleVisibleForm={handleVisibleForm}
      />
      <CompanyForm
        title={titleFormCompany}
        visible={visible}
        handleCancel={() => setVisible(false)}
        handleSubmit={() => {}}
        readonly={false}
        companySelect={companySelect}
      />
    </>
  )
};

export default CompaniesContainer;
