var angka = 15; //ini adalah integer
var nama = 'abdul';//ini adalah string 
var pilihan = true / false; // ini adalah boolean


// ini adlah penggunakan if ,else if(elif),else
if (angka <= 14) {
    console.log("Kamu masih anak anak");
} else if (angka >=15) {
    console.log("kamu adalah remaja");
} else {
    console.log("erorr");
}

// ini adalah penulisan function
function pertambahan(x, y) {
    return x + y;
}

function pengurangan(x, y) {
    return x - y;
}

//ini pemanggilan func 
console.log(pertambahan(10, 5));
console.log(pengurangan(500, 5));

//ini penggunaan looping
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}


//perbedaan var , let ,const

// 1. var
var x = 10;
console.log(x); // Output: 10
 //Variabel yang dideklarasikan dengan var memiliki cakupan fungsi (function scope).
// Ini berarti variabel hanya dapat diakses di dalam fungsi di mana mereka dideklarasikan.

// 2. let
let y = 20;
console.log(y); // Output: 20
//Variabel yang dideklarasikan dengan let memiliki cakupan blok (block scope).
//Ini berarti variabel hanya dapat diakses di dalam blok di mana mereka dideklarasikan.

// 3. const
const z = 30;
console.log(z); // Output: 30
//const digunakan untuk mendeklarasikan variabel yang nilainya tetap (konstan).
//Artinya, setelah variabel const diberi nilai, nilainya tidak dapat diubah.

