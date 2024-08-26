import { useRoutes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Jettons from "../pages/JettonsPage";
import Jetton from "../pages/JettonPage";
import NotFound from "../pages/NotFoundPage";
import UserProfile from "../pages/UserProfilePage";
import Home from "../pages/HomePage";
import WelcomePage from "../pages/WelcomePage";

const pageVariants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: 30,
  },
};

const pageTransition = {
  type: "tween",
  duration: 0.3,
};

export default function Routes() {
  const routes = useRoutes([
    { path: "/", element: <Jettons /> },
    { path: "/welcome", element: <WelcomePage /> },
    { path: "/home", element: <Home /> },
    { path: "/jettons", element: <Jettons /> },
    { path: "/j/:jettonContractAddress", element: <Jetton /> },
    { path: "/profile/:walletAddress", element: <UserProfile /> },
    { path: "*", element: <NotFound /> },
  ]);
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {routes}
      </motion.div>
    </AnimatePresence>
  );
}
