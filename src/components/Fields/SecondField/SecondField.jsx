import React from "react";
import NumberItem from "../../Number/NumberItem";
import classes from './SecondField.module.css'

const SecondField = (props) => {
    const {
        numbers,
        secondArr,
        setSecondArr,
        field,
    } = props;

    return <div>
        <div className={classes.text}>Поле 2<span>Отметьте 1 число</span></div>
        <div id={field} className={classes.numbersBlock}>{numbers.map( (item, key) => (
            <NumberItem key={key} item={item} array={secondArr} setArray={setSecondArr} field={field} />
        ))}</div>
    </div>
}

export default SecondField
