import VBlock from "../../VBlock";
import TextInput from "../../TextInput";
import { useEffect, useState } from "react";
import getUserInfo from "../../../helpers/getUserInfo";
import closeTopMenu from "../../../actions/closeTopMenu";
import Button from "../../Button";

export const SetUsername = () => {
  const [username, setUsername] = useState(getUserInfo("walletName") as string);
  const [disableSubmit, setDisableSubmit] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    setDisableSubmit(username.length < 3 ? true : false);
  }, [username]);

  const updateUserName = () => {
    return new Promise((resolve, _) => {
      setTimeout(resolve, 3000);
    });
  };

  const handleSetUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    updateUserName().then(() => {
      closeTopMenu();
    });
  };
  return (
    <section className="set-username-section">
      <div className="header">
        <h1 className="text-xl tablet-sm:text-2xl font-extrabold tracking-tight mb-4">
          Set Username
        </h1>
      </div>

      <div className="body font-medium">
        <p className="font-bold">Provide your preferred username.</p>
        <VBlock />
        <form
          onSubmit={handleSetUsernameSubmit}
          className="flex flex-col gap-2"
        >
          <TextInput
            label="Username"
            value={username}
            onChange={handleUsernameChange}
          />

          <Button
            className="btn-secondary"
            onClick={(e) => handleSetUsernameSubmit(e)}
            buttonText="Confirm Username"
            disabled={disableSubmit ? true : false}
            isLoading={isLoading}
          />
        </form>
        <VBlock quantity={2} />
      </div>
    </section>
  );
};

export default SetUsername;
