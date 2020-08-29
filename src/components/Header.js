import React from "react";
import { Link } from "react-router-dom";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import "../css/Header.css";

function Header({ term, getSearchTerm }) {
  return (
    <div className="header">
      <div className="header_left">
        <MenuSharpIcon />
        <Link to={`/`}>
          <img
            className="header_youtube_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header_center">
        <input
          type="text"
          placeholder="Search"
          value={term}
          onChange={getSearchTerm}
        />

        <button className="searchbutton">
          <Link to={`/search/${term}`}>
            <SearchIcon className="header_center_search_icon" />
          </Link>
        </button>
      </div>
      <div className="header_right">
        <VideoCallIcon className="header_right_icon" />
        <AppsIcon className="header_right_icon" />
        <NotificationsIcon className="header_right_icon" />
        <Avatar className="header_right_icon" />
      </div>
    </div>
  );
}

export default Header;
