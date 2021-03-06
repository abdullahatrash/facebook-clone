import React from "react";
import { Avatar } from "@material-ui/core";
import "../style/story.css";
function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="stroy__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
