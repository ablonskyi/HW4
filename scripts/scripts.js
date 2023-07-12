let yearOfBirth = prompt('Введіть рік вашого народження');
let city = prompt('В якому місті ти живешь?');
let country = '';
let showLiveMessege;
let age = 2023 - (+yearOfBirth);
let ageMessege;
let i = age % 10;
let j = age % 100;

if (yearOfBirth === null || yearOfBirth == '' || yearOfBirth == " " || isNaN(+yearOfBirth)) {
    ageMessege = 'Шкода, що Ви не захотіли ввести свій(ю) рік народження'
} else {
    if (age < 1) {
        ageMessege = `Не може такого бути`; 
    } else {
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
        
        if (age > 100 && yearOfBirth !== null) {
            ageMessege = `Вам більше ста років? Непогано!)`;
        }
    }
}

if (city == 'Київ' || city == 'київ') {
    country = 'України';
} else if (city == 'Вашингтон' || city == 'вашингтон') {
    country = 'США';
} else if (city == 'Лондон' || city == 'лондон') {
    country = 'Великобританіі'
}

if (city === null || city == '' || city == ' ') {
    showLiveMessege = 'Шкода, що Ви не захотіли ввести своє місто'
} else {
    if (country == '') {
        showLiveMessege = `Ти живеш у місті ${city}`;
    } else {
        showLiveMessege = `Ти живеш у столиці ${country}`
    }
}



let sport = prompt('Твій улюбленний вид спорту?');
let idol = '';
let sportMessege;

if(sport === null || sport == '' || sport == ' ') {
    sportMessege = 'Шкода, що Ви не захотіли ввести свій улюбленний спорт'
} else if (sport == 'футбол' || sport == 'Футбол') {
    idol = 'Мессі';
    sportMessege = `Круто! Хочеш стати як ${idol}`
} else if (sport == 'бокс' || sport == 'Бокс') {
    idol = 'Кличко';
    sportMessege = `Круто! Хочеш стати як ${idol}`
} else if (sport == 'баскетбол' || sport == 'Баскетбол') {
    idol = 'Джордан'
    sportMessege = `Круто! Хочеш стати як ${idol}`
} else {
    sportMessege = `Круто, твій улюбленний вид спорту - ${sport}`
}

alert(`${ageMessege}\n${showLiveMessege}\n${sportMessege}`);
