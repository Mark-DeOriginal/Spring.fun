import React from "react";
import UserProfile from "./views/UserProfile";
import ViewNotFound from "./views/ViewNotFound";

interface GetViewProps {
  viewName: string;
}

const GetView: React.FC<GetViewProps> = ({ viewName }) => {
  if (viewName === "USER_PROFILE") {
    return <UserProfile />;
  }

  // If none matches,
  return <ViewNotFound />;
};

export default GetView;
