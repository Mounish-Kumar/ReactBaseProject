import { NavLink } from "react-router-dom";

export default function Breadcrumb(props) {
  const { trails, onNavigate } = props;

  return (
    <>
      {trails && (
        <div className="breadcrumb">
          {trails.map((trail, index) => (
            <NavLink
              key={index}
              to={trail.path}
              onClick={() => onNavigate({ trail, index })}
            >
              {trail.label || trail.path}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
