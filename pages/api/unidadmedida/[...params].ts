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
    case 'listunidadmedida': {
      try { 
       
        const URL = apiPath.unidadMedida.PATH_ListarUNDMedida
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
    
    case 'saveunidadmedida': {
      try {
        const item = req.body
        const URL = apiPath.unidadMedida.PATH_SaveUNDMedida
        const apiCall: AxiosInstance = axiosCreate(Api)
        const {data} = await apiCall.post(URL, item)
        const result = data.Data
        console.log("xxxxxxsave",result)
        res.status(200).json(result)
      
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break
    }
    case 'updatunidadmedida': {
      try {
        const item = req.body
        const URL = apiPath.unidadMedida.PATH_UpdateUNDMedida
        const apiCall: AxiosInstance = axiosCreate(Api)
        const {data} = await apiCall.post(URL, item)
        const result = data.Data
     
        res.status(200).json(result)
        console.log("xxxxxxipdate",result)
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break
    }
    case 'disableunidadmedida': {
      try {
        const item = req.body
        const URL = apiPath.unidadMedida.PATH_DisableUNDMedida
        const apiCall: AxiosInstance = axiosCreate(Api)
        const {data} = await apiCall.post(URL, item)
        const result = data.Data
        console.log("xxxxxxdisa",result)
        res.status(200).json(result)
      
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break
    }
    default:
      res.status(404).json({ error: 'Ruta no encontrada' });
      break;
  
  }
}

export default handler
