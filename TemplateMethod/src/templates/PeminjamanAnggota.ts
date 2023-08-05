import { Peminjaman } from "../data/peminjaman.js";
import PeminjamanTemplate from "./PeminjamanTemplate.js";
import { PeminjamanByAnggotaStrategy } from "../Peminjaman.js";

class PeminjamanAnggota extends PeminjamanTemplate {
  data: Peminjaman;

  constructor(data: Peminjaman) {
    super();
    this.data = data;
  }

  pinjam(): void {
    const peminjaman = new PeminjamanByAnggotaStrategy(this.data);
    peminjaman.addPeminjaman();
  }

  cekKetersediaan(): void {
    console.log("Ketersediaan diperiksa");
  }

  cekPeminjam(): void {
    console.log("Peminjam diperiksa");
  }
}

export default PeminjamanAnggota;
