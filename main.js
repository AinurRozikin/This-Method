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