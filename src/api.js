import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3001";


class SpellingBeeApi {
  // Static token that will be used to access specific parts of the api if a user decides to create an account
  static token;


  static async request(endpoint, data = {}, method = 'get') {
    console.debug('API Call:', endpoint, data, method);
    console.log('token', SpellingBeeApi.token);

    const url = `${BASE_URL}/${endpoint}`;
    console.log('URL', url);
    const headers = { Authorization: `Bearer ${SpellingBeeApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getWord(id) {
    let res = await this.request(`words/${id}`);
    return res.word;
  }

  static async userLogin(loginData) {
    let res = await this.request(`auth/login`, loginData, 'post');
    console.log('getToken API', res)
    return res.token;
  }

  static async userSignup(signupData) {
    console.log('register signup data', signupData)
    let res = await this.request(`auth/signup`, signupData, 'post');
    console.log('register API', res)
    return res.token;
  }

  static async getCurrUser(username) {
    let res = await this.request(`users/${username}`);
    console.log('current user API', res)
    return res;
  }
}


export default SpellingBeeApi;