import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import { TelegramIcon, TwitterIcon } from "../assets/icons/index";
import WalletConnectBtn from "./WalletConnectBtn";
import { socials } from "../assets/social-links";

export default function Header() {
  return (
    <header className="py-6 page-px">
      <nav className="flex justify-between items-center relative">
        <div className="left-wing ">
          <Logo type="logo" isLink={true} />
        </div>
        <div className="right-wing flex gap-4 small-tablet:gap-8">
          <div className="socials flex gap-2 items-center">
            <a
              href={socials.twitter}
              className="nav-social-link"
              target="_blank"
            >
              <TwitterIcon className={`nav-social-icon`} />
            </a>
            <a
              href={socials.telegram}
              className="nav-social-link"
              target="_blank"
            >
              <TelegramIcon className={`nav-social-icon`} />
            </a>
          </div>
          <div className="controls flex items-center gap-4">
            <DarkModeToggle />
            <WalletConnectBtn isConnected={true} />
          </div>
        </div>
      </nav>
    </header>
  );
}
