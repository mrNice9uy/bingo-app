import React from "react";
import {
  getRandomNumbers,
  magicSet,
  removeActiveClass,
} from "../../utils/utils";
import {
  MAX_SELECTED_VALUES_FIRST,
  MAX_SELECTED_VALUES_SECOND,
  MAX_VALUES,
  MAX_VALUES_SCND_FLD,
  MIN,
} from "../../constants/constants";
import classes from "./Header.module.css";
import numberClasses from "../Number/NumberItem.module.css";

const Header = (props) => {
  const {
    ticketNum,
    firstNumbers,
    secondNumbers,
    firstArr,
    setFirstArr,
    secondArr,
    setSecondArr,
  } = props;

  const setNumbers = () => {
    const active = numberClasses.active;
    const item = numberClasses.item;
    let firstIds = [];
    let secondIds = [];

    getRandomNumbers(MAX_SELECTED_VALUES_FIRST, MIN, MAX_VALUES).forEach(
      (item) => {
        firstIds = [...firstIds, item - 1];
      }
    );
    getRandomNumbers(
      MAX_SELECTED_VALUES_SECOND,
      MIN,
      MAX_VALUES_SCND_FLD
    ).forEach((item) => {
      secondIds = [...secondIds, item - 1];
    });

    const firstFld = document.getElementById(1).childNodes;
    const secondFld = document.getElementById(2).childNodes;

    removeActiveClass(firstFld, active, item);
    removeActiveClass(secondFld, active, item);

    const newFirstArr = magicSet(firstFld, firstIds, active);
    setFirstArr(newFirstArr);
    const newSecondArr = magicSet(secondFld, secondIds, active);
    setSecondArr(newSecondArr);
  };
  return (
    <header className={classes.header}>
      <p>Билет {`${ticketNum}`}</p>
      <button>
        <img
          src="https://img.icons8.com/glyph-neue/64/000000/fantasy.png"
          alt="magic"
          onClick={() =>
            setNumbers(
              firstArr,
              setFirstArr,
              secondArr,
              setSecondArr,
              firstNumbers,
              secondNumbers
            )
          }
        />
      </button>
    </header>
  );
};

export default Header;
