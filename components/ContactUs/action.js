import request from "@util/request";
import { displayNotification } from "../../store/action";
export const GET_FEEDBACK_SUCCESS = "GET_FEEDBACK_SUCCESS";
export const GET_FEEDBACK_ERROR = "GET_FEEDBACK_ERROR";
export const GET_FEEDBACK_REQUEST = "GET_FEEDBACK_REQUEST";

export const getFeedbackRequest = () => ({
  type: GET_FEEDBACK_REQUEST
});

export const getFeedbackSuccess = payload => ({
  type: GET_FEEDBACK_SUCCESS,
  payload
});

export const getFeedbackError = payload => ({
  type: GET_FEEDBACK_REQUEST,
  payload
});

export const GetUserFeedback = (body, successCB, errorCB) => {
  return dispatch => {
    dispatch(getFeedbackRequest());
    return request("post", "/api/v1/feedback/", body)
      .then(response => {
        if (response.status === 200) {
          dispatch(getFeedbackSuccess(response.data.organization));
          dispatch(
            displayNotification({
              open: true,
              message:
                "Thanks for contacting us! We will get in touch with you shortly."
            })
          );
          successCB(response.data.user);
        } else {
          dispatch(getFeedbackError(response.data.message));
          errorCB(response.data.message);
        }
      })
      .catch(error =>
        dispatch(
          displayNotification({
            open: true,
            message:
              error.response && error.response.data
                ? error.response.data.message
                : "Something went wrong",
            duration: 3000,
            severity: "error"
          })
        )
      );
  };
};
