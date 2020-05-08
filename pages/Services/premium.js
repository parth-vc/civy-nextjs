import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(56)
    }
  }
}));
const allContent = [
  {
    type: "Basic",
    buttonName: "Start Trial",
    priceing: "$32.99",
    content: "Basic Content"
  },
  {
    type: "Premium",
    buttonName: "Start Trial",
    priceing: "$76.99",
    content: "Premium  Content"
  },
  {
    type: "Premiere",
    buttonName: "Start Trial",
    priceing: "Find a feature that suitable",
    content: "Premiere Content"
  }
];
export default function Premium() {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      {allContent.map((premiim, index) => (
        <Paper elevation={3} key={index}>
          <Typography>{premiim.type}</Typography>
          <Typography>{premiim.priceing}</Typography>
          <Button variant="outlined" color="primary">
            {premiim.buttonName}
          </Button>
          <Typography>{premiim.content}</Typography>
        </Paper>
      ))}

      {/* <Paper elevation={3} />
            <Paper elevation={3} /> */}
    </div>
  );
}
