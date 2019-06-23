// Map array
/*let testArray = [1, 20, 'Test', true];
testArray[6] = 18;

let d = testArray.map(function(x){
  return x*5;
});

console.log(d);*/
/*

// Push and Shift for arrays
let tempArray = [];

for (let i = 10; i >= 0; i--) {
  if (i % 2 == 0) { continue; }
  tempArray.push(i);
}

console.log(tempArray);


var fruits = []; // создать массив

fruits.age = 25; // свойство со строковым именем
fruits[99999] = 5; // присвоить свойство с любым номером
console.log(fruits);
fruits.length = 0; // Очищаем массив
console.log(fruits);

let arr = [9999,3,{face:'beauty'}];

arr.push("My");
console.log(arr.length);
console.log(arr);
console.log(typeof(arr[4]));*/





var matrix = [
  [1, 2, 3, 0, 0],
  [4, 5, 6, 0, 0],
  [7, 8, 9, 0, 0],
  [10, 11, 12, 0, 0]
];
console.log(matrix[0].length);
console.log(matrix[0].length);

let s = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let k = 0; k < matrix[i].length; k++) {
    s += matrix[i][k];
  }
  //console.log(s);
}

console.log(s);

/*Получить последний элемент массива
Как получить последний элемент из произвольного массива?

У нас есть массив goods. Сколько в нем элементов – не знаем,
но можем прочитать из goods.length.

Напишите код для получения последнего элемента goods.*/

let goods = [1, 4, 5, 6, 78, 3, 3, 6, 7, 4];
let s1 = goods.length - 1;
console.log(s1);
console.log(goods[s1]);

/*Добавить новый элемент в массив
важность: 5
Как добавить элемент в конец произвольного массива?

У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».*/

let goods1 = [1, 4, 5, 6, 78, 3, 3, 6, 7, 4];
goods1.push('Компьютер');
console.log(goods1);

/*Создание массива
важность: 5
Задача из 5 шагов-строк:

Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»

Замените предпоследнее значение с конца на «Классика».
Код замены предпоследнего значения должен работать для массивов любой длины.

Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».
Массив в результате каждого шага:

Джаз, Блюз
Джаз, Блюз, Рок-н-Ролл
Джаз, Классика, Рок-н-Ролл
Классика, Рок-н-Ролл
Рэп, Регги, Классика, Рок-н-Ролл
 */
let style = ['Jazz', 'Blues'];
style.push('Rock-n-Roll');
console.log(style);
console.log('--------');

let s2 = style.length - 2;
style[s2] = 'Classic';
console.log(style);
console.log('--------');


console.log(style.shift(0));
console.log('--------');
console.log(style);
console.log('--------');

style.unshift('Rap', 'Reggae');
console.log(style);
console.log('--------');


/*Получить случайное значение из массива
важность: 3
Напишите код для вывода alert случайного значения из массива:

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
P.S. Код для генерации случайного целого от min to max включительно:

var rand = min + Math.floor(Math.random() * (max + 1 - min)); */

let arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
let min = 0;
let max = arr.length;
let rand = min + Math.floor(Math.random() * (max + 1 - min));
console.log(arr[rand]);

/*Создайте калькулятор для введённых значений
важность: 4
Напишите код, который:

Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или
нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива */

let arr1 = [];
let s5 = 0;

for (let i = 0; i < 3; i++) {
  let a = prompt('Enter number', '');
  console.log(typeof (a));
  if (!isNaN(a) && a !== null && a !== '') {
    arr1.push(+a);
    s5 += arr1[i];
  } else {
    break;
  }
}

console.log(arr1);
console.log(s5);

/*Чему равен элемент массива?
важность: 3
Что выведет этот код?

var arr = [1, 2, 3];

var arr2 = arr;
arr2[0] = 5;

alert( arr[0] );1
alert( arr2[0] );5 */

var arr3 = [1, 2, 3];

var arr2 = arr3;
arr2[0] = 5;

console.log(arr3[0]);
console.log(arr2[0]);

/*Поиск в массиве
важность: 3
Создайте функцию find(arr, value), которая ищет в массиве
arr значение value и возвращает его номер, если найдено, или -1, если не найдено.

Например:

arr = ["test", 2, 1.5, false];

find(arr, "test"); // 0
find(arr, 2); // 1
find(arr, 1.5); // 2

find(arr, 0); // -1 */


let arrmy = ['test', 2, 1.5, false];

function find(targetArray, targetValue) {
  targetArray = arrmy;
  for (let i = 0; i < targetArray.length; i++) {
    if (targetArray[i] === targetValue) {
      console.log(i);
      break;
    } else {
      if ((targetArray.length - 1) == i && targetArray[i] !== targetValue) {
        console.log(-1);
      }
    }
  }
}

find(arrmy, 'test'); // 0
find(arrmy, 2); // 1
find(arrmy, 1.5); // 2
find(arrmy, 0); // -1

/* Фильтр диапазона
важность: 3
Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и
возвращает новый массив, который содержит только числа из arr
из диапазона от a до b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция не должна менять arr.

Пример работы:

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
// теперь filtered = [5, 4, 3]
// arr не изменился */

let arr10 = [5, 4, 3, 8, 0];
let arrNew = [];

function filterRange(inputArray, minNumber, maxNumber) {
  for (let i = 0; i < inputArray.length; i++) {
    if (minNumber <= inputArray[i] && inputArray[i] <= maxNumber) {
      arrNew.push(inputArray[i]);
    } else {
      continue;
    }
  }
  return arrNew;
}

let filtered = filterRange(arr10, 5, 10);
console.log(filtered);