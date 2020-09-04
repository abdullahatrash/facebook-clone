import React from "react";
import "../style/sidebar.css";
import SideBarRow from "./SideBarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { useStateValue } from "../StateProvider";
function SideBar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SideBarRow src={user.photoURL} title={user.displayName} />
      <SideBarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SideBarRow Icon={PeopleIcon} title="Friends" />
      <SideBarRow Icon={ChatIcon} title="Messenger" />
      <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
      <SideBarRow Icon={VideoLibraryIcon} title="videos" />
      <SideBarRow Icon={ExpandMoreIcon} title="Marketplace" />
    </div>
  );
}

export default SideBar;
