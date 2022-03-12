import React from "react";
import {
  MAX_SELECTED_VALUES_FIRST,
  MAX_SELECTED_VALUES_SECOND,
  REQUEST_URL,
} from "../../constants/constants";
import { compare, sendData } from "../../utils/utils";
import classes from "./ShowResultBtn.module.css";

const ShowResult = (props) => {
  const { firstArr, secondArr, firstWinnerArr, secondWinnerArr } = props;
  let count = 0;

  const showResult = () => {
    if (
      firstArr.length < MAX_SELECTED_VALUES_FIRST ||
      secondArr.length < MAX_SELECTED_VALUES_SECOND
    ) {
      alert("Отметьте числа!");
      return;
    }

    const filter1 = firstArr.filter((i) => firstWinnerArr.includes(i));
    const filter2 = secondArr.filter((i) => secondWinnerArr.includes(i));
    const isTicketWon = compare(filter1, filter2);

    const body = {
      selectedNumber: { firstField: firstArr, secondField: secondArr },
      isTicketWon: isTicketWon,
    };

    let repeatRequest = setInterval(function () {
      sendData("POST", REQUEST_URL, body)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      count++;
      if (count > 2) {
        alert("Что-то пошло не так");
        clearInterval(repeatRequest);
        count = 0;
      }
    }, 2000);

    return isTicketWon ? alert("Поздравляю!") : alert("В другой раз повезет");
  };

  return (
    <div className={classes.resultBtn}>
      <button className={classes.showResult} onClick={() => showResult()}>
        Показать результат
      </button>
    </div>
  );
};

export default ShowResult;
