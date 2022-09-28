import React from "react";
import "../CSS/dashboard.css";
import { Grid, Link,Menu,MenuButton,MenuItem,MenuList } from "@chakra-ui/react";
import { HiMenu,HiChevronDown } from "react-icons/hi";

const Sidebar = () => {
  return (
    <Grid>
      <div className="sidebar-container">
        <div className="menu-header">
          <div className="expand-icon">
            <HiMenu size="26px" />
          </div>
          <div className="logo">
            <Link className="logo-link" to="/dashboard">
              <span className="logo-text">Bitrix</span>
              <span className="logo-color">24</span>
            </Link>
          </div>
        </div>
        <div className="menu-item-body">
          <div className="menu-item">
            <ul>
              <li>
              <Menu>
              <MenuButton rightIcon={<HiChevronDown />}>
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
              </li>
              <li>
                <Link>Tasks and Projects</Link>
              </li>
              <li>
                <Link>CRM</Link>
              </li>
              <li>
                <Link>Marketing</Link>
              </li>
              <li>
                <Link>Sites and stores</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Sidebar;
