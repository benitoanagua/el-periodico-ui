import axios from "axios";

export default class PostsService {
  getPosts() {
    return axios.get("../../src/helpers/Posts.json").then((res) => res.data);
  }
}
