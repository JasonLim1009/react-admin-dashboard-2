import React, { useContext } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" 
              onClick={() => dispatch({ type: 'TOGGLE' })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter1">4</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter2">7</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img 
            src="https://yt3.ggpht.com/ytc/AMLnZu8fFJD1dIXS8zOLsNEUqRu7CM-HIhU094MpDHiR=s108-c-k-c0x00ffffff-no-rj" 
            alt="" 
            className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
