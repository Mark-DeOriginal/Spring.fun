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
    <div className="seed-phrase-box relative border border-[#bfbbcb] dark:border-springBlueLight-400 rounded-2xl p-3 text-left overflow-hidden">
      <button
        onClick={() => handleShowSeedPhrase()}
        className="seed-phrase-copy-btn absolute bottom-3 right-4 z-[1] active:scale-[0.95] flex items-center justify-center fill-springBlueLight-400 dark:fill-springBluishWhite"
      >
        {showSeedPhrase ? (
          <HidePasswordIcon className={`w-7 h-auto`} />
        ) : (
          <ShowPasswordIcon className={`w-7 h-auto`} />
        )}
      </button>
      <div
        className={`seed-phrase-veil dark:bg-springBlueLight-400/25 bg-[#d3d1d865] ${
          !showSeedPhrase ? "backdrop-blur-[3px]" : ""
        } absolute top-0 left-0 right-0 bottom-0 duration-300`}
      ></div>
      <p className="seed-phrase text-sm">{getSeedPhrase()}</p>
    </div>
  );
};

export default SeedPhraseBox;
