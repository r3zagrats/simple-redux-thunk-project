import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
} from "../constants/post";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_POST_REQUEST });

    const url = "https://jsonplaceholder.typicode.com/users";
    const respone = await fetch(url);
    const data = await respone.json();

    dispatch({ type: FETCH_POST_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    dispatch({ type: FETCH_POST_ERROR, payload: error });
  }
};
