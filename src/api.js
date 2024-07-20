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

  static async addWord(wordData) {
    let res = await this.request(`words/`, wordData, 'post');
    console.log('Added word in API', res);
    return res;
  }

  static async userLogin(loginData) {
    let res = await this.request(`auth/login`, loginData, 'post');
    console.log('getToken API', res);
    return res.token;
  }

  static async userSignup(signupData) {
    console.log('register signup data', signupData)
    let res = await this.request(`auth/signup`, signupData, 'post');
    console.log('register API', res);
    return res.token;
  }

  static async getRankedUsers() {
    let res = await this.request('users/ranked');
    console.log('ALL RANKED USERS FROM API', res);
    return res;
  }

  static async getCurrUser(username) {
    let res = await this.request(`users/${username}`);
    console.log('current user API', res);
    return res;
  }

  static async addPointsToUser(username, pointsID) {
    // let res = await this.request(`users/${username}/points/${pointsID}`, method='post');
    let res = await this.request(`users/${username}/points/${pointsID}`, {}, 'post');
    console.log('added points to user in API', res);
    return res;
  }

  static async addGuessToUser(username, guessID) {
    // let res = await this.request(`users/${username}/guess/${guessID}`, method='patch');
    let res = await this.request(`users/${username}/guess/${guessID}`, {}, 'patch');
    console.log('added guess to user in API', res);
    return res;
  }

  static async addWordToUser(username, wordID, completionData) {
    let res = await this.request(`users/${username}/word/${wordID}`, completionData, 'post');
    console.log('added word to user in API', res);
    return res;
  }

  static async getWordCompletion(username, wordID) {
    let res = await this.request(`users/${username}/word/${wordID}`);
    console.log('added word to user in API', res);
    return res;
  }
}


export default SpellingBeeApi;