import axiosfetchPublic from '../../../config/axios'

const API = {
  ListarNegocios: async () => {
    const URL = `/negocios/listnegocios/`
    const result: any = await axiosfetchPublic(URL)    
    return result.data
  },

  SaveNegocio: async (item: any) => {
    const URL = '/negocios/savenegocio';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
      console.log("verrrrr", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  UpdateNegocio: async (item: any) => {
    const URL = '/negocios/updatenegocio';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
      console.log("verrrrupdater", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  DisabledNegocio: async (item: any) => {
    const URL = '/negocios/disablednegocio';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
      console.log("verrrrrdd", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  ListProductByNegocio: async (code: string) => {
    const URL = `/negocios/listproductobynegocio/${code}`
    try {
      const result: any = await axiosfetchPublic(URL)    
      console.log("verrrrrdd", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

}

export default API
