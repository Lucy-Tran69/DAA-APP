import HomeApi from "api/home.api";
import { homeActions } from "./home.slice";

export const getPostItem = () => (dispatch: any) => {
    return HomeApi.getPost()
      .then(res => dispatch(homeActions.getPostSuccess(res)))
      .catch(err => Promise.reject(dispatch(homeActions.getPostFailed())));
  }
