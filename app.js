// var lengthOfLastWord = function(s) {
//     s = s.replace(/\s+/g, ' ');
//     s = s.trim()
//     const arr = s.split(" ")
//     return arr[arr.length  - 1].length
// };


// console.log( lengthOfLastWord("   fly me   to   the moon  ") );



// var promise = {
//     var: "text",
//     array: [1, 2, 3, 4],
//   };
  
//   console.log(promise.array);


// const arr = []
// console.log(arr.length);

// arr[59] = true
// arr[58] = undefined

// console.log(arr.length);
// console.log(arr);
// console.log(arr[2]);




// function reverse(arr) {
//     const result = []

//     for (let i = arr.length - 1; i >= 0; i--) {
//         result.push(arr[i])
//     }
//     return result
// }



// function reverse2(arr){
//     const len = arr.length
//     const middle = Math.floor(len / 2)

//     for(let i = 0; i < middle; i++){
//         const elem = arr[i]
//         arr[i] = arr[len - 1 -i]
//         arr[len - 1 -i] = elem
//     }

//     return arr

// }




// console.log(reverse2([1,2,3,4,5,6]));






// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       const middle = Math.floor((left + right) / 2);
  
//       if (arr[middle] === target) {
//         return middle; // Найден элемент, возвращаем его индекс
//       } else if (arr[middle] < target) {
//         left = middle + 1; // Искать в правой половине
//       } else {
//         right = middle - 1; // Искать в левой половине
//       }
//     }
  
//     return -1; // Элемент не найден
//   }
  
//   // Пример использования:
//   const myArray = [1, 3, 5, 7, 9, 11, 13, 15];



// const myString = "Hello, World! World! World!";
// const newString = myString.replace("World", "JavaScript");
// console.log(newString); // Вывод: "Hello, JavaScript!"



// worker threads and child processes in node js   