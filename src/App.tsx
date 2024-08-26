import "./App.css";
import "./styles/button.css";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import Modal from "./components/Modal";
import Drawer from "./components/Drawer";
import URLStateHandler from "./actions/URLStateHandler";
import { useEffect } from "react";
import applyTheme from "./helpers/applyTheme";
import { useSelector } from "react-redux";
import { RootState } from "./redux-states/store";

function App() {
  const theme = useSelector((state: RootState) => state.ui.theme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <Routes />
        <Modal />
        <Drawer />
        <URLStateHandler />
      </BrowserRouter>
    </>
  );
}

export default App;
