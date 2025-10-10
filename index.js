//Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

const checkNegativeNumber = (num) => {
  return num < 0;
};

//Дана строка. Выведите в консоль длину этой строки.

const stringLength = (string) => {
  return string.length;
};

//Дана строка. Выведите в консоль последний символ строки.

const lastSymbol = (word) => {
  return word[word.length - 1];
};

//Дано число. Проверьте, четное оно или нет.

const isEven = (number) => {
  return number % 2 === 0;
};

//Даны два слова. Проверьте, что первые буквы этих слов совпадают.

const areLastSymbolsEqual = (firstWord, secondWord) => {
  return firstWord[0] === secondWord[0];
};

//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

const getLastSymbol = (word) => {
  if (word[word.length - 1] === "ь") {
    return word[word.length - 2];
  } else return word[word.length - 1];
};

//Дано число. Выведите в консоль первую цифру этого числа.

const firstDigit = (number) => {
  return parseInt(number.toString()[0]);
};

//Дано число. Выведите в консоль последнюю цифру этого числа.

const lastDigit = (number) => {
  return parseInt(number.toString()[number.toString().length - 1]);
};

//Дано число. Выведите количество цифр в этом числе.

const numberOfDigits = (number) => {
  return number.toString().length;
};

//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

const checkFirstDigitsSame = (firstNumber, secondNumber) => {
  return firstNumber.toString()[0] === secondNumber.toString()[0];
};

//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

const preLastSymbol = (string) => {
  if (string.length > 1) {
    return string[string.length - 2];
  }
  return string;
};

//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

const checkNoRemaining = (firstNumber, secondNumber) => {
  return firstNumber % secondNumber === 0;
};

//Выведите в консоль все целые числа от 1 до 100.

const numbersToHundred = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
};

//Выведите в консоль все целые числа от -100 до 0.

const numbersToZero = () => {
  for (let i = -100; i <= 0; i++) {
    console.log(i);
  }
};

//Выведите в консоль все целые числа от 100 до 1.

const numbersToOne = () => {
  for (let i = 100; i >= 1; i = i - 1) {
    console.log(i);
  }
};

//Выведите в консоль все четные числа из промежутка от 1 до 100.

const evenNumbersToHundred = () => {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
};

//Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

const multipleToThree = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
};

//Найдите сумму всех целых чисел от 1 до 100.

const sumOfNumbers = () => {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
};

//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

const sumOfEvenNumbers = () => {
  let sum = 0;
  for (let i = 2; i < 100; i += 2) {
    sum += i;
  }
  console.log(sum);
};

//Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

const sumOfNotEvenNumbers = () => {
  let sum = 0;
  for (let i = 1; i <= 100; i += 2) {
    sum += i;
  }
  return sum;
};

//Даны два целых числа. Найдите остаток от деления первого числа на второе.

const remainOfDivision = (firstNumber, secondNumber) => {
  return firstNumber % secondNumber;
};

//Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
const returnBackwards = (string) => {
  for (let i = string.length - 1; i >= 0; i = i - 1) {
    console.log(string[i]);
  }
};

//Дан массив с числами. Найдите сумму квадратов элементов этого массива.

const sumOfSquares = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i] ** 2;
  }
  return sum;
};

//Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

const sumOfSqrts = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += Math.sqrt(array[i]);
  }
  return sum;
};

//Дан массив с числами. Найдите сумму положительных элементов этого массива.

const sumOfPositiveNumbers = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
};

//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

const sumOfSpecificNumbers = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (10 > array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
};

//Дана строка:
//
// 'abcde'
// Получите массив букв этой строки.

const makeArray = (string) => {
  let resultArray = [];
  for (let i = 0; i < string.length; i++) {
    resultArray[i] = string[i];
  }
  return resultArray;
};

//const str = "adsc";
//const array = str.split("");

//Дано некоторое число:
//
// 12345
// Получите массив цифр этого числа.

const makeArrayOfDigits = (number) => {
  const stringNumber = number.toString();
  let result = [];

  for (let i = 0; i < stringNumber.length; i++) {
    result[i] = stringNumber[i];
  }
  return result;
};

//Дано некоторое число:
//
// 12345
// Переверните его:
//
// 54321

const swapBackwards = (number) => {
  const stringNumber = number.toString();
  let result = [];

  for (let i = 0; i < stringNumber.length; i++) {
    result[i] = stringNumber[i];
  }
  return parseInt(result.reverse().join(""));
};

//Дано некоторое число:
//
// 12345
// Найдите сумму цифр этого числа.

const sumOfDigits = (number) => {
  const stringNumber = number.toString();
  let sum = 0;

  for (let i = 0; i < stringNumber.length; i++) {
    sum += parseInt(stringNumber[i]);
  }
  return sum;
};

//Заполните массив целыми числами от 1 до 10.

const fillWithNumbers = (array) => {
  for (let i = 1; i <= 10; i++) {
    array.push(i);
  }
  return array;
};

//Заполните массив четными числами из промежутка от 1 до 100.

const fillWithEvenNumbers = (array) => {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
};

//Дан массив с дробями:
//
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.

const roundToOneDigit = (array) => {
  let result = [];
  for (let i = 0; i <= array.length - 1; i++) {
    result.push(Math.round(array[i] * 10) / 10);
  }
  return result;
};

const roundToOneDigit1 = (array) => {
  return array.map((value) => parseFloat(value.toFixed(1)));
};

//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

const filterHttp = (array) => {
  return array.filter((value) => value.startsWith("http://"));
};

//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

const filterHtml = (array) => {
  return array.filter((value) => value.endsWith(".html"));
};

//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

const addTenPercent = (array) => {
  return array.map((value) => (value / 100) * 110);
};

//Заполните массив случайными числами из промежутка от 1 до 100.

const fillArray = (array) => {
  for (let i = 1; i <= 100; i++) {
    array.push(i);
  }
  return array;
};

//Дано некоторое число:
//
// 12345
// Выведите в консоль все его символы с конца.

const fromEnd = (number) => {
  for (let i = number.toString().length; i >= 1; i = i - 1) {
    console.log(i);
  }
};

//Дан некоторый массив, например, вот такой:
//
// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
//
// [1, 2]
// [3, 4]
// [5, 6]

const newArrays = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i += 2) {
    console.log(array.slice(i, i + 2));
  }
};

const newArrays1 = (array) => {
  for (let i = 0; i < array.length; i += 2) {
    const newArray = [array[i], array[i + 1]];
    console.log(newArray);
  }
};

//Даны два массива:
//
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
//
// [1, 2, 3, 4, 5, 6]

const squashArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

//Дана некоторая строка. Найдите позицию первого нуля в строке.

const findIndexOfZero = (string) => {
  return string.indexOf("0");
};

//Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

const findFirstAndSecondDigitEqual = () => {
  for (let i = 1; i <= 1000; i++) {
    if (parseInt(i.toString()[0]) + parseInt(i.toString()[1]) === 5) {
      console.log(i);
    }
  }
};

//Дан массив. Удалите из него элементы с заданным значением.

const deleteValue = (array, valueToDelete) => {
  return array.filter((value) => value !== valueToDelete);
};

//Дан некоторый массив, например, вот такой:
//
// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

const sumOfFirstHalf = (array) => {
  const firstHalf = array.slice(0, Math.floor(array.length / 2));

  return firstHalf.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

//Дан некоторый массив, например, вот такой:
//
// [1, 2, 3, 4, 5, 6]
// Найдите сумму двух половин элементов этого массива.

const sumOfHalfs = (array) => {
  const firstHalf = array.slice(0, array.length / 2);
  const secondHalf = array.slice(array.length / 2, array.length);

  return (
    firstHalf.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) +
    secondHalf.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0)
  );
};

//Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

const sumOfNegative = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      sum += 1;
    }
  }
  return sum;
};

//Дан массив с числами. Оставьте в нем только положительные числа.

const filterPositive = (array) => {
  return array.filter((value) => value >= 0);
};

//Дана строка. Удалите последний символ из этой строки.

const deleteLastSymbol = (string) => {
  return string.slice(0, -1);
};

//Дана строка. Удалите предпоследний символ из этой строки.

const deletePreLastSymbol = (string) => {
  return string.slice(0, -2) + string.slice(-1);
};

//Дан некоторый массив, например, вот такой:
//
// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

const divisionOfHalfs = (array) => {
  const firstHalf = array.slice(0, array.length / 2);
  const secondHalf = array.slice(array.length / 2, array.length);

  return (
    firstHalf.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) /
    secondHalf.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0)
  );
};

//Уровень 2.3
//Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

const checkLastSymbolEqualToFirst = (str1, str2) => {
  return str1[str1.length - 1] === str2[0];
};

//Дана некоторая строка. Найдите позицию третьего нуля в строке.

const findIndexOfFirstZero = (number) => {
  let counter = 0;
  let index = 0;
  for (let i = 0; i < number.toString().length; i++) {
    if (number.toString()[i] === "0") {
      counter++;
      index = i;
    }
  }
  if (counter === 3) {
    return index;
  } else return "No third zero";
};

//Даны числа, разделенные запятыми:
//
// '12,34,56'
// Найдите сумму этих чисел.

const findSum = (str) => {
  let array = str.split(",");
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += parseInt(array[i]);
  }
  return sum;
};

//Дана дата в следующем формате:
//
// '2025-12-31'
// Преобразуйте эту дату в следующий объект:
//
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

const formatDateToObject = (date) => {
  let array = date.split("-");
  return { year: date[0], month: date[1], day: date[2] };
};

//Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

const findFirstDigit = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      return i;
    }
  }
};

//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

//const object = { key1: "value1", key2: "value2" };
//const firstArray = [];
//firstArray.push(Object.keys(object));
//const secondArray = [];
//secondArray.push(Object.values(object));
//console.log(firstArray, secondArray);

//Дано число. Выведите в консоль количество четных цифр в этом числе.

const quantityOfEvenNumbers = (number) => {
  let result = 0;
  for (let i = 0; i < number.toString().length; i++) {
    if (parseInt(number.toString()[i]) % 2 === 0) {
      result++;
    }
  }
  return result;
};

//Дана некоторая строка:
//
// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
//
// 'AbCdE'

const quantityOfEvenNumbersInString = (string) => {
  let resultArray = [];
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      resultArray.push(string[i].toUpperCase());
    } else resultArray.push(string[i]);
  }
  return resultArray.toString();
};

//Дана некоторая строка со словами:
//
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
//
// 'Aaa Bbb Ccc'

const makeFirstSymbolUpperCase = (string) => {
  let array = string.split(" ");
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    resultArray.push(
      array[i][0].toUpperCase() + array[i].slice(1, array.length),
    );
  }
  return resultArray.join(" ");
};

const makeFirstSymbolUpperCase1 = (string) => {
  return string
    .split(" ")
    .map((value) => value[0].toUpperCase() + value.slice(1))
    .join(" ");
};

//Дана некоторая строка, например, вот такая:
//
// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

const getAllZerosIndexArray = (string) => {
  return Array.from(string)
    .map((value, index) => (value === "0" ? index : null))
    .filter((value) => value !== null);
};

//Дана некоторая строка:
//
// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
//
// 'abdeg'

const removeEveryThirdSymbol = (string) => {
  let array = Array.from(string);
  let resultArray = [];
  for (let i = 1; i <= array.length; i++) {
    if (i % 3 !== 0) {
      resultArray.push(array[i - 1]);
    }
  }
  return resultArray.join("");
};

//Дан некоторый массив, например, вот такой:
//
// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

const divideEvenPositionToNotEven = (array) => {
  const result = array.reduce(
    (accumulator, value, index) => {
      if (index % 2 === 0) {
        accumulator.evenSum += value;
      } else {
        accumulator.oddSum += value;
      }
      return accumulator;
    },
    { evenSum: 0, oddSum: 0 },
  );
  return result.evenSum / result.oddSum;
};

const divideEvenPositionToNotEven1 = (array) => {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      evenSum += array[i];
    }
    if (i % 2 !== 0) {
      oddSum += array[i];
    }
  }
  return evenSum / oddSum;
};

//Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

const getAllDigits = (string) => {
  const array = Array.from(string);
  console.log(array);
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(parseInt(string[i]))) {
      resultArray.push(i);
    }
  }
  return resultArray;
};

//Дан массив с некоторыми числами, например, вот такой:
//
// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
//
// [321, 654, 987]

const ReverseAllDigits = (array) => {
  const resultArray = [];
  for (let i = 0; i < array.length; i++) {
    resultArray.push(
      parseInt(Array.from(array[i].toString()).reverse().join("")),
    );
  }
  return resultArray;
};

//Дана некоторая строка с числом:
//
// '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:
//
// '1 234 567'

const splitToTriples = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if ((string.length - i) % 3 === 0) {
      result += " ";
    }
    result += string[i];
  }
  return result;
};

//Дана некоторая строка:
//
// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
//
// 'aBcDe'

const changeRegister = (string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() !== string[i]) {
      result += string[i].toUpperCase();
    }
    if (string[i].toLowerCase() !== string[i]) {
      result += string[i].toLowerCase();
    }
  }
  return result;
};

//Дан некоторый массив с числами, например, вот такой:
//
// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:
//
// [12, 34, 56]

const makePairs = (array) => {
  let resultArray = [];
  for (let i = 0; i < array.length; i += 2) {
    resultArray.push(parseInt(array[i].toString() + array[i + 1].toString()));
  }
  return resultArray;
};

//Дана некоторая строка со словами:
//
// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:
//
// 'aaa Bbb ccc Eee fff'

const makeFirstSymbolOfEverySecondToUpperCase = (string) => {
  let array = string.split(" ");
  return array.map((value, index) =>
    index % 2 === 1 ? value[0].toUpperCase() + value.slice(1) : value,
  );
};

//Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

const makeArrayOfDigitsPositions = (string) => {
  let array = string.split("");
  console.log(array);
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(parseInt(string[i]))) {
      resultArray.push(i);
    }
  }
  return resultArray;
};

//Дана некоторая строка:
//
// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
//
// 'A BC DEF ghij'

const lessThanFourToUpperCase = (string) => {
  let array = string.split(" ");
  console.log(array);
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length < 4) {
      resultArray.push(array[i].toUpperCase());
    } else {
      resultArray.push(array[i]);
    }
  }
  return resultArray.join(" ");
};

//Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

const registerOf = (letter) => {
  if (letter.toUpperCase() === letter) {
    return "Upper";
  }
  if (letter.toLowerCase() === letter) {
    return "Lower";
  }
};

//Дано некоторое число, например, такое:
//
// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
//
// 28

const removeAllOdd = (number) => {
  let result = "";
  for (let i = 0; i < number.toString().length; i++) {
    if (parseInt(number.toString()[i]) % 2 === 0) {
      result += number.toString()[i];
    }
  }
  return result;
};

//Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

const checkLessThanTwoUpperCase = (string) => {
  let sumOfUpper = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === string[i]) {
      sumOfUpper += 1;
    }
  }
  if (sumOfUpper > 2) {
    return "More than 2";
  }
  if (sumOfUpper <= 2) {
    return "Less than 3";
  }
};

//Дана некоторая строка:
//
// '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
//
// '1 22 333 22 1'

const removeMoreThanThreeSymbols = (string) => {
  return string
    .split(" ")
    .filter((value) => value.length <= 3)
    .join(" ");
};

//Даны два массива:
//
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:
//
// [1, 2, 'a', 'b', 'c', 3]

const joinArraysInSpecificWay = (arr1, arr2) => {
  return [...arr1.slice(0, arr1.length - 1), ...arr2, arr1.pop()];
};

//Дано некоторое число:
//
// 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
//
// 12 + 34 + 56

const findSumOfPairs = (number) => {
  let sum = 0;
  for (let i = 0; i < number.toString().length; i += 2) {
    sum += parseInt(number.toString()[i] + number.toString()[i + 1]);
  }
  return sum;
};

//Дан массив с числами:
//
// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

const logReverseArray = (array) => {
  array.reverse();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) break;
    console.log(array[i]);
  }
};

//Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

const checkLessThanFourLetters = (string) => {
  let lettersCounter = 0;
  for (let i = 0; i < string.length; i++) {
    if (isNaN(parseInt(string[i]))) {
      lettersCounter += 1;
      if (lettersCounter > 3) {
        return "No";
      }
    }
  }
  return "Yes";
};

//Дано число. Получите первую четную цифру с конца этого числа.

const getLastEvenNumber = (number) => {
  let result = "";
  for (let i = 0; i < number.toString().length; i++) {
    if (number.toString()[i] % 2 === 0) {
      result = number.toString()[i];
    }
  }
  return result;
};

//Дана некоторая строка:
//
// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
//
// '!bcde !bcde !bcde'

const replaceEachFirstSymbolWithExclamationMark = (string) => {
  let array = string.split(" ");
  return array.map((value) => (value[0] = "!" + value.slice(1))).join(" ");
};

//Дан массив с числами:
//
// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

const hasTwoNearElementsEqual = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      return "Yes";
    }
  }
  return "No";
};

console.log(hasTwoNearElementsEqual([1, 2, 3, 3, 4, 5]));
