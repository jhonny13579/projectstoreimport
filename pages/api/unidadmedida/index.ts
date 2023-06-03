import axiosfetchPublic from '../../../config/axios'

const API = {
  listUnidadesMedida: async () => {
    const URL = `/unidadmedida/listunidadmedida/`
    try {
      const result: any = await axiosfetchPublic(URL)    
      console.log("verrrrrdd", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  SaveUnidadesMedida: async (item: any) => {
    const URL = '/unidadmedida/saveunidadmedida';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
      console.log("verrrrr", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  UpdateUnidadesMedida: async (item: any) => {
    const URL = '/unidadmedida/updatunidadmedida';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
      console.log("verrrrupdater", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  DisabledUnidadesMedida: async (item: any) => {
    const URL = '/unidadmedida/disableunidadmedida';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
      console.log("verrrrrdd", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
}

export default API
