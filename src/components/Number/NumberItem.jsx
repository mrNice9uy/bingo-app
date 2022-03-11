import React, { useState } from "react";
import { selectNumber } from '../../utils/utils';
import { MAX_SELECTED_VALUES_FIRST, MAX_SELECTED_VALUES_SECOND} from '../../constants/constants';
import classes from './NumberItem.module.css';

const NumberItem = (props) => {
    const {
        item,
        array,
        setArray,
        field,
    } = props;

    const activeClass = classes.active;
    const itemClass = classes.item;

    const [background, setBackground] = useState(classes.item);

    const selectNumberFromFlds = (number, array) => {
        debugger;
        switch(field) {
            case 1:
                selectNumber(number, array, background, setBackground, setArray, activeClass, itemClass, field, MAX_SELECTED_VALUES_FIRST);
            break;
            case 2:
                selectNumber(number, array, background, setBackground, setArray, activeClass, itemClass, field, MAX_SELECTED_VALUES_SECOND);
            break;
            default:
                alert('Выбери числа');
        }        
    }
    return <button className={background} onClick={() => selectNumberFromFlds(item, array)} >{item}</button>
}

export default NumberItem
