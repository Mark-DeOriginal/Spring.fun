import { useState } from "react";
import { HidePasswordIcon, ShowPasswordIcon } from "../assets/icons";
import getSeedPhrase from "../helpers/getSeedPhrase";

const SeedPhraseBox = () => {
  const [showSeedPhrase, setShowSeedPhrase] = useState(false);

  const handleShowSeedPhrase = () => {
    setShowSeedPhrase((state) => !state);
    setTimeout(() => {
      setShowSeedPhrase(false);
    }, 3000);
  };
  return (
    <div className="seed-phrase-box relative p-3 text-left overflow-hidden  border border-BorderLight dark:border-BorderDark rounded-2xl">
      <button
        onClick={() => handleShowSeedPhrase()}
        className="seed-phrase-copy-btn h-7 absolute bottom-3 right-4 z-[1] active:scale-[0.95] flex items-center justify-center fill-TxtAccentLight dark:fill-TxtAccentDark"
      >
        {showSeedPhrase ? (
          <HidePasswordIcon className={`w-6 h-auto`} />
        ) : (
          <ShowPasswordIcon className={`w-6 h-auto`} />
        )}
      </button>
      <div
        className={`seed-phrase-veil bg-BgPrimaryLight dark:bg-BgPrimaryDark ${
          !showSeedPhrase ? "opacity-[0.95] dark:opacity-[0.98]" : "opacity-0"
        } absolute top-0 left-0 right-0 bottom-0 duration-300`}
      ></div>
      <p className="seed-phrase text-sm">{getSeedPhrase()}</p>
    </div>
  );
};

export default SeedPhraseBox;
