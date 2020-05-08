import {
  GET_FEEDBACK_SUCCESS,
  GET_FEEDBACK_ERROR,
  GET_FEEDBACK_REQUEST
} from "./action";

const initialState = {
  items: [],
  loading: false
};

export default function feedbackReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FEEDBACK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload
      };
    case GET_FEEDBACK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
