import React, { useEffect, useState } from "react";
import "./App.css";
import FirstField from "./components/Fields/FirstField/FirstField";
import SecondField from "./components/Fields/SecondField/SecondField";
import {
  MAX_VALUES,
  MAX_VALUES_SCND_FLD,
  MIN,
  MAX,
  FLD_NUMBER_1,
  FLD_NUMBER_2,
  MAX_SELECTED_VALUES_FIRST,
  MAX_SELECTED_VALUES_SECOND,
} from "./constants/constants";
import { getRandomNumbers } from "./utils/utils";
import Header from "./components/Header/Header";
import ShowResult from "./components/ShowResult/ShowResultBtn";
import Reset from "./components/Reset/ResetBtn";

const App = () => {
  const [ticketNum, setTicketNum] = useState(1);
  const [firstArr, setFirstArr] = useState([]);
  const [secondArr, setSecondArr] = useState([]);
  const [firstNumbers, setFirstNumbers] = useState(
    getRandomNumbers(MAX_VALUES, MIN, MAX)
  );
  const [secondNumbers, setSecondNumbers] = useState(
    getRandomNumbers(MAX_VALUES_SCND_FLD, MIN, MAX)
  );
  const [firstWinnerArr, setFirstWinnerArr] = useState([]);
  const [secondWinnerArr, setSecondWinnerArr] = useState([]);

  useEffect(() => {
    setFirstWinnerArr(getRandomNumbers(MAX_SELECTED_VALUES_FIRST, MIN, MAX));
    setSecondWinnerArr(getRandomNumbers(MAX_SELECTED_VALUES_SECOND, MIN, MAX));
  }, []);

  //console.log("first", firstArr);
  //console.log("second", secondArr);
  console.log("winner", firstWinnerArr);
  console.log("winner", secondWinnerArr);
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <Header
          ticketNum={ticketNum}
          firstNumbers={firstNumbers}
          secondNumbers={secondNumbers}
          firstArr={firstArr}
          setFirstArr={setFirstArr}
          setFirstNumbers={setFirstNumbers}
          secondArr={secondArr}
          setSecondArr={setSecondArr}
          setSecondNumbers={setSecondNumbers}
        />
        <FirstField
          firstArr={firstArr}
          setFirstArr={setFirstArr}
          numbers={firstNumbers}
          field={FLD_NUMBER_1}
        />
        <SecondField
          secondArr={secondArr}
          setSecondArr={setSecondArr}
          numbers={secondNumbers}
          field={FLD_NUMBER_2}
        />
        <ShowResult
          firstArr={firstArr}
          secondArr={secondArr}
          firstWinnerArr={firstWinnerArr}
          secondWinnerArr={secondWinnerArr}
          maxSelectedFirst={MAX_SELECTED_VALUES_FIRST}
          maxSelectedSecond={MAX_SELECTED_VALUES_SECOND}
        />
        <Reset
          ticketNum={ticketNum}
          setTicketNum={setTicketNum}
          setFirstNumbers={setFirstNumbers}
          setSecondNumbers={setSecondNumbers}
          setFirstWinnerArr={setFirstWinnerArr}
          setSecondWinnerArr={setSecondWinnerArr}
        />
      </div>
    </div>
  );
};

export default App;
