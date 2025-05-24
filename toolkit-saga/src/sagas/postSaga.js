import { call, put, takeEvery } from "redux-saga/effects";
import { fetchPostsFailure, fetchPostsRequest, fetchPostsSuccess } from "../features/PostSlice";
import axios from "axios";

function* fetchPostWorker() {
  try {
   const response= yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
   console.log('Fetched posts:', response.data);
   yield put(fetchPostsSuccess(response.data));

  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}


function* postSaga() {
  yield takeEvery(fetchPostsRequest.type,fetchPostWorker)
}
export default postSaga;
// This saga listens for the fetchPostsRequest action and triggers the fetchPostWorker function to handle the API call and dispatch the appropriate success or failure actions.
