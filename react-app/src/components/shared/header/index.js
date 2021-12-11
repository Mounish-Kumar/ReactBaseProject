import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TranslateIcon from "@mui/icons-material/Translate";
import PaletteIcon from "@mui/icons-material/Palette";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Hamburger from "./../hamburger/index";
import PropTypes from "prop-types";

class Header extends Component {
  state = { showMenu: false };

  getMenuItem = (item) => {
    const { path, icon, label, disabled, subMenu } = item;

    return (
      <React.Fragment>
        {path && (
          <NavLink to={path} className="menu-item">
            {icon}
            <span>{label}</span>
          </NavLink>
        )}

        {!path && (
          <div className="menu-item">
            {icon}
            <span>{label}</span>
            {subMenu && subMenu.length > 0 && !disabled && (
              <ExpandMoreIcon className="submenu-arrow" />
            )}
          </div>
        )}
      </React.Fragment>
    );
  };

  toggleMenu = (isClose) => this.setState({ showMenu: isClose });

  render() {
    const { logo, menu, settings } = this.props;
    const { userName, userCode, logoutUrl, changeLanguage, changeTheme } =
      settings || {};

    const { showMenu } = this.state;

    return (
      <header>
        <NavLink to={logo.path} className="logo">
          {logo.icon}
        </NavLink>

        <Hamburger onChange={this.toggleMenu} />

        {menu && (
          <ul className={showMenu ? "show" : ""}>
            {menu.length > 0 &&
              menu.map((item, i) => (
                <li key={i} className={item.disabled ? "disabled" : ""}>
                  {this.getMenuItem(item)}

                  {item.subMenu && (
                    <ul>
                      {item.subMenu.length > 0 &&
                        item.subMenu.map((subItem, j) => (
                          <li
                            key={j}
                            className={
                              item.disabled || subItem.disabled
                                ? "disabled"
                                : ""
                            }
                          >
                            {this.getMenuItem(subItem)}
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}

            {settings && (
              <li>
                <div className="menu-item">
                  <AccountCircleIcon className="icon" />
                  <span>
                    {userName || "Welcome"}
                    <div className="user-code">{userCode}</div>
                  </span>
                  <ExpandMoreIcon className="submenu-arrow" />
                </div>
                <ul>
                  {changeLanguage && (
                    <li className="disabled">
                      <div className="menu-item">
                        <TranslateIcon className="icon" />
                        <span>Change Language</span>
                      </div>
                    </li>
                  )}
                  {changeTheme && (
                    <li className="disabled">
                      <div className="menu-item">
                        <PaletteIcon className="icon" />
                        <span>Change Theme</span>
                      </div>
                    </li>
                  )}
                  {logoutUrl && (
                    <li>
                      <a href={logoutUrl}>
                        <div className="menu-item">
                          <PowerSettingsNewIcon className="icon" />
                          <span>Logout</span>
                        </div>
                      </a>
                    </li>
                  )}
                </ul>
              </li>
            )}
          </ul>
        )}
      </header>
    );
  }
}

Header.propTypes = {
  logo: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  settings: PropTypes.object,
};

export default Header;
