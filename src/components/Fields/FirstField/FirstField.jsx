import React from "react";
import NumberItem from "../../Number/NumberItem";
import classes from './FirstField.module.css'

const FirstField = () => {
    const MIN = 1;
    const MAX = 90;
    const MAX_VALUES = 19;
    let numbers = [];

    const getRandomNumbers = (min, max) => {
        for (let i = 0; i < MAX_VALUES; i++) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);
            numbers.push(rand);            
        }
        return numbers;  
    }

    //numbers.push(getRandomNumbers(MIN, MAX));
    numbers = getRandomNumbers(MIN, MAX);
    console.log(numbers)
    return <div>
        <div className={classes.text}>Поле 1<span>Отметьте 8 чисел</span></div>
        <div className={classes.numbersBlock}>{numbers.map( (item, key) => (
            <NumberItem key={key} item={item} />
        ))}</div>
    </div>
}

export default FirstField