import closeTopMenu from "../../../actions/closeTopMenu";
import VBlock from "../../VBlock";

export const GetStarted = () => {
  const goToProfile = () => {
    closeTopMenu();
  };

  return (
    <section className="get-started-section pb-6">
      <div className="header">
        <h1 className="text-xl tablet-sm:text-2xl font-extrabold tracking-tight mb-4 text-springBlueLight-400 dark:text-offWhite">
          Get Started
        </h1>
      </div>

      <div className="body text-springBlueLight-400 dark:text-springBlueLight-100 font-medium">
        <p className="font-bold">
          To ensure you have total control of your funds, save your seed phrase
        </p>
        <VBlock />
        <p>
          Spring allows you execute trades almost instantly without blockchain
          delay.
        </p>

        <VBlock quantity={2} />
        <button
          onClick={goToProfile}
          className="text-offWhite bg-springBlueLight-400 dark:bg-springOrange dark:text-springBlueLight-400 w-[80%] p-3 rounded-full active:scale-[0.95]"
        >
          Get started
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
