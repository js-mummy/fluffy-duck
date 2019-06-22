/* Вопросы к этому заданию
Сколько типов данных существует в JS?
-- Число, Строка, Булевый оператор, null, undefined, sym, obj 
 
Как вывести информацию в консоль?
-- console.log(data);

Какая функция операторов || и &&?
-- Операторы условия, возвращают true Или false
*/


function detectDayBudget() {

  let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

  let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
  };

  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
      a != '' && b != '' && a.length < 50) {

      appData.expenses[a] = b;
    } else {
      do {
        a = prompt("Неверное значение. Введите обязательную статью расходов в этом месяце", '');
        b = prompt("Неверное значение. Во сколько обойдется?", '');
      }
      while (!a && !b);
      appData.expenses[a] = b;
    }
  }

  appData.moneyPerDay = appData.budget / 30;

  alert("Дневной бюджет: " + appData.moneyPerDay);

  return appData.moneyPerDay;
}

let p = detectDayBudget();

function detectLevel() {
  var moneyPerDayLevel = p;

  console.log(moneyPerDayLevel);

  if (moneyPerDayLevel < 100) {
    console.log("Мин уровень достатка");
  } else if (moneyPerDayLevel > 100 && moneyPerDayLevel < 2000) {
    console.log("Средний уровень достатка");
  } else if (moneyPerDayLevel > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Ошибка");
  }
}

detectLevel();

function chooseOptExpenses() {
  let optionalExpenses = {};

  for (let i = 1; i < 4; i++) {
    let c = prompt("Статья необязательных расходов №" + i + "?", '');
    optionalExpenses[i] = c;
  }
  console.log(optionalExpenses);

  return optionalExpenses;
}
