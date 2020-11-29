import axios from 'axios';
import { DEV_API } from '../utils';
import { HttpDataParams } from '../types/HttpType';

class Http {
  axios = () => {
    return axios.create({
      baseURL: DEV_API,
    });
  }

  get = async (params: HttpDataParams) => {
    try {
      return await this.axios().get(params.url, params.data);
    } catch (error) {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log('//----------------- ERROR RESPONSE ----------------//');
        console.log(error.response);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log('//------------------ ERROR REQUEST ----------------//');
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('//---------------------- ERROR --------------------//');
        console.log('Error', error.message);
      }
      console.log(error);
      return null;
    }
  }

  post = async (params: HttpDataParams) => {
    try {
      return await this.axios().post(params.url, params.data);
    } catch (error) {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log('//----------------- ERROR RESPONSE ----------------//');
        console.log(error.response);

        return error.response.data;

      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log('//------------------ ERROR REQUEST ----------------//');
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('//---------------------- ERROR --------------------//');
        console.log('Error', error.message);
      }

      return null;
    }
  }

  put = async (params: HttpDataParams) => {
    try {
      return await this.axios().put(params.url, params.data);
    } catch (e) {
      return null;
    }
  }

  delete = async (params: HttpDataParams) => {
    try {
      return await this.axios().delete(params.url, params.data);
    } catch (e) {
      return null;
    }
  }
}

export default new Http();
