import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux-states/store";
import { setTheme } from "../redux-states/uiSlice";
import { useEffect } from "react";
import applyTheme from "../helpers/applyTheme";
import { DarkModeSwitch } from "./DarkModeSwitch";

export default function DarkModeToggle() {
  const dispatch: AppDispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.ui.theme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <>
      <DarkModeSwitch
        checked={theme === "light" ? true : false}
        onChange={toggleTheme}
        size={30}
        sunColor="#bcb1dd"
        moonColor="#88809e"
      />
    </>
  );
}
