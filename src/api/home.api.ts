import { ModelResponse } from "types/common";
import { PostResult } from "types/results/post.result";
import axiosClient from "./axiosClient";
import Config from "./config";

const HomeApi = {
    getPost(): Promise<ModelResponse<PostResult>> {
      return axiosClient.get(Config.API_URL.GET_POSTS);
    },
  };
  
  export default HomeApi;