import { rest } from 'msw';

const { REACT_APP_URL_BASE } = process.env;

export const handlers = [
  rest.get(`${REACT_APP_URL_BASE}/sif/v3/empresas`, (req: any, res: any, ctx: any) => {
    return res(ctx.json({
      empresaList: [{
        empresa: {
          refId: "00000000-0000-1000-0000-000000000001",
          param: "MX/UNOI",
          country: {
            refId: "00000000-0000-1000-0000-000000000165"
          },
          empresaDescription: "Sistemas Educativos de Enseñanza S.A. de C.V.",
          empresaCode: "MX.UNO",
          order: 1000
        }
      }, {
        empresa: {
          refId: "00000000-0000-1000-0000-000000000002",
          param: "CO/UNOI",
          country: {
            refId: "00000000-0000-1000-0000-000000000062"
          },
          empresaDescription: "UNO Colombia",
          empresaCode: "CO.UNO",
          order: 2000
        }
      }, {
        empresa: {
          refId: "00000000-0000-1000-0000-000000000003",
          param: "GT/UNOI",
          country: {
            refId: "00000000-0000-1000-0000-000000000103"
          },
          empresaDescription: "UNO Guatemala",
          empresaCode: "GT.UNO",
          order: 3000
        }
      }]
    }))
  }),
  rest.get(`${REACT_APP_URL_BASE}/v0.1/agent/alerts`, (req: any, res: any, ctx: any) => {
    return res(ctx.json([
      {
        backend: "SSB",
        numberRequests: "111",
        operation: "C",
        timestamp: "2022-09-29T16:10:08.000+0000"
      },
      {
        backend: "WCO",
        numberRequests: "12",
        operation: "W",
        timestamp: "2022-09-29T16:09:47.000+0000"
      },
    ]))
  })
]
