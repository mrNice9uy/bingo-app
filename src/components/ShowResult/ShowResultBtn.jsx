import React from "react";
import { MAX_SELECTED_VALUES_FIRST, MAX_SELECTED_VALUES_SECOND } from '../../constants/constants'
import { compare} from '../../utils/utils';
import classes from './ShowResultBtn.module.css';

const ShowResult = (props) => {
    const {
        firstArr,
        secondArr,
        firstWinnerArr,
        secondWinnerArr,
    } = props;

    const showResult = () => {
        console.log('set',firstArr);
        console.log('winner',secondArr);
        if (firstArr.length < MAX_SELECTED_VALUES_FIRST || secondArr.length < MAX_SELECTED_VALUES_SECOND) {
            alert('Отметьте числа!');
            return
        }
        console.log('winner',firstWinnerArr);
        console.log('winner',secondWinnerArr);
        debugger;
        const filter1 = firstArr.filter(i => firstWinnerArr.includes(i));
        const filter2 = secondArr.filter(i => secondWinnerArr.includes(i));
        return compare(filter1, filter2) ? alert('Поздравляю!') : alert('В другой раз повезет')    
      };

    return (
        <div className={classes.resultBtn}>
            <button className={classes.showResult} onClick={() => showResult()}>
                Показать результат
            </button>
        </div>
    )
}

export default ShowResult
