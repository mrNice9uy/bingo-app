import React from "react";
import classes from './NumberItem.module.css';

const NumberItem = (props) => {
    const selectNumber = (number) => {
        console.log(number);
    }
    return <button className={classes.item} onClick={() => selectNumber(props.item)} >{props.item}</button>
}

export default NumberItem