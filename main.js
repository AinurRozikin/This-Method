/*Keyword This digunakan untuk memanggil properti dari sebuah objek
sedangkan method adalah function yang dimiliki oleh sebuah objek  */

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



