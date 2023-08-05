import { PeminjamanByNonAnggotaStrategy } from "../Peminjaman.js";
import { Peminjaman } from "../data/peminjaman.js";
import PeminjamanTemplate from "./PeminjamanTemplate.js";

class PeminjamanNonAnggota extends PeminjamanTemplate {
  data: Peminjaman;

  constructor(data: Peminjaman) {
    super();
    this.data = data;
  }

  pinjam(): void {
    const peminjaman = new PeminjamanByNonAnggotaStrategy(this.data);
    peminjaman.addPeminjaman();
  }

  cekKetersediaan(): void {
    console.log("Ketersediaan diperiksa");
  }

  cekPeminjam(): void {
    console.log("Peminjam diperiksa");
  }
}

export default PeminjamanNonAnggota;
