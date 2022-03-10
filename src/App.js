import React from "react";
import "./App.css";
import FirstField from "./components/Fields/FirstField/FirstField";
import SecondField from "./components/Fields/SecondField/SecondField";
import Header from "./components/Header/Header";

const App = () => {
  const showResult = () => {
    console.log("result");
  };
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <Header />
        <FirstField />
        <SecondField />
        <div className="result-btn">
          <button className="show-result" onClick={() => showResult()}>
            Показать результат
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
