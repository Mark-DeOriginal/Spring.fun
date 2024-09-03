import { useSelector } from "react-redux";
import Button from "../components/Button";
import Image from "../components/ImageComponent";
import Logo from "../components/Logo";
import FastTrade from "/fast-trade-img.jpg";
import AutoTrade from "/automated-trading-img.png";
import RugImg from "/rug-img.jpg";
import { RootState, store } from "../redux-states/store";
import {
  decrWelcomePageViewIndex,
  incrWelcomePageViewIndex,
} from "../redux-states/uiSlice";
import { AnimatePresence, motion } from "framer-motion";
import "./../styles/welcome-page.css";
import React, { useEffect } from "react";
import preloadImages from "../helpers/preloadImages";

const NextViewButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <Button onClick={onClick} className="btn-primary !px-16">
    Proceed
  </Button>
);

const PreviousViewButton: React.FC<{
  onClick: () => void;
  disabled?: boolean;
}> = ({ onClick, disabled }) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    className="btn-accent w-[50px] flex flex-none items-center justify-center !p-0"
  >
    <span className="caret h-3 w-3 border-l-[3px] border-b-[3px] border-current rotate-45"></span>
  </Button>
);

const ViewTemplate: React.FC<{
  title: string;
  subtitle: string;
  children: React.ReactNode;
  imageUrl: string;
  numOfViews: number;
  activeIndex: number;
}> = ({ title, subtitle, children, imageUrl, numOfViews, activeIndex }) => {
  const viewIndex = useSelector(
    (state: RootState) => state.ui.welcomePageView.viewIndex
  );

  const goToNextView = () => {
    if (viewIndex < views.length - 1) {
      store.dispatch(incrWelcomePageViewIndex());
    }
  };

  const goToPrevView = () => {
    if (viewIndex > 0) {
      store.dispatch(decrWelcomePageViewIndex());
    }
  };
  const viewAnimVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.1,
    },
  };

  const viewTransition = {
    type: "tween",
    duration: 0.2,
  };

  return (
    <div className="container max-w-[400px] mx-auto">
      <div className="upper">
        <div className="flex justify-center">
          <Logo isLink={false} type="logo" mediaResponsive={false} />
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={viewIndex}
            initial="initial"
            animate="in"
            exit="out"
            variants={viewAnimVariants}
            transition={viewTransition}
          >
            <div className="body mt-8 flex flex-col items-center text-center">
              <Image
                src={imageUrl}
                className="w-[200px] h-[200px] rounded-full"
                shouldTransit={false}
              />
              <div className="progressive-view-indicator my-6 flex gap-1">
                {Array.from({ length: numOfViews }).map((_, index) => (
                  <div
                    key={index}
                    className={`indicator ${
                      index === activeIndex ? "active" : ""
                    }`}
                  ></div>
                ))}
              </div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <h2 className="text-base tablet-sm:text-lg font-bold text-TxtSecondaryLight dark:text-TxtSecondaryDark">
                {subtitle}
              </h2>
              <div className="mt-4 text-base tablet-sm:text-lg text-TxtAccentLight dark:text-TxtAccentDark">
                {children}
              </div>
            </div>{" "}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="controls flex justify-center gap-2 mt-6 fixed left-0 right-0 bottom-[5%]">
        <PreviousViewButton
          onClick={goToPrevView}
          disabled={viewIndex < 1 ? true : false}
        />
        <NextViewButton onClick={goToNextView} />
      </div>
    </div>
  );
};

const views = [
  {
    title: "Welcome to Spring",
    subtitle: "The first Hybrid Dex on TON",
    imageUrl: FastTrade,
    content: (
      <>
        <p>
          Now you can execute trades instantly, <br />
          without blockchain delay.
        </p>
      </>
    ),
  },
  {
    title: "Do more with Automation",
    subtitle: "Set limit orders and autobuy actions",
    imageUrl: AutoTrade,
    content: (
      <p>
        Get into or exit trades at your desired entry or exit point without
        hassle.
      </p>
    ),
  },
  {
    title: "Never get Rugged again",
    subtitle: "We filter out tokens not safe to trade",
    imageUrl: RugImg,
    content: (
      <p>
        Now you can trade without fear of getting rugged by scammy devs and
        team.
      </p>
    ),
  },
];

const imageUrls = [FastTrade, AutoTrade, RugImg];

export default function WelcomePage() {
  useEffect(() => {
    preloadImages(imageUrls);
  }, []);

  const viewIndex = useSelector(
    (state: RootState) => state.ui.welcomePageView.viewIndex
  );

  const currentView = views[viewIndex];

  return (
    <section className="welcome-section pt-10 pb-24 page-px">
      {currentView ? (
        <>
          <ViewTemplate
            title={currentView.title}
            subtitle={currentView.subtitle}
            imageUrl={currentView.imageUrl}
            numOfViews={views.length}
            activeIndex={viewIndex}
          >
            {currentView.content}
          </ViewTemplate>
        </>
      ) : (
        <h1>Nothing to see here</h1>
      )}
    </section>
  );
}
