/*Keyword This digunakan untuk memanggil properti dari sebuah objek
sedangkan method adalah function yang dimiliki oleh sebuah objek.
arrow function memiliki perilaku berbeda dalam menggunakan this karena
dia memanggil langsung ke dalam objek window*/

const penggunaanMethodDanThis = {
    merek : 'toyota',
    warna : 'merah',
    deskripsi : function () {
        return `Ini adalah mobil merek ${this.merek} dengan warna ${this.warna}`;
    }
}


// penggunaan try dan catch untuk menangani error
const tryCatch = (arg) => {
    try {
        console.log(arg.toUpperCase());
    } catch (error) {
        console.log(error);
        console.log('silahkan masukkan tipe data string pada parameter arg');
    }
}

console.log(tryCatch('zikin'));
console.log(tryCatch(999));

const scores = [89, 58, 79,98,87,81,12];

/* 
untuk menghasilkan true/ false dari sebuah array
every akan bernilai true jika semua kriteria terpenuhi sedangkan some boleh salah satu
*/
setTimeout(() => {
    console.log('kode ini akan dijalankan setelah 5 detik berlalu');
    let beberapa = scores.some((score) => score >= 70);
    console.log(beberapa);
}, 5000);

const setiap = scores.every((score) => score >= 70);
console.log(setiap);

// penggunaan method reduce 
const nilaiTerendah = scores.reduce((scores, score) => {
    if (scores < score) {
        return scores;
    }
    return score;
});

const nilaiTertinggi = scores.reduce((scores, score) => {
    if (scores > score) {
        return scores;
    }
    return score;
});
console.log(nilaiTerendah);
console.log(nilaiTertinggi);


// penggunaan spread(menyebarkan) / rest  (mengumpulkan) operator
// dibawah ini adalah spread operator
let sayur = ["Bayam", "Wortel"];
let buah = ["Apel", "Mangga"];

// Tulis kode Anda di sini:
let semuaBelanjaan = [...sayur,...buah] ; 

console.log(semuaBelanjaan); // Output yang diharapkan: ["Bayam", "Wortel", "Apel", "Mangga"]


// dibawah ini adalah rest operator
let nilai =[80,70,60,50];
let [juara1,...sisaPeserta] = nilai;

console.log(sisaPeserta); // Output yang diharapkan: [70, 60, 50]





// ini adalah destructuring operator
let arr = ['merah','jingga','kuning','hijau','biru','nila','ungu'];
let [satu,dua,tiga,...sisaWarna] = arr;
console.log(sisaWarna);



