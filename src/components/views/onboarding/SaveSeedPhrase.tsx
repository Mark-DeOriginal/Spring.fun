import { useState } from "react";
import { CopyIcon } from "../../../assets/icons";
import SeedPhraseBox from "../../SeedPhraseBox";
import VBlock from "../../VBlock";
import copyToClipboard from "../../../helpers/copyToClipboard";
import getSeedPhrase from "../../../helpers/getSeedPhrase";
import sleep from "../../../helpers/sleep";
import closeTopMenu from "../../../actions/closeTopMenu";
import { useNavigate } from "react-router-dom";
import getUserInfo from "../../../helpers/getUserInfo";
import Button from "../../Button";

export const SaveSeedPhrase = () => {
  const [showIsCopied, setShowIsCopied] = useState(false);

  const handleSeedPhraseCopy = () => {
    copyToClipboard(getSeedPhrase());
    setShowIsCopied(true);
    sleep(3000).then(() => setShowIsCopied(false));
  };

  const navigate = useNavigate();

  const goToProfile = () => {
    closeTopMenu();
    navigate(`/profile/${getUserInfo("walletName")}`);
  };

  return (
    <section className="save-seed-phrase-section">
      <div className="header">
        <h1 className="text-xl tablet-sm:text-2xl font-extrabold tracking-tight mb-4 text-springBlueLight-400 dark:text-offWhite">
          Save Seed Phrase
        </h1>
      </div>

      <div className="body text-springBlueLight-400 dark:text-springBlueLight-100 font-medium">
        <p className="font-bold">
          We deployed a new wallet for you, which would be used to manage your
          trades.
        </p>
        <VBlock />
        <p>
          Take a moment to copy and save your Seed Phrase in a secure location.{" "}
        </p>
        <VBlock />
        <SeedPhraseBox />
        <VBlock quantity={2} />
        <div className="button-group grid grid-cols-2 gap-2">
          <Button
            onClick={() => handleSeedPhraseCopy()}
            className="btn-primary"
          >
            <CopyIcon className={`fill-current`} />
            {showIsCopied ? "Copied" : "Copy"}
          </Button>
          <Button
            onClick={() => goToProfile()}
            buttonText="I've Saved it!"
            className="btn-secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default SaveSeedPhrase;
