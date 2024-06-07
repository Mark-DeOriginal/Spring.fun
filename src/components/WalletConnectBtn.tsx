import { WalletIcon } from "../assets/icons";
import OpenProfileBtn from "./OpenProfileBtn";

export default function WalletConnectBtn({
  isConnected,
}: {
  isConnected: boolean;
}) {
  return isConnected ? (
    <>
      <OpenProfileBtn />
    </>
  ) : (
    <>
      <button className="wallet-connect-btn flex items-center gap-2 active:scale-[0.95]">
        <WalletIcon
          className={`w-5 h-auto fill-springBlueLight-400 dark:fill-springBluishWhite`}
        />
        <span className="max-tablet-md:hidden">Connect wallet</span>
        <span className="tablet-md:hidden">Connect</span>
      </button>
    </>
  );
}
