import { useLocation, useNavigate } from "react-router-dom";

export default function useSetTopMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const setTopMenu = (viewName: string, replace: boolean) => {
    const newUrl = new URLSearchParams(location.search);
    newUrl.set("top-menu", "");
    newUrl.set("view", viewName);
    navigate(`${location.pathname}?${newUrl.toString()}`, {
      replace: replace || false,
    });
  };

  return setTopMenu;
}
