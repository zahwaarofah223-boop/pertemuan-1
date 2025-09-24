// 2. Array keranjang
let keranjang = ["Apel", "Jeruk", "Pisang"];
console.log("Awal:", keranjang);

// Tambahkan barang ke akhir array (push)
keranjang.push("Mangga");
console.log("Setelah push:", keranjang);

// Tambahkan barang ke awal array (unshift)
keranjang.unshift("Semangka");
console.log("Setelah unshift:", keranjang);

// Hapus barang terakhir (pop)
keranjang.pop();
console.log("Setelah pop:", keranjang);

// Hapus barang pertama (shift)
keranjang.shift();
console.log("Setelah shift:", keranjang);


// 3. Tampilkan isi keranjang dengan perulangan for
console.log("Isi keranjang:");
for (let i = 0; i < keranjang.length; i++) {
  console.log((i + 1) + ". " + keranjang[i]);
}


// 4. Array of objects produk
const produk = [
  { nama: "Beras", harga: 50000 },
  { nama: "Minyak", harga: 20000 }
];

// Tambahkan 1 produk baru
produk.push({ nama: "Gula", harga: 15000 });

// Hapus 1 produk terakhir
produk.pop();

// Tampilkan produk
console.table(produk);


// Buat fungsi tambahProduk
function tambahProduk(nama, harga) {
  produk.push({ nama, harga });
  console.log("Produk ditambahkan:", nama);
}

// Fungsi hitung total harga
function hitungTotal() {
  let total = 0;
  for (let i = 0; i < produk.length; i++) {
    total += produk[i].harga;
  }
  return total;
}

// Cek ketersediaan produk
if (produk.length > 0) {
  console.log("Produk tersedia");
} else {
  console.log("Produk kosong");
}

// Contoh penggunaan fungsi
tambahProduk("Telur", 30000);
console.table(produk);
console.log("Total harga semua produk:", hitungTotal());


// Gunakan switch untuk menampilkan nama hari
let hari = 1; // misal 1 = Senin
switch (hari) {
  case 0: console.log("Minggu"); break;
  case 1: console.log("Senin"); break;
  case 2: console.log("Selasa"); break;
  case 3: console.log("Rabu"); break;
  case 4: console.log("Kamis"); break;
  case 5: console.log("Jumat"); break;
  case 6: console.log("Sabtu"); break;
  default: console.log("Hari tidak valid");
}
