import React from "react";
import { NavLink } from "react-router-dom";

class Breadcrumb extends React.Component {
  render() {
    const trails = [
      { label: "Summa", path: "/employee" },
      { label: "Summa", path: "/employee" },
      { label: "Summa", path: "/employee" },
      { label: "Summa", path: "/employee" },
      { label: "Summa", path: "/employee" },
      { label: "Summa", path: "/employee" },
      { label: "Summa", path: "/employee" },
      { label: "Summa", path: "/employee" },
      { label: "Summa", path: "/employee" },
      { label: "Summa", path: "/employee" },
      { label: "Summa", path: "/employee" },
      { label: "Summa", path: "/employee" },
      { label: "Summa", path: "/employee" },
      { label: "Summa", path: "/employee" },
    ];

    return (
      <div className="breadcrumb">
        {trails &&
          trails.map((trail, i) => (
            <NavLink key={i} to={trail.path}>
              {trail.label}
            </NavLink>
          ))}
      </div>
    );
  }
}

export default Breadcrumb;
