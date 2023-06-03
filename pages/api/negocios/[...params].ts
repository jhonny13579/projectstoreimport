import { axiosCreate, axiosfetchPrivateEmail } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from './../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'
import NodeCache from 'node-cache';
type Data = {}

const { Api } = objecApi

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query
  const cache = new NodeCache();
  switch (params[0]) {
    case 'listnegocios': {
      try {

        const URL = apiPath.negocios.PATH_ListarNegocios
        const apiCall: AxiosInstance = axiosCreate(Api)
        const { data } = await apiCall(URL)
        const result = data.Data.lresponse
        res.status(200).json(result)

      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error en la solicitud' });
      }
      break
    }

    case 'savenegocio': {
      try {
        const item = req.body
        const URL = apiPath.negocios.PATH_SaveNegocios
        const apiCall: AxiosInstance = axiosCreate(Api)
        const { data } = await apiCall.post(URL, item)
        const result = data.Data
        console.log("xxxxxxsave", result)
        res.status(200).json(result)

      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break
    }
    case 'updatenegocio': {
      try {
        const item = req.body
        const URL = apiPath.negocios.PATH_UpdateNegocios
        const apiCall: AxiosInstance = axiosCreate(Api)
        const { data } = await apiCall.post(URL, item)
        const result = data.Data

        res.status(200).json(result)
        console.log("xxxxxxipdate", result)
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break
    }
    case 'disablednegocio': {
      try {
        const item = req.body
        const URL = apiPath.negocios.PATH_DisableNegocios
        const apiCall: AxiosInstance = axiosCreate(Api)
        const { data } = await apiCall.post(URL, item)
        const result = data.Data
        console.log("xxxxxxdisa", result)
        res.status(200).json(result)

      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break
    }
    case 'listproductobynegocio': {
      try {

        const URL = apiPath.negocios.PATH_ListarProductosByNegocios(params[1])
        const apiCall: AxiosInstance = axiosCreate(Api)
        const { data } = await apiCall(URL)
        const result = data.Data.lresponse
        res.status(200).json(result)
        // console.log("resultadoooo",result)
      } catch (error) {
        console.log(error)
      }
      break
    }
    default:
      res.status(404).json({ error: 'Ruta no encontrada' });
      break;

  }
}

export default handler
