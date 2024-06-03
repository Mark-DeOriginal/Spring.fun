import { useSelector } from "react-redux";
import {
  LogoDarkMode,
  LogoIconDarkMode,
  LogoIconLightMode,
  LogoLightMode,
} from "../assets/spring-logo";
import { RootState } from "../redux-states/store";

interface LogoProps {
  type: "icon" | "logo";
  isLink: boolean;
}

export default function Logo({ type, isLink }: LogoProps) {
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
          <LogoLightMode className={`h-9 w-auto max-tablet-lg:hidden`} />
        ) : (
          <LogoDarkMode className={`h-9 w-auto max-tablet-lg:hidden`} />
        )}
        {theme === "light" ? (
          <LogoIconLightMode className={`h-9 w-auto tablet-lg:hidden`} />
        ) : (
          <LogoIconDarkMode className={`h-9 w-auto tablet-lg:hidden`} />
        )}
      </>
    );

  return isLink ? <a href="/">{content}</a> : <>{content}</>;
}
