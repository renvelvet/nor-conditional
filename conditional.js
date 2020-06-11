// Soal no. 1
let divisi = "tech";
let tugas;

if (divisi == 'marketing') {
    tugas = "Menganalisis pasar"
} else if (divisi == 'tech') {
    tugas = "Mengatur segala hal yang berkaitan dengan IT"
} else if (divisi == 'operasional') {
    tugas = "Memastikan operasional berjalan dengan lancar"
} else {
    console.log("Tidak ada divisinya")
}

// Soal no. 2
let a = 7;
let b = 5;

if (a < b) {
    console.log(`${a} kurang dari ${b}`)
} else if (a > b) {
    console.log(`${a} lebih dari ${b}`)
} else {
    console.log(`${a} sama dengan ${b}`)
}

// Soal no. 3
let hari = Number(prompt("Masukkan angka! Simbol angka menunjukkan hari"));

switch (hari) {
    case 1: console.log("Minggu"); break;
    case 2: console.log("Senin"); break;
    case 3: console.log("Selasa"); break;
    case 4: console.log("Rabu"); break;
    case 5: console.log("Kamis"); break;
    case 6: console.log("Jumat"); break;
    case 7: console.log("Sabtu"); break;
    default: console.log("Angka kurang tepat. Tuliskan angka 1-7 untuk menunjukkan hari."); 
}

// Soal no. 4
let direction = prompt("Tuliskan sebuah direction (misal, UP, RIGHT, BOTTOM, LEFT)");

switch (direction) {
    case "up": console.log("Karakter berjalan ke atas"); break;
    case "right": console.log("Karakter berjalan ke kanan"); break;
    case "bottom": console.log("Karakter berjalan ke bawah"); break;
    case "left": console.log("Karakter berjalan ke kiri"); break;
    default: console.log("direction ngaco")
}
