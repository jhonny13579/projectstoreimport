import axiosfetchPublic from '../../../config/axios'

const API = {
  ListUsers: async (item: any) => {
    const URL = '/usuarios/listusers';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
     
    
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  SaveUsers: async (item: any) => {
    const URL = '/usuarios/saveusers';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
      console.log("verrrrr", result);
      return result.data;
    } catch (error) {
      console.log("show me the error",error);
      return null;
    }
  },

  UpdateUsers: async (item: any) => {
    const URL = '/usuarios/updateusers';
    try {
      const result: any = await axiosfetchPublic.post(URL, item);
      console.log("verrrrupdater", result);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  DisabledUsers: async (item: any) => {
    const URL = '/usuarios/disabledusers';
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
