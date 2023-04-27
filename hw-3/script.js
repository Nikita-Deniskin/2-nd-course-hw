// let password = 'пароль';
// let input = prompt("Введите пароль")
// if (input === password) {
//     alert ("Пароль введен верно");
// } else if (input != password) {
//     alert ("Пароль введен неверно");
// }

// let c = 2;
// if (c>=0 && c<=10) {
//     alert ("Верно")
// } else {
//     alert ("Неверно")
// }

// let c = 15;
// let d = 20;
// if (100<c || 100<d) {
//     alert ("Верно")
// }
// else {
//     alert ("Неверно")
// }

// let a = 2;
// let b = 3;
// alert(a + b);

// let monthNumber = prompt ("Введите месяц");
// switch (monthNumber) {
//     case "1":
//         alert ('зима');
//         break;
//     case "2":
//         alert ('зима');
//         break;
//     case "3":
//         alert ('весна');
//         break;
//     case "4":
//         alert ('весна');
//         break;
//     case "5":
//         alert ('весна');
//         break;
//     case "6":
//         alert ('лето');
//         break;
//     case "7":
//         alert ('лето');
//         break;
//     case "8":
//         alert ('лето');
//         break;
//     case "9":
//         alert ('осень');
//         break;
//     case "10":
//         alert ('осень');
//         break;
//     case "11":
//         alert ('осень');
//         break;
//     case "12":
//         alert ('зима');
//         break;
//     default: (monthNumber>13) ;
//     alert ("Нет такого месяца")
//         break;
// }

// let a = Number(prompt("Введите число"))
// if (Number.isNaN(a)) {
//     alert ("Ой-ой, что-то пошло не так")
// }
// if (a%2==0){
//     alert ("Число четное")
// }
// if (a%2==1){
//     alert ("Число нечетное")
// }

// let clientOS = Number (prompt ("Если у вас 'Android'-введите 0 ,если 'Ios'-введите 1 "));
// switch (clientOS) {
//     case 1:
//         confirm ("Установите версию приложения для iOS по ссылке");
//     break;
//     case 0:
//         confirm ("Установите версию приложения для Android по ссылке");
//     break;
//     default:
// }

// let clientOS = Number (prompt ("Если у вас 'Android'-введите 0 ,если 'Ios'-введите 1 "))
// let clientDeviceYear = Number (prompt ("Введите год выпуска вашего телефона"));
// if (clientDeviceYear < 2015){
//  switch (clientOS) {
//     case 1:
//         confirm ("Установите облегченную версию приложения для iOS по ссылке");
//     break;
//     case 0:
//         confirm ("Установите облегченную версию приложения для Android по ссылке");
//     break;
//     default:
// }
// }
// else {
//     switch (clientOS) {
//         case 1:
//             confirm ("Установите версию приложения для iOS по ссылке");
//         break;
//         case 0:
//             confirm ("Установите версию приложения для Android по ссылке");
//         break;
//         default:
//     }
// }