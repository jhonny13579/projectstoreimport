import axiosfetchPublic from '../../../config/axios'

const API = {
  BylistCategory: async () => {
    const URL = `/categorias/list/`
    try {
      const result: any = await axiosfetchPublic(URL)    
      console.log("verrrrrdd", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  SaveCategory: async (item: any) => {
    const URL = '/categorias/savecategory';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
      console.log("verrrrr", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  UpdateCategory: async (item: any) => {
    const URL = '/categorias/updatecategory';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
      console.log("verrrrupdater", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  DisabledCategory: async (item: any) => {
    const URL = '/categorias/disablecategory';
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
