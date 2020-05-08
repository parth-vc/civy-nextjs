import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { displayNotification } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";

const Notify = () => {
  const dispatch = useDispatch();
  const { open, message, duration, severity } = useSelector(
    state => state.common.notifyData
  );

  const handleClose = () => {
    dispatch(displayNotification({ open: false }));
  };

  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
      <MuiAlert
        elevation={10}
        variant="filled"
        severity={severity}
        onClose={handleClose}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Notify;
