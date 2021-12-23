// import axios from "axios";
const axios = require("axios");
const url = "./Posts.json";

export default class PostsService {
  getAll() {
    return axios.get(url).then((res) => res.data);
  }
  getPosts(i, n) {
    return axios
      .get(url)
      .then((res) => res.data.filter((val) => val.id >= i && val.id <= n));
  }
  get(id) {
    return axios
      .get(url)
      .then((res) => res.data.filter((val) => val.id === id));
  }
}
