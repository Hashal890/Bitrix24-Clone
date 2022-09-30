import React from "react";
import "../CSS/dashboard.css";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import {TbCrown} from "react-icons/tb";
import {BsChevronDown,BsChevronUp} from "react-icons/bs";
import { useState } from "react";
import {AiFillCaretDown,AiFillCaretUp} from "react-icons/ai";


const SidebarLeft = () => {
  const [collaboration ,setCollaboration]=useState(false);
  const [application , setApplication]=useState(false);
  const [show ,setShow]=useState(false);
  const [chev,setChev] =useState(false);
  const [chev2,setChev2] =useState(false);

  const handleApplication=()=>{
    setApplication(s=>!s);
    setChev2(s=>!s);
  }

  return (
      <div className="sidebar-container">
        <div className="menu-header">
          <div className="expand-icon">
            <HiMenu size="26px" />
          </div>
          <div className="logo">
            <Link className="logo-link" href="/">
              <span className="logo-text">Bitrix</span>
              <span className="logo-color">24</span>
            </Link>
          </div>
        </div>
        <div className="menu-item-body">
          <div className="menu-list">
            <ul className="menu-up">
              <li className="menu-item" id={chev?"chev":""} onClick={()=>setChev(c=>!c)}>
                <Link className="chev-menu" onClick={()=>setCollaboration(s=>!s)}>
                  <span>Collaboration</span>
                  <p style={{display: collaboration ? "none" : "block"}}><BsChevronDown/></p>
                  <p style={{display: collaboration ? "block" : "none"}}><BsChevronUp/></p>
                </Link>
                <ul className="sub-menu" style={{display: collaboration ? "block" : "none"}}>
                  <li><Link>Feed</Link></li>
                  <li><Link>Calendar</Link></li>
                  <li><Link>Online documents</Link></li>
                  <li><Link>Bitrix24.Drive</Link></li>
                  <li><Link>Webmail</Link></li>
                  <li><Link>Workgroups</Link></li>
                </ul>
              </li>
              <li className="menu-item">
                <Link to="/taskandprojects"><span>Tasks and Projects</span></Link>
              </li>
              <li className="menu-item">
                <Link><span>CRM</span></Link>
              </li>
              <li className="menu-item">
                <Link><span>Marketing</span></Link>
              </li>
              <li className="menu-item">
                <Link><span>Sites and stores</span></Link>
              </li>
              <li className="menu-item">
                <Link><span>Company</span></Link>
              </li>
              <li className="menu-item">
                <Link><span>Automation</span></Link>
              </li>
              <li className="menu-item" id={chev2 ? "chev":""} onClick={handleApplication}>
                <Link className="chev-menu">
                  <span>Applications</span>
                  <p style={{display: application ? "none" : "block"}}><BsChevronDown/></p>
                  <p style={{display: application ? "block" : "none"}}><BsChevronUp/></p>
                </Link>
                <ul className="sub-menu" style={{display: application ? "block" : "none"}}>
                  <li><Link>Market</Link></li>
                  <li><Link>Developer resources</Link></li>
                </ul>
              </li>
              <li className="menu-item">
                <ul className="sub-menu" style={{display: show ? "block" : "none"}}>
                  <li>
                    <div className="hidden">
                      <div className="hidden-line"></div>
                      <p>HIDDEN</p>
                      <div className="hidden-line"></div>
                    </div>
                  </li>
                  <li><Link>Subscription</Link></li>
                  <li><Link>Settings</Link></li>
                </ul>
                <Link>
                  <span className="sidenav-more" onClick={()=>setShow(s=>!s)} style={{display: show ? "none" : "block"}}>
                    <div>
                      <p>More...</p>
                      <p><AiFillCaretDown /></p>  
                    </div>  
                  </span> 
                  <span className="sidenav-more" onClick={()=>setShow(s=>!s)} style={{display: show ? "block" : "none"}}>
                    <div>
                      <p>Hide</p> 
                      <p><AiFillCaretUp/></p>
                    </div>
                  </span>
                </Link>
              </li>
            </ul>
            <ul className="menu-down">
              <li><Link><span>SITEMAP</span></Link></li>
              <li><Link><span>CONFIGURE MENU</span></Link></li>
              <li><Link><span>INVITE USERS</span></Link></li>
              <li className="upgrade">
                <Link>
                <div>
                  <p><TbCrown/></p>
                  <p><span>UPGRADE YOUR PLAN</span></p>
                </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default SidebarLeft;
