import React from "react";
import {
  MAX_VALUES,
  MAX_VALUES_SCND_FLD,
  MIN,
  MAX,
  MAX_SELECTED_VALUES_FIRST,
  MAX_SELECTED_VALUES_SECOND,
} from "../../constants/constants";
import { getRandomNumbers, removeActiveClass } from "../../utils/utils";
import numberClasses from "../Number/NumberItem.module.css";
import classes from "./ResetBtn.module.css";

const Reset = (props) => {
  const {
    ticketNum,
    setTicketNum,
    setFirstNumbers,
    setSecondNumbers,
    setFirstWinnerArr,
    setSecondWinnerArr,
    setFirstArr,
    setSecondArr,
  } = props;
  const active = numberClasses.active;
  const item = numberClasses.item;

  const newGame = () => {
    const firstFld = document.getElementById(1).childNodes;
    const secondFld = document.getElementById(2).childNodes;

    removeActiveClass(firstFld, active, item);
    removeActiveClass(secondFld, active, item);
    setTicketNum(ticketNum + 1);
    setFirstNumbers(getRandomNumbers(MAX_VALUES, MIN, MAX));
    setSecondNumbers(getRandomNumbers(MAX_VALUES_SCND_FLD, MIN, MAX));
    setFirstWinnerArr(getRandomNumbers(MAX_SELECTED_VALUES_FIRST, MIN, MAX));
    setSecondWinnerArr(getRandomNumbers(MAX_SELECTED_VALUES_SECOND, MIN, MAX));
  };

  const reset = () => {
    const firstFld = document.getElementById(1).childNodes;
    const secondFld = document.getElementById(2).childNodes;

    removeActiveClass(firstFld, active, item);
    removeActiveClass(secondFld, active, item);
    setFirstArr([]);
    setSecondArr([]);
  };

  return (
    <div className={classes.resetBtn}>
      <button className={classes.reset} onClick={() => newGame()}>
        Новая игра
      </button>
      <button className={classes.reset} onClick={() => reset()}>
        Сброс
      </button>
    </div>
  );
};

export default Reset;
