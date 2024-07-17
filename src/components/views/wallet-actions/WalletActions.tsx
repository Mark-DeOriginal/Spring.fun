import VBlock from "../../VBlock";
import "../../../styles/wallet-actions.css";
import {
  DisconnectIcon,
  SeedPhraseIcon,
  SetPasswordIcon,
  SetUsernameIcon,
} from "../../../assets/icons";
import openTopMenu from "../../../actions/openTopMenu";

export const WalletActions = () => {
  const goToSetUsername = () => {
    openTopMenu("set_username");
  };

  return (
    <section className="wallet-actions-section">
      <div className="header">
        <h1 className="text-xl tablet-sm:text-2xl font-extrabold tracking-tight mb-4 text-springBlueLight-400 dark:text-offWhite">
          Wallet Actions
        </h1>
      </div>

      <div className="body text-springBlueLight-400 dark:text-springBlueLight-100 font-medium">
        <p className="font-bold">Take an action on your wallet</p>
        <VBlock />
        <div className="wallet-action-btns btn-group-secondary btn-group-active-scale-md">
          <button onClick={() => goToSetUsername()}>
            <SetUsernameIcon /> Set Username
          </button>
          <button>
            <SetPasswordIcon /> Set Password
          </button>
          <button>
            <SeedPhraseIcon /> View Seed Phrase
          </button>
          <button>
            <DisconnectIcon /> Disconnect
          </button>
        </div>
        <VBlock quantity={2} />
      </div>
    </section>
  );
};

export default WalletActions;
