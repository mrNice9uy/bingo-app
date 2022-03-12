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
}

export function compare(filter1, filter2) {
  if (filter1.length >= 4 || (filter1.length >= 3 && filter2.length === 1)) {
    return true;
  } else {
    return false;
  }
}

export function removeActiveClass(field, active, item) {
  field.forEach((el) => {
    if (el.classList.contains(active)) {
      el.classList.remove(active);
      el.classList.add(item);
    }
  });
}

export function magicSet(field, ids, active, newArr = []) {
  for (let i = 0; i < field.length; i++) {
    if (ids.includes(i)) {
      field[i].classList.add(active);
      newArr = [...newArr, +field[i].innerHTML];
    }
  }
  return newArr;
}

export async function sendData(method, url, body = null, repeatCount = 0) {
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  });
  if (response.ok) {
    return response.json();
  } else {
    return console.log("Error!");
  }
}
