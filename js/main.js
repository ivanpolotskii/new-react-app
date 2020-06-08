let started = document.querySelector('#start');

let budgetValue = document.querySelector('.budget-value');
let daybudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalexpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthsavingsValue = document.querySelector('.monthsavings-value');
let yearsavingsValue = document.querySelector('.yearsavings-value');

let expensesItem = document.querySelectorAll('.expenses-item');

let expensesItemBtn = document.querySelector('.expenses-item-btn');
let optionalexpensesBtn = document.querySelector('.optionalexpenses-btn');
let countBudgetBtn = document.querySelector('.count-budget-btn');

let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('.choose-income');
let savings = document.querySelector('#savings');
let chooseSum = document.querySelector('#sum');
let choosePercent = document.querySelector('#percent');

let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money, time;

started.addEventListener('click', function (event) {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    expensesItemBtn.disabled=false;
    optionalexpensesBtn.disabled=false;
    countBudgetBtn.disabled=false;
});

expensesItemBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i += 2) {
        let a = expensesItem[i].value,
            b = expensesItem[i + 1].value;
        console.log(b)
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        }
        sum += +b;
    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        appData.optionalExpenses[i] = optionalexpensesItem[i].value;
        sum += appData.optionalExpenses[i] + ' ';
    }
    optionalexpensesValue.textContent = sum;
});

countBudgetBtn.addEventListener('click', function () {
    if (appData.budget !== undefined) {
        appData.moneyPerDay = ((appData.budget-expensesValue.textContent)/ 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        daybudgetValue.textContent = 'Произошла ошибка';
    }
});

chooseIncome.addEventListener('input', function () {
    items = chooseIncome.value;
    incomeValue.textContent = items;
    appData.income = items.split(', ');
});

savings.addEventListener('click', function () {
    appData.savings = !appData.savings;
});

chooseSum.addEventListener('input', function () {
    if (appData.savings) {
        let save = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = (save / 100 / 12 * percent).toFixed(1);
        monthsavingsValue.textContent = appData.monthIncome;
        appData.yearIncome = (save / 100 * percent).toFixed(1);
        yearsavingsValue.textContent=appData.yearIncome;
    };
});

choosePercent.addEventListener('input',function(){
    if (appData.savings) {
        let save = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = (save / 100 / 12 * percent).toFixed(1);
        monthsavingsValue.textContent = appData.monthIncome;
        appData.yearIncome = (save / 100 * percent).toFixed(1);
        yearsavingsValue.textContent=appData.yearIncome;
    };
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}
console.log('Наша программа включает в себя данные:')
for (let key in appData) {
    console.log(key);
}
