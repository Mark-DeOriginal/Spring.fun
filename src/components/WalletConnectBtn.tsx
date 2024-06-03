import { WalletIcon } from "../assets/icons";
import OpenMenuBtn from "./OpenMenuBtn";

export default function WalletConnectBtn({
  isConnected = true,
}: {
  isConnected: boolean;
}) {
  return isConnected ? (
    <>
      <OpenMenuBtn />
    </>
  ) : (
    <>
      <button className="wallet-connect-btn flex items-center gap-2 active:scale-[0.95]">
        <WalletIcon
          className={`w-5 h-auto fill-springBlue dark:fill-springBluishWhite`}
        />
        <span className="max-tablet-md:hidden">Connect wallet</span>
        <span className="tablet-md:hidden">Connect</span>
      </button>
    </>
  );
}
