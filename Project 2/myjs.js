/* Вопросы к этому заданию
Сколько типов данных существует в JS?
-- Число, Строка, Булевый оператор, null, undefined, sym, obj 

Как вывести информацию в консоль?
-- console.log(data);

Какая функция операторов || и &&?
-- Операторы условия, возвращают true Или false
*/



var p = function detectDayBudget() {

  var money = +prompt("Ваш бюджет на месяц?", ''),
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
    let a = prompt("Введите обязательную статью расходов в этом месяце" + i, ''),
      b = prompt("Во сколько обойдется?" + i, '');

    console.log(typeof (a));
    console.log(typeof (b));
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
      a != '' && b != '' && a.length < 50) {
      console.log("done" + i);
      appData.expenses[a] = b;
    } else {
      do {
        a = prompt("Введите обязательную статью расходов в этом месяце" + i + 1, '');
        b = prompt("Во сколько обойдется?" + i + 1, '');
      }
      while (!a && !b);
      appData.expenses[a] = b;
    }
  }

  appData.moneyPerDay = appData.budget / 30;

  alert("Дневной бюджет: " + appData.moneyPerDay);

  console.log(appData);
};

p();
