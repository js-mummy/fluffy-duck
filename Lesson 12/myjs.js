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

let goods = [1,4,5,6,78,3,3,6,7,4];
let s1 = goods.length - 1;
console.log(s1);
console.log(goods[s1]);

/*Добавить новый элемент в массив
важность: 5
Как добавить элемент в конец произвольного массива?

У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».*/

let goods1 = [1,4,5,6,78,3,3,6,7,4];
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