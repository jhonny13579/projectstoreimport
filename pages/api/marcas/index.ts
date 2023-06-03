import axiosfetchPublic from '../../../config/axios'

const API = {
  BylistMarca: async () => {
    const URL = `/marcas/listmarc/`
    try {
      const result: any = await axiosfetchPublic(URL)    
      console.log("verrrrrdd", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  SaveMarcaProd: async (item: any) => {
    const URL = '/marcas/savemarca';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
      console.log("verrrrr", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  UpdateMarcaProd: async (item: any) => {
    const URL = '/marcas/updatemarca';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
      console.log("verrrrupdater", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  DisabledMarcaProd: async (item: any) => {
    const URL = '/marcas/disabledemarca';
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
