import React from "react";
import "../style/sidebarRow.css";
import { Avatar } from "@material-ui/core";
function SideBarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarRow;
