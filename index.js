// Завдання 1
// Напишіть функцию arrCopy(arr), яка копією масив 
// не змінюючи оригінал arr.
// •	const arr1 = arrCopy([1,2,3]) – запише в змінну масив 
// [1,2,3].
// •	const arr2 = arrCopy([1,2,3,[10,20]]) – запише в змінну
//  масив [1,2,3,[10,20]].

// const arr1 = [1,2,3];
// const copyArr = arr  => {
//   const newArr = [];
//   arr.map(i => newArr.push(i))
//   return newArr
// }
// const arr2 = copyArr(arr1);
// arr2[3] = [10, 20]
// console.log(arr1)
// console.log(arr2)

// Завдання 2
// Напишіть функцію arrToString(arr), яка приймає масив arr 
// з чисел і повертає вже масив з стрічками:
// •	const arr1 = arrToString([1,2,3]) – запише в змінну масив
//  [‘1’,‘2’,‘3’]. 
// •	const arr2 = arrToString([10,200,3333]) – запише в змінну 
// масив [‘10’,‘200’,‘3333’]. 

// const arrToString = arr => arr.map(number => number.toString());
// const arr = arrToString([1,2,3]);
// const arr2 = arrToString([10,200,3333]);
// console.log(arr);
// console.log(arr2);

// Завдання 3
// Напишіть функцію getLength(arr), яка приймає масив arr з стрічок і повертає новий масив з довжиною елементів тих стрічок:
// •	const arr1 = getLength([‘Ivan’,‘Pavlo’,‘Ira’]) – запише в змінну масив [4,5,3]. 
// •	const arr2 = getLength([‘Oleksiy’,‘Andriana’]) – запише в змінну масив [7,8]. 
// ------------------------------------------------------------------------------------------

// const getLength = arr => arr.map(String => String.lenght());
// const arr1 = getLength([‘Ivan’,‘Pavlo’,‘Ira’]);
// const arr2 = getLength([‘Oleksiy’,‘Andriana’]);






// Завдання 4
// Напишіть функцію removeDuplicates(arr), яка приймає масив arr з стрічок і повертає новий масив де виключені елементи, що повторюються з масиву arr(ігнорувати чутливість до регістру):
// •	const arr1 = removeDuplicates([‘html’,‘css’,‘html’,‘js’]) – запише в змінну масив [‘html’,‘css’,‘js’]. 
// •	const arr2 = removeDuplicates([‘html’,‘css’,‘js’,‘html’,‘js’,‘python’,‘js’,‘scss’]) – запише в змінну масив [‘html’,‘css’,‘js’,‘python’,‘scss’]). 


// const arr1 = remDuplicates(['html','css','html','js']);
// const arr2 = remDuplicates(['html','css','js','html','js','python','js','scss']);

// function remDuplicates(arr) {
//     return arr.filter((value,index) => arr.indexOf(value) === index)
// }
// console.log(remDuplicates(arr1));
// console.log(remDuplicates(arr2));