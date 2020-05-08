import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useGobalStyle from "@common-styles";
import clsx from "clsx";
import YouTube from "react-youtube";

const useStyles = makeStyles(theme => ({
 
}));
function _onReady(event) {
  event.target.pauseVideo();
}
const opts = {
  playerVars: { autoplay: 1 }
};
export default function Index({ videoId }) {
  const classes = { ...useGobalStyle(), ...useStyles() };
  return (
    <>
      <div className={clsx(classes.imageStyle, classes.introVideo)}>
        <div className={clsx(classes.imageStyle, classes.videoBg)}></div>
        <div className={classes.youtubeVideoOuter}>
          <YouTube
            loading="lazy"
            videoId={videoId}
            opts={opts}
            onReady={_onReady}
            className={classes.youtubeVideo}
          />
        </div>
      </div>
    </>
  );
}
