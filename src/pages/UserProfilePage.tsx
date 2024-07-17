import "../styles/user-profile.css";
import JettonsComponent from "../components/JettonsComponent";
import insertDelimiters from "../helpers/insertDelimiters";
import {
  CreateIcon,
  PlusIcon,
  SendIcon,
  SwapIcon,
  ThunderIcon,
} from "../assets/icons";
import { useSelector } from "react-redux";
import { RootState, store } from "../redux-states/store";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { setDrawerState, setModalState } from "../redux-states/uiSlice";

interface FilterProps {
  values: "all" | "owned" | "created";
}
export default function UserProfile() {
  const userJettons = useSelector((state: RootState) => state.ui.userJettons);

  const [jettonCategory, setJettonCategory] =
    useState<FilterProps["values"]>("all");

  const filterJettons = (filterVal: FilterProps["values"]) => {
    setJettonCategory(() => filterVal);
  };

  const amountIncrease = 250.06;
  const percentageIncrease = 150.03;

  const jettonsAnimVariants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: 10,
    },
  };

  const jettonsTransition = {
    type: "tween",
    duration: 0.3,
  };

  const openWalletActionsMenu = () => {
    const browserWidth = window.innerWidth;

    const viewName = "wallet_actions";

    if (browserWidth >= 480) {
      store.dispatch(
        setModalState({
          open: true,
          viewName: viewName,
          textAlign: "text-center",
          dialogStyles: "w-[400px]",
          backdropCanClose: true,
        })
      );
    } else {
      store.dispatch(
        setDrawerState({
          open: true,
          viewName: viewName,
          textAlign: "text-center",
          backdropCanClose: true,
        })
      );
    }
  };

  return (
    <div className="user-profile-section">
      <div className="container">
        <div className="header">
          {/* Wallet Balance */}
          <div className="wallet space-y-1">
            <h1 className="balance">$530.06</h1>
            <div className="performance">
              <span
                className={`amount-increase ${
                  amountIncrease > -1 ? `in-profit` : `in-loss`
                }`}
              >
                {amountIncrease > -1
                  ? `+$${insertDelimiters(amountIncrease)}`
                  : `-$${insertDelimiters(Math.abs(amountIncrease))}`}
              </span>
              <span
                className={`percentage-increase ${
                  percentageIncrease > -1 ? `in-profit` : `in-loss`
                }`}
              >
                {percentageIncrease > -1
                  ? `+$${insertDelimiters(percentageIncrease)}`
                  : `-$${insertDelimiters(Math.abs(percentageIncrease))}`}
                %
              </span>
            </div>
          </div>
          {/* Wallet Address */}
          <div className="user-name">
            <button
              onClick={() => openWalletActionsMenu()}
              className="btn-secondary btn-active-scale-md"
            >
              <ThunderIcon /> Sweo24...kjadsf
            </button>
          </div>
          <div className="btn-group-secondary btn-group-active-scale-md action-btns">
            <button>
              <PlusIcon /> Receive
            </button>
            <button>
              <SendIcon /> Send
            </button>
            <button>
              <SwapIcon /> Swap
            </button>
            <button>
              <CreateIcon /> Create
            </button>
          </div>
        </div>
        <div className="body">
          <div className="jetton-filters btn-group-accent btn-group-active-scale-md">
            <button
              className={jettonCategory === "all" ? "active" : ""}
              onClick={() => filterJettons("all")}
            >
              All
            </button>
            <button
              className={jettonCategory === "owned" ? "active" : ""}
              onClick={() => filterJettons("owned")}
            >
              Owned
            </button>
            <button
              className={jettonCategory === "created" ? "active" : ""}
              onClick={() => filterJettons("created")}
            >
              Created
            </button>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={jettonCategory}
              initial="initial"
              animate="in"
              exit="out"
              variants={jettonsAnimVariants}
              transition={jettonsTransition}
              className="jettons btn-group-accent btn-group-active-scale-sm"
            >
              <JettonsComponent
                jettons={userJettons}
                category={jettonCategory}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
