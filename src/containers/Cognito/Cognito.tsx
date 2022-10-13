import { useContext, useEffect, useState } from "react";
import { CognitoComponent } from "../../components";
import AppContext from "../../context/AppContext";
import { Cognito } from "../../interfaces/Cognito";
import { CognitoService } from "../../services/cognito";


const CognitoContainer = () => {
  const { tokenCognito, setDefaultMenu } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
    
  const getTestCognito = async (scope: string) => {
    setLoading(true);
    const cognitoData: Cognito =
      await CognitoService.getTestCognito(scope, tokenCognito);
    setDataSource([{
      ...cognitoData,
      responseComplete: JSON.stringify(cognitoData)
    }]);
    setLoading(false);
  };

  const handleChangeFilter = (value: string) => {
    getTestCognito(value);
  };

  useEffect(() => {
    if (setDefaultMenu) {
      setDefaultMenu('cognito');
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (    
    <CognitoComponent
      title="Cognito"
      loading={loading}
      handleSubmit={handleChangeFilter}
      dataSource={dataSource}
    />
  )
};

export default CognitoContainer;
