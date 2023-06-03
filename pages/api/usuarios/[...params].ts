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
    case 'listusers': {
      try {
        const item = req.body
        const URL = apiPath.usuarios.PATH_ListarByUsers
        const apiCall: AxiosInstance = axiosCreate(Api)
        const {data} = await apiCall.post(URL, item)
        const result = data.Data.lresponse  
      
        res.status(200).json(result)
      
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break
    }
    
    case 'saveusers': {
      try {
        const item = req.body
        const URL = apiPath.usuarios.PATH_SaveUser
        const apiCall: AxiosInstance = axiosCreate(Api)
        const {data} = await apiCall.post(URL, item)
        console.log("xxxxxxsave",data)
        const result = data.Data
        console.log("xxxxxxsave",result)
        res.status(200).json(result)
      
      } catch (error) {
        console.log("QUIERO VER EL ERROROOO",error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break
    }
    case 'updateusers': {
      try {
        const item = req.body
        const URL = apiPath.usuarios.PATH_UpdateUser
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
    case 'disabledusers': {
      try {
        const item = req.body
        const URL = apiPath.usuarios.PATH_DisabledUser
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
