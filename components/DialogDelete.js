import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import useGobalStyle from "@common-styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  dltDialogTitle: {
    background: "#eff0f3",
    borderRadius: "6px 6px 0 0",
    "& h2": {
      fontWeight: 600,
      color: "#252f6a"
    }
  },
  dltDialogContent: {
    margin: "30px 0 20px",
    fontWeight: 500,
    color: "#000000"
  },
  dltDialogFooter: {
    padding: "0 20px 20px"
  }
}));
export default function AlertDialog(props) {
  const classes = { ...useGobalStyle(), ...useStyles() };
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteData = () => {
    dispatch(props.deleteData);
    setOpen(false);
    if (props.redirectUrl) {
      history.push(props.redirectUrl);
    }
  };

  return (
    <>
      <Tooltip
        title="Delete Project"
        color="primary"
        placement="top"
        arrow
        disableFocusListener
        disableTouchListener
      >
        {props.button ? (
          <DeleteForeverIcon onClick={handleClickOpen} />
        ) : (
          <>
            <Button className={props.classType} onClick={handleClickOpen}>
              <DeleteForeverIcon />
            </Button>
          </>
        )}
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.dltDialogTitle}>
          {" "}
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className={classes.dltDialogContent}
          >
            Are you sure you wish to delete {props.title}?
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dltDialogFooter}>
          <Button
            onClick={handleClose}
            color="primary"
            className={classes.siteButton}
            variant="outlined"
          >
            Disagree
          </Button>
          <Button
            onClick={handleDeleteData}
            color="primary"
            className={classes.siteButton}
            variant="outlined"
            autoFocus
            disabled={props.loader}
          >
            Agree
          </Button>
          {props && props.loader && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
