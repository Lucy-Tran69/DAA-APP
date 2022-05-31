import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModelResponse } from "types/common";
import { PostResult } from "types/results/post.result";

export interface HomeState {
    loading: boolean;
    post: ModelResponse<PostResult>;
  }
  
  const initialState: HomeState = {
  } as HomeState;
  
  const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
      getPost(state) {
        state.loading = true;
      },
      getPostSuccess(state, action: PayloadAction<ModelResponse<PostResult>>) {
        state.post = action.payload;
        state.loading = false;
      },
      getPostFailed(state) {
        state.loading = false;
      },
    },
  });
  
  // Actions
  export const homeActions = homeSlice.actions;
  
  // Selectors
  // export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
  export const authModalType = (state: any) => state.home.authModalType;
  export const selectPost = (state: any) => state.home.post;
  
  // Reducer
  const homeReducer = homeSlice.reducer;
  export default homeReducer;