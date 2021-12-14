import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import navOptions from "./navOptions";
import routes, { REDIRECT_DEFAULT } from "./routes";
import SideNav from "../shared/side-nav";
import Loader from "./../shared/loader/index";
import AccessDenied from "../shared/access-denied";
import Breadcrumb from "../shared/breadcrumb";
import AlertMessage from "./../shared/alert-message/index";
import { connect } from "react-redux";
import {
  startBreadcrumbTrail,
  deleteBreadcrumbTrails,
  deleteMessage,
} from "../../store/appSlice";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: navOptions.menu,
      settings: navOptions.settings,
      routes,
    };
  }

  componentDidMount() {}

  render() {
    const { menu, settings, routes } = this.state;
    const enabledMenu =
      menu && menu.flatMap((menuItem) => menuItem.subMenu || [menuItem]);
    const {
      trails,
      messages,
      loader,
      startBreadcrumbTrail,
      deleteBreadcrumbTrails,
      deleteMessage,
    } = this.props;

    return (
      <HashRouter>
        <div className="root">
          <SideNav
            logo={navOptions.logo}
            menu={menu}
            settings={settings}
            onNavigate={startBreadcrumbTrail}
          />

          <div className="wrapper">
            <Breadcrumb trails={trails} onNavigate={deleteBreadcrumbTrails} />

            <div className="container">
              <Routes>
                {enabledMenu &&
                  enabledMenu.map((menuItem) => (
                    <Route
                      key={menuItem.path}
                      path={menuItem.path}
                      element={
                        menuItem.disabled ? (
                          <AccessDenied />
                        ) : (
                          menuItem.component
                        )
                      }
                    />
                  ))}

                {routes &&
                  routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={
                        route.disabled ? <AccessDenied /> : route.component
                      }
                    />
                  ))}

                <Route
                  path="*"
                  element={<Navigate replace to={REDIRECT_DEFAULT} />}
                />
              </Routes>
            </div>
          </div>
        </div>

        <AlertMessage messages={messages} onDelete={deleteMessage} />
        <Loader showFull={loader} />
      </HashRouter>
    );
  }
}

const mapStoreToProps = (store) => ({
  trails: store.app.trails,
  messages: store.app.messages,
  loader: store.app.loader,
});

const mapDispatchToProps = {
  startBreadcrumbTrail,
  deleteBreadcrumbTrails,
  deleteMessage,
};

export default connect(mapStoreToProps, mapDispatchToProps)(App);
