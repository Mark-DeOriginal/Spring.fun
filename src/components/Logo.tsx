import { useSelector } from "react-redux";
import {
  LogoDarkMode,
  LogoIconDarkMode,
  LogoIconLightMode,
  LogoLightMode,
} from "../assets/spring-logo";
import { RootState } from "../redux-states/store";
import { classNames } from "../helpers/classNames";

interface LogoProps {
  type: "icon" | "logo";
  isLink: boolean;
  mediaResponsive?: boolean;
}

export default function Logo({
  type,
  isLink,
  mediaResponsive = true,
}: LogoProps) {
  const theme = useSelector((state: RootState) => state.ui.theme);

  const content =
    type === "icon" ? (
      theme === "light" ? (
        <LogoIconLightMode className={`h-9 w-auto`} />
      ) : (
        <LogoIconDarkMode className={`h-9 w-auto`} />
      )
    ) : (
      <>
        {theme === "light" ? (
          <LogoLightMode
            className={classNames(
              "h-9 w-auto",
              mediaResponsive ? "max-tablet-lg:hidden" : ""
            )}
          />
        ) : (
          <LogoDarkMode
            className={classNames(
              "h-9 w-auto",
              mediaResponsive ? "max-tablet-lg:hidden" : ""
            )}
          />
        )}
        {theme === "light" ? (
          <LogoIconLightMode
            className={classNames(
              "h-9 w-auto",
              mediaResponsive ? "tablet-lg:hidden" : "hidden"
            )}
          />
        ) : (
          <LogoIconDarkMode
            className={classNames(
              "h-9 w-auto",
              mediaResponsive ? "tablet-lg:hidden" : "hidden"
            )}
          />
        )}
      </>
    );

  return isLink ? <a href="/">{content}</a> : <>{content}</>;
}
