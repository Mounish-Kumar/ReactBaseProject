import logo from "../../assets/images/logo.svg";
import Dashboard from "../dashboard/Dashboard";
import HeaderUsage from "../shared/header/index.usage";
import SideNavUsage from "../shared/side-nav/index.usage";
import BreadcrumbUsage from "../shared/breadcrumb/index.usage";
import LoaderUsage from "../shared/loader/index.usage";
import PopupUsage from "../shared/popup/index.usage";
import TableUsage from "../shared/table/index.usage";
import PaginationUsage from "../shared/pagination/index.usage";
import AlertMessageUsage from "../shared/alert-message/index.usage";
import TabsUsage from "../shared/tabs/index.usage";
import ExpandCollapseUsage from "../shared/expand-collapse/index.usage";
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
import Employee from "./../employee/Employee";

const navOptions = {
  logo: {
    path: "/dashboard",
    icon: <img src={logo} alt="Logo" />,
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
