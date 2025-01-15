// const okok = new Date();
// console.log(okok.getHours());
// console.log(okok.getMinutes());
// console.log(okok.getSeconds());


// // Function to swap two elements in an array
// function swap(arr, i, j) {
//     // Using destructuring to swap arr[i] and arr[j]
//     [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// // Example usage
// let arr = [10, 20, 30, 40, 50];
// console.log("Before swap:", arr);

// // Swap elements at index 1 and 3 (20 and 40)
// swap(arr, 1, 3);
// console.log("After swap:", arr);



// // Function to swap two elements in an array using a temporary variable
// function swap(arr, i, j) {
//     // Using a temporary variable to swap arr[i] and arr[j]
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// // Example usage
// let arr = [10, 20, 30, 40, 50];
// console.log("Before swap:", arr);

// // Swap elements at index 1 and 3 (20 and 40)
// swap(arr, 1, 3);
// console.log("After swap:", arr);




const symbols = [
    "\u2660", // Spade
    "\u2663", // Club
    "\u2665", // Heart
    "\u2666", // Diamond
    "A",
    "B",
    "C",
    "D",
];

// Duplicate the symbols array to create pairs
let cards = [...symbols, ...symbols];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(cards)

console.log(cards);