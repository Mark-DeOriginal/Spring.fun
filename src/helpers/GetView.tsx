import React from "react";
import UserProfile from "../components/views/UserProfile";
import UserWelcome from "../components/views/onboarding/UserWelcome";
import GetStarted from "../components/views/onboarding/GetStarted";

interface GetViewProps {
  viewName: string;
}

const GetView: React.FC<GetViewProps> = ({ viewName }) => {
  if (viewName === "user_profile") {
    return <UserProfile />;
  } else if (viewName === "user_welcome") {
    return <UserWelcome />;
  } else if (viewName === "get_started") {
    return <GetStarted />;
  }

  // If none matches,
  return;
};

export default GetView;
