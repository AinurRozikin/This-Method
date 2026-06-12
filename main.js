const penggunaanMethodDanThis = {
    merek : 'toyota',
    warna : 'merah',
    deskripsi : function () {
        return `Ini adalah mobil merek ${this.merek} dengan warna ${this.warna}`;
    }
}

/*Keyword This digunakan untuk memanggil properti dari sebuah objek
sedangkan method adalah function yang dimiliki oleh sebuah objek  */