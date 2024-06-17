import { store } from "../../redux-states/store";
import { setDrawerHeight as resizeTo } from "../../redux-states/uiSlice";
import VBlock from "../VBlock";

export const UserWelcome = () => {
  const resizeDrawer = () => {
    store.dispatch(resizeTo(600));
  };

  return (
    <section className="user-welcome-section">
      <div className="header">
        <h1 className="text-xl tablet-sm:text-2xl font-extrabold tracking-tight mb-4 text-center text-springBlueLight-400 dark:text-offWhite">
          Welcome to Spring
        </h1>
      </div>

      <div className="body text-springBlueLight-400 dark:text-springBlueLight-100 text-center font-medium">
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
        <button
          onClick={resizeDrawer}
          className="text-offWhite bg-springBlueLight-400 dark:bg-springOrange dark:text-springBlueLight-400 w-[80%] p-3 rounded-full active:scale-[0.95]"
        >
          Get started
        </button>
      </div>
    </section>
  );
};

export default UserWelcome;
