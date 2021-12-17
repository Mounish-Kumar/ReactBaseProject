import React from "react";
import logo from "../../assets/images/logo.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatIcon from "@mui/icons-material/Chat";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import TableChartIcon from "@mui/icons-material/TableChart";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import TabIcon from "@mui/icons-material/Tab";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import SyncIcon from "@mui/icons-material/Sync";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// Lazy load components
const HeaderUsage = React.lazy(() => import("../shared/header/index.usage"));
const SideNavUsage = React.lazy(() => import("../shared/side-nav/index.usage"));
const BreadcrumbUsage = React.lazy(() =>
  import("../shared/breadcrumb/index.usage")
);
const LoaderUsage = React.lazy(() => import("../shared/loader/index.usage"));
const PopupUsage = React.lazy(() => import("../shared/popup/index.usage"));
const TableUsage = React.lazy(() => import("../shared/table/index.usage"));
const PaginationUsage = React.lazy(() =>
  import("../shared/pagination/index.usage")
);
const AlertMessageUsage = React.lazy(() =>
  import("../shared/alert-message/index.usage")
);
const TabsUsage = React.lazy(() => import("../shared/tabs/index.usage"));
const ExpandCollapseUsage = React.lazy(() =>
  import("../shared/expand-collapse/index.usage")
);
const Dashboard = React.lazy(() => import("../dashboard/Dashboard"));
const Employee = React.lazy(() => import("../employee/Employee"));

const navOptions = {
  logo: {
    path: "/dashboard",
    icon: <img src={logo} alt="Logo" />,
    title: "React Backoffice",
  },
  settings: {
    userName: "Mounish Kumar",
    userCode: "GBS04420",
    logoutUrl: "https://www.google.com",
    changeLanguage: true,
    changeTheme: true,
  },
  menu: [
    {
      label: "Dashboard",
      path: "/dashboard",
      component: <Dashboard />,
      icon: <HomeIcon />,
    },
    {
      label: "Employee",
      path: "/employee",
      component: <Employee />,
      icon: <PeopleIcon />,
    },
    {
      label: "Layout Components",
      icon: <LaptopMacIcon />,
      subMenu: [
        {
          label: "Header",
          path: "/header",
          component: <HeaderUsage />,
          icon: <CalendarViewWeekIcon />,
        },
        {
          label: "SideNav",
          path: "/sidenav",
          component: <SideNavUsage />,
          icon: <TableRowsIcon />,
        },
        {
          label: "Breadcrumb",
          path: "/breadcrumb",
          component: <BreadcrumbUsage />,
          icon: <MoreHorizIcon />,
        },
        {
          label: "Loader",
          path: "/loader",
          component: <LoaderUsage />,
          icon: <SyncIcon />,
        },
        {
          label: "Popup",
          path: "/popup",
          component: <PopupUsage />,
          icon: <DynamicFeedIcon />,
        },
        {
          label: "Table",
          path: "/table",
          component: <TableUsage />,
          icon: <TableChartIcon />,
        },
        {
          label: "Pagination",
          path: "/pagination",
          component: <PaginationUsage />,
          icon: <FormatListNumberedIcon />,
        },
        {
          label: "AlertMessage",
          path: "/alertmessage",
          component: <AlertMessageUsage />,
          icon: <ChatIcon />,
        },
        {
          label: "Tabs",
          path: "/tabs",
          component: <TabsUsage />,
          icon: <TabIcon />,
        },
        {
          label: "ExpandCollapse",
          path: "/expandcollapse",
          component: <ExpandCollapseUsage />,
          icon: <ArrowDownwardIcon />,
        },
      ],
    },
  ],
};

export default navOptions;
