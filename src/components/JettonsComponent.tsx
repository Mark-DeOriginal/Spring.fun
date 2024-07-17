import React from "react";
import "../styles/jetton-component.css";
import insertDelimiters from "../helpers/insertDelimiters";
import { useNavigate } from "react-router-dom";
import { UIState } from "../redux-states/uiSlice";

interface JettonsComponentProps {
  jettons: UIState["userJettons"];
  category: string;
}

type Jetton = UIState["userJettons"][number];

interface JettonProps {
  jetton: Jetton;
}

const UserJetton: React.FC<JettonProps> = ({ jetton }) => {
  const navigate = useNavigate();

  const goToJettonPage = (jettonAddress: string) => {
    navigate(`/j/${jettonAddress}`);
  };
  return (
    <button
      onClick={() => goToJettonPage(jetton.jettonAddress)}
      className="jetton"
    >
      <div className="info">
        <img src={jetton.jettonLogo} className="image" />
        <div className="name-and-qty">
          <h3>{jetton.jettonName}</h3>
          <p className="text-TxtAccentShyLight dark:text-TxtAccentShyDark">
            {insertDelimiters(jetton.jettonAmount)} {jetton.jettonTicker}
          </p>
        </div>
      </div>
      <div className="val-perf text-right">
        <h4 className="val">${insertDelimiters(jetton.jettonValue)}</h4>
        <p
          className={`perf ${
            jetton.jettonPerformance > 0
              ? `in-profit`
              : jetton.jettonPerformance < 0
              ? `in-loss`
              : "text-TxtAccentShyLight dark:text-TxtAccentShyDark"
          }`}
        >
          {jetton.jettonPerformance > 0
            ? `+${jetton.jettonPerformance}`
            : jetton.jettonPerformance < 0
            ? `${jetton.jettonPerformance}`
            : jetton.jettonPerformance == 0
            ? "0.00"
            : jetton.jettonPerformance}
          %
        </p>
      </div>
    </button>
  );
};

const JettonsComponent: React.FC<JettonsComponentProps> = ({
  jettons,
  category,
}) => {
  const filteredJettons = jettons.filter(
    (jetton) => category === "all" || jetton.jettonCategory === category
  );

  return filteredJettons.map((jetton, index) => (
    <UserJetton jetton={jetton} key={index} />
  ));
};

export default JettonsComponent;
