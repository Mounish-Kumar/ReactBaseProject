import React, { Component } from "react";
import PropTypes from "prop-types";

class Tabs extends Component {
  constructor(props) {
    super(props);

    const { tabsConfig, defaultActiveIndex } = this.props;
    const activeIndexOnLoad =
      defaultActiveIndex &&
      defaultActiveIndex < tabsConfig.length &&
      defaultActiveIndex >= 0 &&
      !tabsConfig[defaultActiveIndex].disabled
        ? defaultActiveIndex
        : 0;

    this.state = {
      activeIndex: activeIndexOnLoad,
    };
  }

  componentDidMount() {
    const { tabsConfig, callTabChangeOnLoad } = this.props;
    const { activeIndex } = this.state;
    callTabChangeOnLoad &&
      this.handleTabChange(tabsConfig[activeIndex], activeIndex);
  }

  handleTabChange = (item, index) => {
    if (!item.disabled) {
      const { onTabChange } = this.props;
      this.setState({ activeIndex: index });
      onTabChange(item, index);
    }
  };

  render() {
    const { tabsConfig, direction } = this.props;
    const { activeIndex } = this.state;
    const activeTab = tabsConfig[activeIndex];

    return (
      <div
        className={`tabs ${
          direction && "y" === direction.toLowerCase() ? "y" : "x"
        }`}
      >
        {tabsConfig && tabsConfig.length > 0 && (
          <React.Fragment>
            <div className="head">
              {tabsConfig.map((item, index) => {
                let tabClasses = "tab";
                if (item.disabled) {
                  tabClasses += " disabled";
                } else if (activeIndex === index) {
                  tabClasses += " active";
                }

                return (
                  <div
                    key={index}
                    className={tabClasses}
                    onClick={() =>
                      index !== activeIndex && this.handleTabChange(item, index)
                    }
                  >
                    {item.head}
                  </div>
                );
              })}
            </div>
            {<div className="body">{activeTab.body}</div>}
          </React.Fragment>
        )}
      </div>
    );
  }
}

Tabs.propTypes = {
  tabsConfig: PropTypes.array.isRequired,
  defaultActiveIndex: PropTypes.number,
  onTabChange: PropTypes.func.isRequired,
  callTabChangeOnLoad: PropTypes.bool,
  direction: PropTypes.string,
};

export default Tabs;
