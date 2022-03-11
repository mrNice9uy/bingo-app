import React from "react";
import NumberItem from "../../Number/NumberItem";
import classes from './FirstField.module.css'

const FirstField = (props) => {
    const {
        numbers,
        field,
        firstArr,
        setFirstArr,
        background,
        setBackground
    } = props;

    return <div>
        <div className={classes.text}>Поле 1<span>Отметьте 8 чисел</span></div>
        <div id={field} className={classes.numbersBlock}>{numbers.map( (item, key) => (
            <NumberItem key={key} item={item} array={firstArr} setArray={setFirstArr} field={field} background={background} setBackground={setBackground} />
        ))}</div>
    </div>
}

export default FirstField
