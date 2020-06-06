// const abbrevName=name=>name.split(' ').map(word=>word[0]).join('.').toUpperCase();

// const sortReindeer = reindeerNames => console.log(reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1])));

// const getNiceNames=people=>people.filter(obj=>obj.wasNice===true).map(obj=>obj.name)
// const getNaughtyNames=people=>people.filter(obj=>obj.wasNice===false).map(obj=>obj.name)

// const greet =name=>'Hello '+(name[0].toUpperCase()+name.slice(1).toLowerCase())+'!'

// const solve=(a,b)=>(a+b).split('').filter(lett=>(!a.includes(lett) || !b.includes(lett))).join('')

// const divisibleByThree = str=> (str.split('').map(elem=>+elem).reduce((total,num)=>total+num,0))%3===0?true:false

// const splitInParts =(s, partLength)=>{
//     let chunks = [];
//     for (let i = 0, charsLength = s.length; i < charsLength; i += partLength) {
//         chunks.push(s.substring(i, i + partLength));
//     };
//     let result=chunks.join(' ');
//     return result
// }

// const solution=digits=>{
//     let answer=0;
//     for(let i=0;i<digits.length;i++){
//         if(answer<+digits.substr(i,5)){
//             answer=+digits.substr(i,5);
//         };
//     };
//     return answer;
// };

// const disemvowel = str =>{
//     let glasn=['a','e','i','o','u'];
//     str=str.split('').filter(el=>!glasn.includes(el.toLowerCase())).join('');
//     return(str)
// }



let money = prompt('Ваш бюджет на месяц?', '');
alert('Бюджет за 1 день:'+money/30);
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let statyaRashodov = prompt('Введите обязательную статью расходов в этом месяце','')
let voSkolko = prompt('Во сколько обойдется?','')

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        statyaRashodov:voSkolko,
    },
    optionalExpenses: {},
    income: [],
    savings: false
}

debugger;
