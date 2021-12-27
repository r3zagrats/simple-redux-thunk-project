import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
} from "../constants/post";

const initialState = {
  status: null,
  message: "",
  data: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        status: "requesting",
      };

    case FETCH_POST_SUCCESS: {
      const newData = [...state.data, ...action.payload];

      return {
        ...state,
        status: "successful",
        data: newData,
      };
    }

    case FETCH_POST_ERROR:
      return {
        ...state,
        status: "failed",
        message: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;
