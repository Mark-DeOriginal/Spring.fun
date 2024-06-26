import { useRoutes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Jettons from "../pages/Jettons";
import Jetton from "../pages/Jetton";
import NotFound from "../pages/NotFound";
import UserProfile from "../pages/UserProfile";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  duration: 0.3,
};

export default function Routes() {
  const routes = useRoutes([
    { path: "/", element: <Jettons /> },
    { path: "/user-profile", element: <UserProfile /> },
    { path: "/jettons", element: <Jettons /> },
    { path: "/j/:jettonContractAddress", element: <Jetton /> },
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
