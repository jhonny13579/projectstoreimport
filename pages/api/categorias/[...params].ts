import { axiosCreate, axiosfetchPrivateEmail } from '../../../config/axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiPath } from './../../../consts/path'
import { objecApi } from '../../../consts/storageConst'
import { AxiosInstance } from 'axios'

type Data = {}

const { Api } = objecApi

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { params }: any = req.query

  switch (params[0]) {
    case 'list': {
      try {
        const URL = apiPath.categoria.PATH_ListarByCategory
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

    case 'savecategory': {
      try {
        const item = req.body
        const URL = apiPath.categoria.PATH_SaveCategory
        const apiCall: AxiosInstance = axiosCreate(Api)
        const {data} = await apiCall.post(URL, item)
        const result = data.Data
       
        res.status(200).json(result)
      
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break
    }
    case 'updatecategory': {
      try {
        const item = req.body
        const URL = apiPath.categoria.PATH_UpdateCategory
        const apiCall: AxiosInstance = axiosCreate(Api)
        const {data} = await apiCall.post(URL, item)
        const result = data.Data
     
        res.status(200).json(result)
      
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break
    }
    case 'disablecategory': {
      try {
        const item = req.body
        const URL = apiPath.categoria.PATH_DisabledCategory
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
  }
}

export default handler
