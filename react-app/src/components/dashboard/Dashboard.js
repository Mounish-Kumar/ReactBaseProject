import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { startBreadcrumbTrail } from "../../store/appSlice";

export default function Dashboard(props) {
  const dispatch = useDispatch();
  const location = useLocation();

  const pageTitle = "Dashboard";

  useEffect(() => {
    dispatch(
      startBreadcrumbTrail({ label: pageTitle, path: location.pathname })
    );
  }, []);

  return (
    <div>
      <h2>{pageTitle}</h2>
    </div>
  );
}
