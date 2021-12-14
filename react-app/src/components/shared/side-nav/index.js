import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TranslateIcon from "@mui/icons-material/Translate";
import PaletteIcon from "@mui/icons-material/Palette";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ExpandCollapse from "./../expand-collapse/index";
import Hamburger from "./../hamburger/index";
import PropTypes from "prop-types";

class SideNav extends Component {
  state = { showMenu: false, minimized: false };

  getMenuItem = (item) => {
    const { path, icon, label, disabled } = item;
    const { onNavigate } = this.props;
    let classes = `menu-item ${disabled ? "disabled" : ""}`;

    return (
      <React.Fragment>
        {path && (
          <NavLink
            to={path}
            className={classes}
            onClick={() => onNavigate && onNavigate({ label, path })}
          >
            {icon}
            <span>{label}</span>
          </NavLink>
        )}

        {!path && (
          <div className={classes}>
            {icon}
            <span>{label}</span>
          </div>
        )}
      </React.Fragment>
    );
  };

  toggleMenu = (isClose) => this.setState({ showMenu: isClose });

  minimizeMaximize = () => this.setState({ minimized: !this.state.minimized });

  render() {
    const { logo, menu, settings, onNavigate } = this.props;
    const { userName, userCode, logoutUrl, changeLanguage, changeTheme } =
      settings || {};
    const { showMenu, minimized } = this.state;

    return (
      <React.Fragment>
        <Hamburger className="nav-hamburger" onChange={this.toggleMenu} />

        <nav
          className={
            (showMenu ? "show " : "") + (minimized ? "minimized " : "")
          }
        >
          {!minimized && (
            <IndeterminateCheckBoxOutlinedIcon
              className="minimize-icon"
              onClick={this.minimizeMaximize}
            />
          )}
          {minimized && (
            <AddBoxOutlinedIcon
              className="minimize-icon"
              onClick={this.minimizeMaximize}
            />
          )}

          {logo && (
            <NavLink
              to={logo.path}
              className="logo"
              onClick={() => onNavigate && onNavigate({ path: logo.path })}
            >
              {logo.icon}
              <div className="title">{logo.title}</div>
            </NavLink>
          )}

          {(userName || userCode) && (
            <div className="menu-item user">
              <AccountCircleIcon className="icon" />
              <span>
                {userName || userCode}
                {userName && userCode && (
                  <div className="user-code">{userCode}</div>
                )}
              </span>
            </div>
          )}

          <div className="menu">
            {menu &&
              menu.length > 0 &&
              menu.map((item, i) => (
                <ExpandCollapse
                  key={i}
                  collapse={true}
                  collapsible={this.getMenuItem(item)}
                >
                  {item.subMenu &&
                    item.subMenu.length > 0 &&
                    item.subMenu.map((subItem, j) => (
                      <div key={j} className="sub-menu">
                        {this.getMenuItem(subItem)}
                      </div>
                    ))}
                </ExpandCollapse>
              ))}

            {changeLanguage && (
              <div className="menu-item disabled">
                <TranslateIcon className="icon" />
                <span>Change Language</span>
              </div>
            )}

            {changeTheme && (
              <div className="menu-item disabled">
                <PaletteIcon className="icon" />
                <span>Change Theme</span>
              </div>
            )}
          </div>

          {logoutUrl && (
            <a href={logoutUrl} className="menu-item logout">
              <PowerSettingsNewIcon className="icon" />
              <span>Logout</span>
            </a>
          )}
        </nav>
      </React.Fragment>
    );
  }
}

SideNav.propTypes = {
  logo: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  settings: PropTypes.object,
};

export default SideNav;
