let search = document.getElementById("search");
let butt = document.getElementById("butt");
let yandex = 'Yandex круче, но это не точно';
let input_message = 'google';
let mess;
let first;

butt.addEventListener("click", () => {  
if(search.value==input_message){
    mess=yandex;
   alertWithTimer();
}
    else{
      mess=search.value;
         alertWithTimer();
    }
    
//5. Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age. При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве
   let objects = []; // создаем массив

        // заполняем объектами
        for(let i =0; i < 4; i++) {
            objects.push({
                'name': 'My name #' + i,
                'age': 31
            });
        }

        // выводим в консоль весь массив
        console.log(objects);

        // выводим name первого элемента
    first=objects.shift().name;
    });

//6. Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры 
 function superSum(a, b) {
        // приводим значения к числам.
        a = Number(a);
        b = Number(b);

        console.log(a + b);
    }

// 7 Создать массив из чисел в перемешку (не отсортированы). С помощью цикла for найти максимальный и минимальный элементы в массиве
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function getMax() {

        let array = [];
        let max=-10;
        let min=9;

        // заполняем объектами
        for(let i =0; i < 20; i++) {
            array.push(getRandomIntInclusive(-10, 9));
        }

        array.forEach((value) => {
            if(value > max) {
                max = value;
            }
        })
    
     array.forEach((value) => {
            if(value < min) {
                min = value;
            }
        })

        console.log(array);
        console.log('Максимальный элемент', max);
        console.log('Минимальный элемент', min)
    }
getMax();

/*8. Создать 2 переменные a и b… присвоить им любые значения. Потом программно поменять эти значения местами, не используя значения напрямую
let a = "XXX"; 
let b = "YYY";
console.log(a); // то что было изначально в b
console.log(b); // то что было изначально в a*/
function replaceVariables() {
        let a = 123;
        let b = 12312;
        console.log('Было', 'a:', a,'b:', b);
        let c = a;
        a = b;
        b = c;
        console.log('Стало', 'a:', a,'b:', b);
    }

//9. Оформить алгоритм поиска максимального числа в массиве как функцию findMax (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива)
 function findMax(arr) {
        return Math.max(...arr); 
    }

//10. показать alert с результатом поиска не сразу, а через 3 секунды после нажатия (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)
function alertWithTimer() {
        setTimeout(() => {
            alert(mess);
            alert(first);
        }, 3000);
    }