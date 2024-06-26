import React from "react";
import UserWelcome from "../components/views/onboarding/UserWelcome";
import SaveSeedPhrase from "../components/views/onboarding/SaveSeedPhrase";

interface GetViewProps {
  viewName: string;
}

const GetView: React.FC<GetViewProps> = ({ viewName }) => {
  if (viewName === "user_welcome") {
    return <UserWelcome />;
  } else if (viewName === "save_seed_phrase") {
    return <SaveSeedPhrase />;
  }

  // If none matches,
  return;
};

export default GetView;
