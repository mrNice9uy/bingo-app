export function getRandomNumbers(maxValues, min, max, numbers = []) {
  let uniNumbers = [];
  while (uniNumbers.length !== maxValues) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    numbers.push(rand);
    uniNumbers = [...new Set(numbers)];
  }
  return uniNumbers;
}

export function selectNumber(
  number,
  array,
  background,
  setBackground,
  setArray,
  active,
  item,
  field,
  max
) {
  if (array.length >= max && background !== active) {
    alert(`Для поля ${field} можно выбрать только ${max}`);
    return;
  }
  if (array.includes(number)) {
    const newArr = array.filter((item) => item !== number);
    setArray(newArr);
    setBackground(item);
  } else {
    setArray([...array, number]);
    setBackground(active);
  }
  debugger;
  //event.currentTarget.style.backgroundColor='black'
}

export function compare(filter1, filter2) {
  if (filter1.length >= 4 || (filter1.length >= 3 && filter2.length === 1)) {
    console.log("win");
    return true;
  } else {
    console.log("fail");
    return false;
  }
}
