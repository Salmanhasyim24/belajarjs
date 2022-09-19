// pahami soal yang diberikan
// mencari rumus mengenai soal yang didapat
// terapkan didalam kodingan
// sebelumnya, tentukan nilai atau value pada soal yang diberikan
// Hasilkan soal dengan CleanCode


//soal 1
var massa = 600;
var a = 2;
var gaya = massa * a;

console.log("Rumus Newton II =  ΣF = m x a");
console.log("ΣF =", massa+ " * " +a+ " = ");
console.log("hasil yang didapatkan dalam mencari gaya pada soal tersebut adalah", gaya + "N");

//soal 2
var nama = "Salman Hasyim Adz Dzikri";
var nilai = 69;
var absen = 6;


// //jika kondisi && maka, kedua variabel harus bersifat true
// if (nilai > 70 && absen <= 5 ) {
//     console.log(nama+ " dinyatakan lulus")
// } else {
//     console.log(nama+ " dinyatakan tidak lulus")
// }
// // jika kondisi || maka, kondisi yang diplih salah satu bernilai true
// if (nilai > 70 || absen <= 5 ) {
//     console.log(nama+ " dinyatakan lulus")
// } else {
//     console.log(nama+ " dinyatakan tidak lulus")
// }

if (nilai > 70 && absen <= 5 ) {
    console.log(nama+ " dinyatakan lulus")
} else if (nilai > 70 || absen <= 5) {
     console.log(nama+ " dinyatakan lulus")
}else {
    console.log(nama + " dinyatakan tidak lulus")
}