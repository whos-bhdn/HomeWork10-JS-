// const arr = [1, 2, 3, 4, 5];
// let arr = new Array (1, 2, 3, 4, 5);
// console.log(arr);

// const arrEx = new Array;
// console.log(arrEx)
// const arr = [1, 2, 3, 4, 5];
// console.log(arr[4])
// arr[4] = 'changed value'
// console.log(arr[4]);



// МЕТОДИ (МАСИВІВ)
// ! Конкатинація масивів (створюється 3, який включає в себе добавлені масиви)
// const arr = [1, 2, 3, 4, 5];
// const arr2 = [7, 6, 5, 4, 8];
// const arr3 = arr.concat(arr2);
// console.log(arr3);

// const arr = [1, 2, 3, 4, 5];
// arr.forEach((el, i, arr) => {
//     console.log({el});
//     console.log({i});
// });
// console.log(arr);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = arr.filter((elem, index, arr) => {
//     if(elem > 3 && elem < 8) {
//         return true
//     }
//     return false
// });
// console.log(newArr);


// ВИВОДИТЬ ЧИСЛА ДОБАВЛЯЮЧИ 3, ДО КОЖНОГО ЕЛЕМЕНТИ ЗА ДОПОМОГОЮ ЦИКЛУ
// const newArr1 = [1, 2, 3, 4, 5];
// for (let i=0; i<newArr1.length; i++) {
//     newArr1[i] += 3;
// }
// console.log(newArr1)

// Зїдає 1 елемент 
// const arr = [1, 2, 3, 4, 5];
// const newValue = arr.shift()
// console.log(arr)
// console.log(newValue)

// добавляє в початок елементи
// const arr = [1, 2, 3, 4, 5];
// const newValue = arr.unshift(21, 22)
// console.log(newValue)
// console.log(arr)

// Кидає в кінець масиву елементи
// const arr = [1, 2, 3, 4, 5];
// const newValue = arr.push(21,22)
// console.log(arr)
// console.log(newValue)

// .pop - забирає останній елемент масиву

// Сортування 
// const arr = [1, 2, 3, 4, 5, 2, 1, 0, 6,];
// console.log(arr.sort())

// Сортування з об`єктом
// const arr = [{id: 1}, {id: 10}, {id: 5}, 4, 5, 2, 1, 0, 6,];
// const newArr = arr.sort((a, b) => a.id - b.id)
// console.log(newArr)

// const arr = [1, 3, 32, 24, 43, 5]
// const newElem = arr.findIndex((item) => {
//     return item.i === 3
// })
// console.log(newElem);
