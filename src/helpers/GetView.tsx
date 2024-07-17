import React from "react";
import UserWelcome from "../components/views/onboarding/UserWelcome";
import SaveSeedPhrase from "../components/views/onboarding/SaveSeedPhrase";
import WalletActions from "../components/views/wallet-actions/WalletActions";
import SetUsername from "../components/views/wallet-actions/SetUsername";

export interface GetViewProps {
  viewName:
    | "user_welcome"
    | "wallet_actions"
    | "set_username"
    | "save_seed_phrase"
    | string;
}

const GetView: React.FC<GetViewProps> = ({ viewName }) => {
  if (viewName === "user_welcome") {
    return <UserWelcome />;
  } else if (viewName === "save_seed_phrase") {
    return <SaveSeedPhrase />;
  } else if (viewName === "wallet_actions") {
    return <WalletActions />;
  } else if (viewName === "set_username") {
    return <SetUsername />;
  }

  // If none matches,
  return;
};

export default GetView;
