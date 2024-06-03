import "./App.css";
import Layout from "./components/Layout";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
