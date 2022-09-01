import { useContext, useEffect, useState } from "react";
import { Company } from "../../interfaces/Company";
import { Companies } from "../../components";
import AppContext from "../../context/AppContext";
import { CompanyService } from "../../services/company";
import { useAuth } from "react-oauth2-pkce";


const CompaniesContainer = () => {
  const { setDefaultMenu } = useContext(AppContext);
  const { authService } = useAuth();
  const token = authService.getAuthTokens();
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<Company[] | []>([]);

  const getCompanies = async () => {
    try {
      setLoading(true);
      const companies: Company[] =
        await CompanyService.getCompanies(token?.access_token);
      setDataSource(companies);      
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error en getCompanies = ', error);
    }
  };

  useEffect(() => {
    if (setDefaultMenu) {
      setDefaultMenu('companies');
    };
    getCompanies();
  }, []);
  
  const dataCompanies = [
    {
        
      "param": "MX/UNOI", //paramEmpresa
      "country": {
        "refId": "00000000-0000-1000-0000-000000000165" //idCountry
      },
      "empresaDescription": "Sistemas Educativos de Enseñanza S.A. de C.V.", //description
      "order": 1000,
      "refId": "00000000-0000-1000-0000-000000000001", //idEmpresa
      "empresaCode": "MX.UNO"
    },
    {
        
      "param": "CO/UNOI",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000062"
      },
      "empresaDescription": "UNO Colombia",
      "order": 2000,
      "refId": "00000000-0000-1000-0000-000000000002",
      "empresaCode": "CO.UNO"
    },
    {
        
      "param": "GT/UNOI",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000103"
      },
      "empresaDescription": "UNO Guatemala",
      "order": 3000,
      "refId": "00000000-0000-1000-0000-000000000003",
      "empresaCode": "GT.UNO"
    },
    {
        
      "param": "EC/UNOI",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000076"
      },
      "empresaDescription": "UNO Ecuador",
      "order": 4000,
      "refId": "00000000-0000-1000-0000-000000000004",
      "empresaCode": "EC.UNO"
    },
    {
        
      "param": "AR/UNOI",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000026"
      },
      "empresaDescription": "UNO Argentina",
      "order": 5001,
      "refId": "00000000-0000-1000-0000-000000000005",
      "empresaCode": "AR.UNO"
    },
    {
        
      "param": "MX/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000165"
      },
      "empresaDescription": "VANGUARDIA EDUCATIVA SANTILLANA COMPARTIR",
      "order": 10001000,
      "refId": "00000000-0000-1000-0000-000000000006",
      "empresaCode": "MX.SAN"
    },
    {
        
      "param": "BR/UNOI",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Sistemas de Ensino UNO Ltda",
      "order": 6000,
      "refId": "00000000-0000-1000-0000-000000000007",
      "empresaCode": "BR.UNO"
    },
    {
        
      "param": "BR/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Editora Moderna Ltda",
      "order": 10002000,
      "refId": "00000000-0000-1000-0000-000000000008",
      "empresaCode": "BR.SAN"
    },
    {
        
      "param": "AR/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000026"
      },
      "empresaDescription": "Santillana Compartir Argentina",
      "order": 10003000,
      "refId": "00000000-0000-1000-0000-000000000009",
      "empresaCode": "AR.SAN"
    },
    {
        
      "param": "CO/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000062"
      },
      "empresaDescription": "Santillana Compartir Colombia",
      "order": 10004000,
      "refId": "00000000-0000-1000-0000-000000000010",
      "empresaCode": "CO.SAN"
    },
    {
        
      "param": "PE/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000182"
      },
      "empresaDescription": "Santillana.Compartir Perú",
      "order": 10005000,
      "refId": "00000000-0000-1000-0000-000000000011",
      "empresaCode": "PE.SAN"
    },
    {
        
      "param": "SV/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000216"
      },
      "empresaDescription": "Santillana Compartir El Salvador",
      "order": 10006000,
      "refId": "00000000-0000-1000-0000-000000000012",
      "empresaCode": "SV.SAN"
    },
    {
        
      "param": "CR/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000063"
      },
      "empresaDescription": "CR-SANTILLANA, S.A.",
      "order": 10007000,
      "refId": "00000000-0000-1000-0000-000000000013",
      "empresaCode": "CR.SAN"
    },
    {
        
      "param": "PA/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000181"
      },
      "empresaDescription": "PA-SANTILLANA, S.A.",
      "order": 10008000,
      "refId": "00000000-0000-1000-0000-000000000014",
      "empresaCode": "PA.SAN"
    },
    {
        
      "param": "CL/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000059"
      },
      "empresaDescription": "CL-Sist. Educativo de Enseñanza SA de CV",
      "order": 10009000,
      "refId": "00000000-0000-1000-0000-000000000015",
      "empresaCode": "CL.SAN"
    },
    {
        
      "param": "EC/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000076"
      },
      "empresaDescription": "EC-SANTILLANA S.A.",
      "order": 10010000,
      "refId": "00000000-0000-1000-0000-000000000016",
      "empresaCode": "EC.SAN"
    },
    {
        
      "param": "GT/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000103"
      },
      "empresaDescription": "GT-EDITORIAL SANTILLANA SA de CV",
      "order": 10007000,
      "refId": "00000000-0000-1000-0000-000000000017",
      "empresaCode": "GT.SAN"
    },
    {
        
      "param": "HN/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000109"
      },
      "empresaDescription": "Editorial Santillana Honduras",
      "order": 10008000,
      "refId": "00000000-0000-1000-0000-000000000018",
      "empresaCode": "HN.SAN"
    },
    {
        
      "param": "BR/UNOS",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "UNO Sistema",
      "order": 1000010,
      "refId": "00000000-0000-1000-0000-000000000019",
      "empresaCode": "BR.UNOS"
    },
    {
        
      "param": "CL/CPUB",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000059"
      },
      "empresaDescription": "CL-Sist. Educativo de Enseñanza SA de CV (Público)",
      "order": 10009500,
      "refId": "00000000-0000-1000-0000-000000000020",
      "empresaCode": "CL.SANP"
    },
    {
        
      "param": "DO/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000074"
      },
      "empresaDescription": "DO-EDITORA SANTILLANA",
      "order": 10011000,
      "refId": "00000000-0000-1000-0000-000000000021",
      "empresaCode": "DO.SAN"
    },
    {
        
      "param": "VE/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000244"
      },
      "empresaDescription": "VE-Editorial Santillana, S.A.",
      "order": 10012000,
      "refId": "00000000-0000-1000-0000-000000000022",
      "empresaCode": "VE.SAN"
    },
    {
        
      "param": "BO/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000043"
      },
      "empresaDescription": "BO-SANTILLANA DE EDICIONES S.A.",
      "order": 10013000,
      "refId": "00000000-0000-1000-0000-000000000023",
      "empresaCode": "BO.SAN"
    },
    {
        
      "param": "UY/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000240"
      },
      "empresaDescription": "UY-EDICIONES SANTILLANA S.A.",
      "order": 10014000,
      "refId": "00000000-0000-1000-0000-000000000024",
      "empresaCode": "UY.SAN"
    },
    {
        
      "param": "PE/PPUB",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000182"
      },
      "empresaDescription": "Santillana Compartir Perú (Público)",
      "order": 10005100,
      "refId": "00000000-0000-1000-0000-000000000025",
      "empresaCode": "PE.SANP"
    },
    {
        
      "param": "PR/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000190"
      },
      "empresaDescription": "Ediciones Santillana, Inc.",
      "order": 10015000,
      "refId": "00000000-0000-1000-0000-000000000026",
      "empresaCode": "PR.SAN"
    },
    {
        
      "param": "CL/CLIC",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000059"
      },
      "empresaDescription": "CL-Sist. Educativo de Enseñanza SA de CV (Licitación)",
      "order": 10009600,
      "refId": "00000000-0000-1000-0000-000000000027",
      "empresaCode": "CL.SANL"
    },
    {
        
      "param": "NI/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000173"
      },
      "empresaDescription": "NI-SANTILLANA, S.A.",
      "order": 10016000,
      "refId": "00000000-0000-1000-0000-000000000028",
      "empresaCode": "NI.SAN"
    },
    {
        
      "param": "HN/UNOI",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000109"
      },
      "empresaDescription": "UNO Honduras",
      "order": 10008100,
      "refId": "00000000-0000-1000-0000-000000000029",
      "empresaCode": "HN.UNO"
    },
    {
        
      "param": "GT/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000103"
      },
      "empresaDescription": "GT-EDITORIAL SANTILLANA LOGROS SA de CV",
      "order": 10007100,
      "refId": "00000000-0000-1000-0000-000000000030",
      "empresaCode": "GT.LOG"
    },
    {
        
      "param": "SV/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000216"
      },
      "empresaDescription": "Santillana Compartir El Salvador - Logros",
      "order": 10006100,
      "refId": "00000000-0000-1000-0000-000000000031",
      "empresaCode": "SV.LOG"
    },
    {
        
      "param": "CO/SINN",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000062"
      },
      "empresaDescription": "Santillana Innovación",
      "order": 10004500,
      "refId": "00000000-0000-1000-0000-000000000032",
      "empresaCode": "CO.INN"
    },
    {
        
      "param": "CL/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000059"
      },
      "empresaDescription": "CL-Sist. Educativo de Enseñanza SA de CV (Logros)",
      "order": 10009700,
      "refId": "00000000-0000-1000-0000-000000000033",
      "empresaCode": "CL.LOG"
    },
    {
        
      "param": "BR/SFB",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Sistema Farias Brito",
      "order": 10017000,
      "refId": "00000000-0000-1000-0000-000000000034",
      "empresaCode": "BR.FB"
    },
    {
        
      "param": "MX/UNOP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000165"
      },
      "empresaDescription": "Pruebas UNOi",
      "order": 10018000,
      "refId": "00000000-0000-1000-0000-000000000035",
      "empresaCode": "MX.UNOP"
    },
    {
        
      "param": "HN/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000109"
      },
      "empresaDescription": "Santillana Logros Honduras",
      "order": 10019000,
      "refId": "00000000-0000-1000-0000-000000000036",
      "empresaCode": "HN.LOG"
    },
    {
        
      "param": "PR/CLIC",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000190"
      },
      "empresaDescription": "Ediciones Santillana, Inc. (Licitación)",
      "order": 10020000,
      "refId": "00000000-0000-1000-0000-000000000037",
      "empresaCode": "PR.SANL"
    },
    {
        
      "param": "BR/EDUC",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Educate",
      "order": 10021000,
      "refId": "00000000-0000-1000-0000-000000000038",
      "empresaCode": "BR.EDUC"
    },
    {
        
      "param": "AR/NORM",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000026"
      },
      "empresaDescription": "Kapelusz Norma Argentina",
      "order": 10022000,
      "refId": "00000000-0000-1000-0000-000000000039",
      "empresaCode": "AR.NRM"
    },
    {
        
      "param": "MX/SANP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000165"
      },
      "empresaDescription": "Monitorización plataforma SC",
      "order": 10023000,
      "refId": "00000000-0000-1000-0000-000000000040",
      "empresaCode": "MX.SANP"
    },
    {
        
      "param": "CO/NORM",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000062"
      },
      "empresaDescription": "Educactiva S.A.S",
      "order": 10024000,
      "refId": "00000000-0000-1000-0000-000000000041",
      "empresaCode": "CO.NRM"
    },
    {
        
      "param": "AR/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000026"
      },
      "empresaDescription": "Santillana Educación Regular Argentina",
      "order": 10025000,
      "refId": "00000000-0000-1000-0000-000000000042",
      "empresaCode": "AR.REG"
    },
    {
        
      "param": "UY/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000240"
      },
      "empresaDescription": "Santillana Educación Regular Uruguay",
      "order": 10026000,
      "refId": "00000000-0000-1000-0000-000000000043",
      "empresaCode": "UY.REG"
    },
    {
        
      "param": "PE/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000182"
      },
      "empresaDescription": "Santillana Educación Regular Perú",
      "order": 10027000,
      "refId": "00000000-0000-1000-0000-000000000044",
      "empresaCode": "PE.REG"
    },
    {
        
      "param": "PO/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000257"
      },
      "empresaDescription": "Licitación texto y digital",
      "order": 10028000,
      "refId": "00000000-0000-1000-0000-000000000045",
      "empresaCode": "PO.SAN"
    },
    {
        
      "param": "BR/EJAD",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "EJA Digital",
      "order": 10029000,
      "refId": "00000000-0000-1000-0000-000000000046",
      "empresaCode": "BR.EJA"
    },
    {
        
      "param": "MX/LIVE",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000165"
      },
      "empresaDescription": "BE&Live",
      "order": 10030000,
      "refId": "00000000-0000-1000-0000-000000000047",
      "empresaCode": "MX.LIVE"
    },
    {
        
      "param": "SV/SLID",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000216"
      },
      "empresaDescription": "Santillana Libro Digital",
      "order": 10031000,
      "refId": "00000000-0000-1000-0000-000000000048",
      "empresaCode": "SV.LID"
    },
    {
        
      "param": "GT/SLID",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000103"
      },
      "empresaDescription": "Santillana Libro Digital Guatemala",
      "order": 10032000,
      "refId": "00000000-0000-1000-0000-000000000049",
      "empresaCode": "GT.LID"
    },
    {
        
      "param": "HN/SLID",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000109"
      },
      "empresaDescription": "Santillana Libro Digital Honduras",
      "order": 10033000,
      "refId": "00000000-0000-1000-0000-000000000050",
      "empresaCode": "HN.LID"
    },
    {
        
      "param": "BO/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000043"
      },
      "empresaDescription": "Santillana Educación Regular Bolivia",
      "order": 10034000,
      "refId": "00000000-0000-1000-0000-000000000051",
      "empresaCode": "BO.REG"
    },
    {
        
      "param": "MX/RICH",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000165"
      },
      "empresaDescription": "Richmond",
      "order": 10035000,
      "refId": "00000000-0000-1000-0000-000000000052",
      "empresaCode": "MX.RICH"
    },
    {
        
      "param": "EC/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000076"
      },
      "empresaDescription": "Santillana Educación Regular Ecuador",
      "order": 10036000,
      "refId": "00000000-0000-1000-0000-000000000053",
      "empresaCode": "EC.REG"
    },
    {
        
      "param": "NI/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000173"
      },
      "empresaDescription": "Santillana Educación Regular Nicaragua",
      "order": 10037000,
      "refId": "00000000-0000-1000-0000-000000000054",
      "empresaCode": "NI.REG"
    },
    {
        
      "param": "MX/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000165"
      },
      "empresaDescription": "Santillana Educación Regular México",
      "order": 10038000,
      "refId": "00000000-0000-1000-0000-000000000055",
      "empresaCode": "MX.REG"
    },
    {
        
      "param": "BR/RICH",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Richmond Solutions",
      "order": 10039000,
      "refId": "00000000-0000-1000-0000-000000000056",
      "empresaCode": "BR.RICH"
    },
    {
        
      "param": "PY/COMP",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000194"
      },
      "empresaDescription": "Santillana Compartir Paraguay",
      "order": 10040000,
      "refId": "00000000-0000-1000-0000-000000000057",
      "empresaCode": "PY.SAN"
    },
    {
        
      "param": "BR/EDMO",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Editora Moderna para Pruebas",
      "order": 10050000,
      "refId": "00000000-0000-1000-0000-000000000058",
      "empresaCode": "BR.SANP"
    },
    {
        
      "param": "GT/LIVE",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000103"
      },
      "empresaDescription": "Be+Live Guatemala",
      "order": 10060000,
      "refId": "00000000-0000-1000-0000-000000000059",
      "empresaCode": "GT.LIVE"
    },
    {
        
      "param": "SV/LIVE",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000216"
      },
      "empresaDescription": "Be+Live El Salvador",
      "order": 10070000,
      "refId": "00000000-0000-1000-0000-000000000060",
      "empresaCode": "SV.LIVE"
    },
    {
        
      "param": "HN/LIVE",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000109"
      },
      "empresaDescription": "Be+Live Honduras",
      "order": 10080000,
      "refId": "00000000-0000-1000-0000-000000000061",
      "empresaCode": "HN.LIVE"
    },
    {
        
      "param": "MX/PSAN",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000165"
      },
      "empresaDescription": "Pruebas Compartir",
      "order": 10044000,
      "refId": "00000000-0000-1000-0000-000000000062",
      "empresaCode": "MX.PSAN"
    },
    {
        
      "param": "CR/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000063"
      },
      "empresaDescription": "Santillana Educación Regular Costa Rica",
      "order": 10090000,
      "refId": "00000000-0000-1000-0000-000000000063",
      "empresaCode": "CR.REG"
    },
    {
        
      "param": "PA/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000181"
      },
      "empresaDescription": "Santillana Educación Regular Panamá",
      "order": 20000000,
      "refId": "00000000-0000-1000-0000-000000000064",
      "empresaCode": "PA.REG"
    },
    {
        
      "param": "BR/SLMS",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Pruebas e-stela Compartilha",
      "order": 20010000,
      "refId": "00000000-0000-1000-0000-000000000065",
      "empresaCode": "BR.SLMS"
    },
    {
        
      "param": "MX/ULMS",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000165"
      },
      "empresaDescription": "Pruebas e-stela UNO",
      "order": 20020000,
      "refId": "00000000-0000-1000-0000-000000000066",
      "empresaCode": "MX.ULMS"
    },
    {
        
      "param": "BR/KEPL",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Kepler",
      "order": 20030000,
      "refId": "00000000-0000-1000-0000-000000000067",
      "empresaCode": "BR.KEPL"
    },
    {
        
      "param": "CL/CREO",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000059"
      },
      "empresaDescription": "CREO Chile",
      "order": 20040000,
      "refId": "00000000-0000-1000-0000-000000000068",
      "empresaCode": "CL.CREO"
    },
    {
        
      "param": "AR/CREO",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000026"
      },
      "empresaDescription": "CREO Argentina",
      "order": 20050000,
      "refId": "00000000-0000-1000-0000-000000000069",
      "empresaCode": "AR.CREO"
    },
    {
        
      "param": "DO/SREG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000074"
      },
      "empresaDescription": "Santillana Loqueleo Digital Regular Dominicana",
      "order": 20060000,
      "refId": "00000000-0000-1000-0000-000000000070",
      "empresaCode": "DO.REG"
    },
    {
        
      "param": "BR/SAES",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Proyección",
      "order": 20070000,
      "refId": "00000000-0000-1000-0000-000000000071",
      "empresaCode": "BR.SAES"
    },
    {
        
      "param": "BR/CRES",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Crescemos",
      "order": 20080000,
      "refId": "00000000-0000-1000-0000-000000000072",
      "empresaCode": "BR.CRES"
    },
    {
        
      "param": "MX/CREO",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000165"
      },
      "empresaDescription": "CREO México",
      "order": 20090000,
      "refId": "00000000-0000-1000-0000-000000000073",
      "empresaCode": "MX.CREO"
    },
    {
        
      "param": "PE/CREO",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000182"
      },
      "empresaDescription": "CREO Perú",
      "order": 10028000,
      "refId": "00000000-0000-1000-0000-000000000074",
      "empresaCode": "PE.CREO"
    },
    {
        
      "param": "AR/EDUC",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000026"
      },
      "empresaDescription": "EDUCA ARGENTINA",
      "order": 20010000,
      "refId": "00000000-0000-1000-0000-000000000075",
      "empresaCode": "AR.EDUC"
    },
    {
        
      "param": "BR/SAED",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Santillana Educação",
      "order": 30000000,
      "refId": "00000000-0000-1000-0000-000000000076",
      "empresaCode": "BR.SAED"
    },
    {
        
      "param": "BR/EDUS",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Edusfera",
      "order": 30010000,
      "refId": "00000000-0000-1000-0000-000000000077",
      "empresaCode": "BR.EDUS"
    },
    {
        
      "param": "BR/EDUQ",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Eduqhub",
      "order": 30020000,
      "refId": "00000000-0000-1000-0000-000000000078",
      "empresaCode": "BR.EDUQ"
    },
    {
        
      "param": "BR/PROJ",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Projeta",
      "order": 30030000,
      "refId": "00000000-0000-1000-0000-000000000079",
      "empresaCode": "BR.PROJ"
    },
    {
        
      "param": "BR/TLEI",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Territorio da Leitura",
      "order": 30040000,
      "refId": "00000000-0000-1000-0000-000000000080",
      "empresaCode": "BR.TLEI"
    },
    {
        
      "param": "BR/LEIO",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Leiomundo",
      "order": 30050000,
      "refId": "00000000-0000-1000-0000-000000000081",
      "empresaCode": "BR.LEIO"
    },
    {
        
      "param": "BR/PTNG",
      "country": {
        "refId": "00000000-0000-1000-0000-000000000044"
      },
      "empresaDescription": "Pitangua",
      "order": 30060000,
      "refId": "00000000-0000-1000-0000-000000000082",
      "empresaCode": "BR.PTNG"
    }
]

  return (
    <Companies
      dataSource={dataSource}
      loading={loading}
      handleDelete={()=>{}}
    />
  )
};

export default CompaniesContainer;
