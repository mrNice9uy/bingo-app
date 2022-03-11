import React from "react";
import { getRandomNumbers } from "../../utils/utils";
import { MAX_SELECTED_VALUES_FIRST, MAX_SELECTED_VALUES_SECOND, MIN, MAX, } from "../../constants/constants";
import classes from './Header.module.css'
import numberClasses from '../Number/NumberItem.module.css';

const Header = (props) => {
    const {
        ticketNum,
        firstNumbers,
        secondNumbers,
        firstArr,
        setFirstArr,
        setFirstNumbers,
        secondArr,
        setSecondArr,
        setSecondNumbers
    } = props

    const setNumbers = () => {
        let firstIds = [];
        let secondIds = [];
        getRandomNumbers(MAX_SELECTED_VALUES_FIRST, 1, 19).forEach(item => {
            firstIds = [...firstIds, item-1];
        })
        getRandomNumbers(MAX_SELECTED_VALUES_SECOND, 1, 2).forEach(item => {
            secondIds = [...secondIds, item-1];
        })
        console.log(firstIds)
        console.log(secondIds)
        const item = numberClasses.item;
        debugger;
        const numbers = document.getElementsByClassName(item);
        const firstFld = document.getElementById(1)
        const secondFld = document.getElementById(2)
        secondFld.childNodes.forEach(el => console.log(el.cl))
        //secondFld.childNodes.forEach(el => {return console.log(el.classList)})
        console.log(numbers);
        console.log(firstFld);
        console.log(secondFld);

        //setFirstArr([]);
        //setFirstNumbers(getRandomNumbers(MAX_VALUES, MIN, MAX))
        //setSecondArr([]);
        //setSecondNumbers(getRandomNumbers(MAX_VALUES_SCND_FLD, MIN, MAX));
    }
    return <header className={classes.header}>
        <p>Билет {`${ticketNum}`}</p>
        <button>
        <img 
            src="https://img.icons8.com/glyph-neue/64/000000/fantasy.png"
            alt="magic"
            onClick={()=> setNumbers()}
        />
        </button>    
    </header>
}

export default Header
