import { NavLink } from "react-router-dom";

export default function Breadcrumb(props) {
  const { trails, onTrailsChange } = props;

  const handleClick = (clickedIndex) => {
    if (clickedIndex < trails.length - 1) {
      onTrailsChange(trails.filter((trail, index) => index <= clickedIndex));
    }
  };

  return (
    <div className="breadcrumb">
      {trails &&
        trails.map((trail, index) => (
          <NavLink
            key={index}
            to={trail.path}
            onClick={() => handleClick(index)}
          >
            {trail.label}
          </NavLink>
        ))}
    </div>
  );
}
