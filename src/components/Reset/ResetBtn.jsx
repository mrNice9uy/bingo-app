import React from "react";
import { MAX_VALUES, MAX_VALUES_SCND_FLD, MIN, MAX, MAX_SELECTED_VALUES_FIRST, MAX_SELECTED_VALUES_SECOND } from '../../constants/constants'
import { getRandomNumbers } from '../../utils/utils';
import numberClasses from '../Number/NumberItem.module.css';
import classes from './ResetBtn.module.css';

const Reset = (props) => {
    const {
        ticketNum,
        setTicketNum,
        setFirstNumbers,
        setSecondNumbers,
        setFirstWinnerArr,
        setSecondWinnerArr,
    } = props;

    const reset = () => {
        const active = numberClasses.active;
        const item = numberClasses.item;
        debugger;
        let numbers = document.getElementsByClassName(active);
        /*console.log(numbers);
        for (let i=0; i<numbers.length; i++) {
            numbers[i].classList.remove(active)
            numbers[i].classList.add(item)
        }*/

        setTicketNum(ticketNum+1);
        setFirstNumbers(getRandomNumbers(MAX_VALUES, MIN, MAX));
        setSecondNumbers(getRandomNumbers(MAX_VALUES_SCND_FLD, MIN, MAX));
        setFirstWinnerArr(getRandomNumbers(MAX_SELECTED_VALUES_FIRST, MIN, MAX));
        setSecondWinnerArr(getRandomNumbers(MAX_SELECTED_VALUES_SECOND, MIN, MAX));
    }

    return (
        <div className={classes.resetBtn}>
            <button className={classes.reset} onClick={() => reset()} type='submit'>
                Новая игра
            </button>
        </div>
    )
}

export default Reset
