var money,
    time;

var expName = prompt ("Введите обязательную статью расходов в этом месяце");
var expData = +prompt ("Во сколько обойдется?");

var appData = {
  budget : money,
  timeData : time,
  expenses : {expName1 : expName, expData1 : expData},
  optionalExpenses : "",
  income : [],
  savings : false
};

//alert(expData/30);
console.log(appData.expenses.expName1);
console.log(appData.expenses.expData1/30);