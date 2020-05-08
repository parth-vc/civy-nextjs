import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  notProjectsLbl: {
    display: "block",
    textAlign: "center",
    width: "auto",
    border: "2px solid",
    padding: 25,
    margin: "0 auto",
    background: "#eff0f3"
  },
  "@media(max-width:767px)": {
    titleText: {
      textAlign: "center"
    },
    notProjectsLbl: {
      padding: 15
    }
  }
}));

export default function Index(props) {
  const classes = { ...useStyles() };
  return (
    <>
      <Typography
        variant="h3"
        color="primary"
        className={classes.notProjectsLbl}
      >
        {props.message}
      </Typography>
    </>
  );
}
