import openTopMenu from "../../../actions/openTopMenu";
import VBlock from "../../VBlock";

export const UserWelcome = () => {
  const goToGetStarted = () => {
    openTopMenu("get_started");
  };

  return (
    <section className="user-welcome-section">
      <div className="header">
        <h1 className="text-xl tablet-sm:text-2xl font-extrabold tracking-tight mb-4 text-springBlueLight-400 dark:text-offWhite">
          Welcome to Spring
        </h1>
      </div>

      <div className="body text-springBlueLight-400 dark:text-springBlueLight-100 font-medium">
        <p className="font-bold">
          Spring is a Hybrid Decentralized Exchange (HDEX) on the TON
          Blockchain.
        </p>
        <VBlock />
        <p>
          Spring allows you execute trades almost instantly without blockchain
          delay.
        </p>
        <p>
          Perform swaps, send and receive tokens/jettons easily and seamlessly.
        </p>
        <p>Trade without fear of getting rugged.</p>
        <p>
          Create TON jettons that are instantly tradeable without need for
          initial liquidity.
        </p>
        <VBlock quantity={2} />
        <button onClick={goToGetStarted} className="button button-filled px-14">
          Get started
        </button>
      </div>
    </section>
  );
};

export default UserWelcome;
