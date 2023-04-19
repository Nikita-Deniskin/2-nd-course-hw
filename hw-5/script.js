// Задание №1
// function min(a, b) {
//     if (a < b) {
//         return a;
//     }
//     else {
//         return b;
//     }
// }
// let result = min(1, 3)
// alert(result)

// Задание №2
// function even(n) {
//     if (n % 2 == 0) {
//         return alert("Четное");
//     }
//     else  {
//         return alert("Нечетное")
//     }
    
// }

// even(prompt("enter num"))

// Задание №3

// задание 3.1

// function square(n)
// {
//     return console.log(n*n);
// }
// square(prompt("enter num"))

// задание 3.2

// function square2(n)
// {
//     return alert(n*n);
// }
// square2(prompt("enter num"))

// Задание №4

// function age()
// {
//    let n = prompt("how old are you")
//    if (n < 0)
//    {
//          return alert("Вы ввели неправильное значение")
//    }
//    else if (n >= 0 && n <= 12)
//    {
//         return alert("Привет, друг!")
//    }
//    else 
//    {
//         return alert("Добро пожаловать!")
//    }

// }
// age()

// Задание №5

// function num(a, b)
// {
//     if (!isNaN(a) && !isNaN(b))
//     {
//         return alert(a*b)
//     }
//     else 
//     {
//         return alert ("Одно или оба значения не являются числом")
//     }
// }
// num(prompt(), prompt())

// Задание №6

// function num(a)
// {
//     if (!isNaN(a))
//     {
//         return alert(`${a} в кубе равняется ${a*a*a}`)
//     }
//     else 
//     {
//         return alert ("Переданный параметр не является числом")
//     }
// }
// num(prompt("enter num"))

// Задание №7

// function getCircleArea() {
//     return this.radius * this.radius * 3.1415;
//   }
//   function getCirclePerimeter() {
//     return this.radius * 2 + 3.1415;
//   }
  
//   const circle1 = {
//     radius:11,
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
//   };
  
//   const circle2 = {
//     radius:12,
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
//   };
  
//   console.log(circle1.getArea());
//   console.log(circle1.getPerimeter());
//   console.log(circle2.getArea());
//   console.log(circle2.getPerimeter());

// Задание №8
function season() {
    let monthNumber = prompt('Напишите номер месяца');

    if (monthNumber >=  1 && monthNumber <= 2 || monthNumber == 12) {
        alert('Вьюги да сгега-это зима!');

    } else if (monthNumber >=  3 && monthNumber <= 5) {
        alert('Потекла вода, к нам пришла весна!');

    } else if (monthNumber >=  6 && monthNumber <= 8) {
        alert('Все позеленело, наступило лето');

    } else if (monthNumber >=  9 && monthNumber <= 11) {
        alert('Золотая осень');

    } else if (monthNumber >=  13) {
        alert('Такого по числу месяца не существует!');
    }       
}