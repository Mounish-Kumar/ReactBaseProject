import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import navOptions from "./navOptions";
import routes, { REDIRECT_DEFAULT } from "./routes";
import SideNav from "../shared/side-nav";
import Loader from "./../shared/loader/index";
import AccessDenied from "../shared/access-denied";
import Breadcrumb from "../shared/breadcrumb";
import AlertMessage from "./../shared/alert-message/index";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      logo: navOptions.logo,
      menu: navOptions.menu,
      settings: navOptions.settings,
      routes,
      trails: [],
      messages: [],
      loader: false,
    };
  }

  componentDidMount() {}

  addBreadcrumbTrail = (label, path) => {
    this.setState({
      trails: [...this.state.trails, { label, path }],
    });
  };

  startBreadcrumbTrail = (label, path) => {
    this.setState({
      trails: [{ label, path }],
    });
  };

  deleteMessage = (index) => {
    const messages = this.state.messages.filter((item, i) => index !== i);
    this.setState({ messages });
  };

  render() {
    const { logo, menu, settings, routes, trails, messages, loader } =
      this.state;
    const enabledMenu =
      menu && menu.flatMap((menuItem) => menuItem.subMenu || [menuItem]);

    return (
      <HashRouter>
        <div className="root">
          <SideNav logo={logo} menu={menu} settings={settings} />

          <div className="wrapper">
            {trails && (
              <Breadcrumb
                trails={trails}
                onTrailsChange={(updatedTrails) =>
                  this.setState({ trails: updatedTrails })
                }
              />
            )}

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

        <AlertMessage messages={messages} onDelete={this.deleteMessage} />
        <Loader showFull={loader} />
      </HashRouter>
    );
  }
}

export default App;