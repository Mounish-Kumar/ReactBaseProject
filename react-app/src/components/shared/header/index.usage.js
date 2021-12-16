import React, { Component } from "react";
import CodeHighlighter from "../code-highlighter";
import Header from "./index";
import logo from "../../../assets/images/logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import DashboardIcon from "@mui/icons-material/Dashboard";

class HeaderUsage extends Component {
  logo = {
    path: "/home",
    icon: <img src={logo} alt="Logo" />,
  };

  menu = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      label: "Section 1",
      icon: <HomeIcon />,
      subMenu: [
        {
          label: "Page 1",
          path: "/header",
          icon: <LaptopMacIcon />,
        },
        {
          label: "Page 2",
          path: "/header",
          disabled: true,
          icon: <LaptopMacIcon />,
        },
      ],
    },
  ];

  settings = {
    userName: "Mounish Kumar",
    userCode: "GBS04420",
    logoutUrl: "https://www.google.com",
    changeLanguage: true,
    changeTheme: true,
  };

  code = (
    <Header logo={this.logo} menu={this.menu} settings={this.settings} />
  );

  render() {
    return (
      <React.Fragment>
        <h1>Header</h1>
        <br />
        <h3>Preview</h3>
        <div className="viewport">{this.code}</div>
        <br />
        <h3>Usage</h3>
        <CodeHighlighter language="html">
          {`
<Header
  logo={this.logo}
  menu={this.menu}
  settings={this.settings}
/>
          `}
        </CodeHighlighter>
        <br />
        To configure logo in Header:
        <CodeHighlighter language="js">{`
logo = {
  path: "/dashboard",  // Path to redirect on clicking logo
  icon: <img className="logo" src={logo} alt="Logo" />  // img tag for logo
}
        `}</CodeHighlighter>
        <br />
        To configure menu items in Header:
        <CodeHighlighter language="js">{`
menu = [
  {
    label: "Dashboard",  // Text to display the menu item
    path: "/dashboard",  // Path to navigate on clicking menu item
    icon: <DashboardIcon />  // icon for the menu item
  },
  {
    label: "Section 1",  // Text to display the menu item
    icon: <HomeIcon />,  // icon for the menu item
    subMenu: [  // To configure sub menu
      {
        label: "Page 1",  // Text to display in sub menu item
        path: "/header",  // Path to navigate on clicking sub menu item
        icon: <LaptopMacIcon />  // icon for the sub menu item
      },
      {
        label: "Page 2",  // Text to display in sub menu item
        path: "/header", // Path to navigate on clicking sub menu item
        disabled: true,  // To disable menu item
        icon: <LaptopMacIcon />  // icon for the sub menu item
      }
    ]
  }
]
        `}</CodeHighlighter>
        <br />
        To configure Settings menu in Header:
        <CodeHighlighter language="js">{`
settings = {
  userName: "Mounish Kumar",  // User name to display in the last menu item
  userCode: "GBS04420",  // User code to display
  logoutUrl: "https://www.google.com",  // URL to redirect on clicking logout
  changeLanguage: true,  // To show Change Language setting
  changeTheme: true  // To show Change Theme setting
}
        `}</CodeHighlighter>
      </React.Fragment>
    );
  }
}

export default HeaderUsage;
