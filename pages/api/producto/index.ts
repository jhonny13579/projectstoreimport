import axiosfetchPublic from '../../../config/axios'

const API = {
  BylistProductoImage: async (code: string) => {
    


    const URL = `/producto/listproducto/${code}`


    try {
      const result: any = await axiosfetchPublic(URL)    
      console.log("verrrrrdd", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }

  },

  BylistProductUpdate: async (code1: string, code2:string) => {
    const URL = `/producto/listproducupdate/${code1}/${code2}`

    
    try {
      const result: any = await axiosfetchPublic(URL)    
      console.log("verrrrrdd", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }



  },

 ByListProducRecomendado: async (item: any) => {

  const URL = '/producto/listproducid';

  try {
    const result: any = await axiosfetchPublic.post(URL, item);
    console.log("verrrrr", result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
},

BylistProductoNegocio: async (code: string) => {
  const URL = `/producto/listproducbynegocio/${code}`




    try {
      const result: any = await axiosfetchPublic(URL)    
      console.log("verrrrrdd", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }

},

BylistProductoInactive: async (code: string) => {
  const URL = `/producto/listproducinactive/${code}`
  try {
    const result: any = await axiosfetchPublic(URL)    
    console.log("verrrrrdd", result);
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }

},
};



export default API
