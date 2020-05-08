import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AnimationText from "../../assests/common/CivyText.gif";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  animationText: {
    paddingBottom: 80
  },
  "@media (max-width:767px)": {
    animationText: {
      paddingBottom: 30
    }
  }
}));

export default function Animate() {
  const classes = useStyles();
  return (
    <div className={classes.animationText}>
      <Container maxWidth="lg">
        <div className={classes.textWarpper}>
          <img src={AnimationText} alt="Logo" />
        </div>
      </Container>
    </div>
  );
}
