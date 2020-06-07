let money,time;

function start(){
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while(isNaN(money)||money==''||money==null){
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

function chooseExpenses(){
    for (let i=0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
            && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        }else{
    
        }
    }
}

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет:' + appData.moneyPerDay);
}

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка')
    } else {
        console.log('Произошла ошибка')
    }
}

function checkSavings(){
    if(appData.savings){
        let save = +prompt('Какова сумма накоплений?',''),
            percent=+prompt('Под какой процент?','');
        appData.monthIncome=save/100/12*percent;
        alert('Доход в месяц с Вашего депозита составляет '+appData.monthIncome)
    };   
};

function chooseOptExpenses(){
    for(let i=1;i<4;i++){
        appData.optionalExpenses[i]=prompt('Статья необязательных расходов?','');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

chooseExpenses()

detectDayBudget()

detectLevel()

checkSavings();

chooseOptExpenses();


console.log(appData);



















