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
        <div className="button-group flex justify-center gap-2">
          <button
            onClick={() => handleSeedPhraseCopy()}
            className="button button-colored button-filled px-4 flex items-center gap-3"
          >
            <CopyIcon
              className={`fill-offWhite dark:fill-springBlueLight-400`}
            />
            {showIsCopied ? "Copied" : "Copy"}
          </button>
          <button
            onClick={() => goToProfile()}
            className="button button-colored button-outlined px-6"
          >
            I've Saved it!
          </button>
        </div>
      </div>
    </section>
  );
};

export default SaveSeedPhrase;
