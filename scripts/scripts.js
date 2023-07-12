let yearOfBirth = prompt('Введіть рік вашого народження');
let city = prompt('В якому місті ти живешь?');
let country = '';
let showLiveMessege;
let age = 2023 - (+yearOfBirth);
let ageMessege;
let i = age % 10;
let j = age % 100;

if (j >= 11 && j <= 19) {
    ageMessege = `Ваш вік: ${age} років`;
} else if (i == 1) {
    ageMessege = `Ваш вік: ${age} рік`;
} else if (i >= 2 && i <= 4) {
    ageMessege = `Ваш вік: ${age} роки`;
} else if (age == 0 || age >= 5 && age <= 20) {
    ageMessege = `Ваш вік: ${age} років`;
} else {
    ageMessege = `Ваш вік: ${age} років`;
}

if (yearOfBirth === null) {
    ageMessege = 'Шкода, що Ви не захотіли ввести свій(ю) рік народження'
}

if (age > 100 && yearOfBirth !== null) {
    ageMessege = `Вам більше ста років? Непогано!)`;
}

if (city == 'Київ' || city == 'київ') {
    country = 'України';
} else if (city == 'Вашингтон' || city == 'вашингтон') {
    country = 'США';
} else if (city == 'Лондон' || city == 'лондон') {
    country = 'Великобританіі'
}

if (country == '' && city !== null) {
    showLiveMessege = `Ти живеш у місті ${city}`;
} else if (city === null) {
    showLiveMessege = 'Шкода, що Ви не захотіли ввести своє місто';
} else {
    showLiveMessege = `Ти живеш у столиці ${country}`
} 

let sport = prompt('Твій улюбленний вид спорту?');
let idol = '';
let sportMessege = `Круто! Хочеш стати як ${idol}`;

if(sport === null || sport == '' || sport == ' ') {
    sportMessege = 'Шкода, що Ви не захотіли ввести свій улюбленний спорт'
} else if (sport == 'футбол' || sport == 'Футбол') {
    idol = 'Мессі';
} else if (sport == 'бокс' || sport == 'Бокс') {
    idol = 'Кличко';
} else if (sport == 'баскетбол' || sport == 'Баскетбол') {
    idol = 'Джордан'
} else {
    sportMessege = 'Шкода, але я нічого не знаю про такий вид спорту'
}

alert(`${ageMessege}\n${showLiveMessege}\n${sportMessege}`);
