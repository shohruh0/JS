var let= +prompt('Введите свой возраст')

if (let <= 18) {
    console.log('Вы еще молоды, Вам нужно учиться');
} else if (let <= 50) {
    console.log('Вам нужно работать');
} else if (let <= 59) {
    console.log('Вам скоро на пенсию');
} else if (let <= 100) {
    console.log('Вы пенсионер');
} else {
    console.log('Что то пошло не так');
}





var chas = +prompt('Введите время')


switch (chas) {
    case 0:
        alert('12 часа ночи');
        break;
    case 1:
        alert('час ночи');
        break;
    case 2:
        alert('2 часа ночи');
        break;
    case 3:
        alert('3 часа ночи');
        break;
    case 4:
        alert('4 часа ночи');
        break;
    case 5:
        alert('5 часа ночи');
        break;
    case 6:
        alert('6 часа ночи');
        break;
    case 7:
        alert('7 часов утра');
        break;
    case 8:
        alert('8 часов утра');
        break;
    case 9:
        alert('9 часов утра');
        break;
    case 10:
        alert('10 часов утра');
        break;
    case 11:
        alert('11 часа дня');
        break;
    case 12:
        alert('12 часа дня');
        break;
    case 13:
        alert('1 часа дня');
        break;
    case 14:
        alert('2 часа дня');
        break;
    case 15:
        alert('3 часа дня');
        break;
    case 16:
        alert('4 часа дня');
        break;
    case 17:
        alert('5 часа дня');
        break;
    case 18:
        alert('6 часов вечере');
        break;
    case 19:
        alert('7 часов вечера');
        break;
    case 20:
        alert('8 часов вечера');
        break;
    case 21:
        alert('9 часов вечера');
        break;
    case 22:
        alert('10 часов вечера');
        break;
    case 23:
        alert('11 часов вечера');
        break;
}





var odin = +prompt('Введите первое число')
var dva = +prompt('Введите второе число')
var tri = +prompt('Введите третье число')


if (odin || dva || tri) {
    console.log(odin > dva <tri);
    console.log(dva > odin < tri);
    console.log(tri > odin < dva);
    console.log(odin > tri < dva);
}