import React from "react";
import "../CSS/dashboard.css";
import { AiFillQuestionCircle, AiOutlineSearch } from "react-icons/ai";
import { BsBellFill, BsChatTextFill } from "react-icons/bs";
import {MdOutlineMobileFriendly} from "react-icons/md";
import {GiPhone} from "react-icons/gi";

const SidebarRight = () => {
  return (
    <div className="sidebar-left">
      <div className="sidebar-left-container">
        <div className="sidebar-let-up">
          <div className="sidebar-left-icon">
            <AiFillQuestionCircle className="icon" />
          </div>
          <div className="sidebar-left-icon">
            <BsBellFill className="icon" />
          </div>
          <div className="sidebar-left-icon">
            <BsChatTextFill className="icon" />
          </div>
          <div className="line"></div>
          <div className="sidebar-left-search">
            <AiOutlineSearch className="icon" />
          </div>
          <div className="line"></div>
          <div className="sidebar-left-name-icon">
            j
          </div>
        </div>
        <div className="sidebar-left-down">
          <hr />
          <div className="mobile">
            <MdOutlineMobileFriendly/>
          </div>
          <hr />
          <div className="phone">
            <GiPhone/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
