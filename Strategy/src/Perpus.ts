import {
  Peminjaman as PeminjamanType,
  PeminjamanList,
} from "./data/peminjaman.js";
import { Buku as BukuType } from "./data/buku.js";
import { Anggota as AnggotaType } from "./data/anggota.js";
import { Admin as AdminType } from "./data/admin.js";
import Buku from "./Buku.js";
import Anggota from "./Anggota.js";
import Admin from "./Admin.js";

import {
  PeminjamanByAnggotaStrategy,
  PeminjamanByNonAnggotaStrategy,
} from "./Peminjaman.js";

interface PerpustakaanInterface {
  buku: BukuType[];
  anggota: AnggotaType[];
  admin: AdminType[];
  peminjaman: PeminjamanType[];

  cariBuku(id: number): BukuType;
  cariAnggota(id: number): AnggotaType;
  cariAdmin(id: number): AdminType;
  cariPeminjaman(id: number): PeminjamanType;
  tambahBuku(buku: Buku): void;
  tambahAnggota(anggota: AnggotaType): void;
  tambahAdmin(admin: AdminType): void;
  tambahPeminjaman(
    peminjaman: PeminjamanByAnggotaStrategy | PeminjamanByNonAnggotaStrategy
  ): PeminjamanType;
  hapusBuku(id: number): void;
  hapusAnggota(id: number): void;
  hapusAdmin(id: number): void;
  hapusPeminjaman(id: number): void;
  ubahBuku(id: number, buku: Buku): void;
  ubahAnggota(id: number, anggota: AnggotaType): void;
  ubahAdmin(id: number, admin: AdminType): void;
  ubahPeminjaman(id: number, peminjaman: PeminjamanType): void;
}

class Perpustakaan implements PerpustakaanInterface {
  admin: AdminType[];
  anggota: AnggotaType[];
  buku: BukuType[];
  peminjaman: PeminjamanType[];

  constructor() {
    this.buku = Buku.BukuList;
    this.anggota = Anggota.AnggotaList;
    this.admin = Admin.AdminList;
    this.peminjaman = PeminjamanList;
  }

  cariAdmin(id: number): AdminType {
    throw new Error("Method not implemented.");
  }

  cariAnggota(id: number): AnggotaType {
    throw new Error("Method not implemented.");
  }

  cariBuku(id: number): BukuType {
    const buku = this.buku.find((buku) => buku.id === id);
    if (buku) {
      return buku;
    }
    throw new Error("Buku tidak ditemukan");
  }

  cariPeminjaman(id: number): PeminjamanType {
    throw new Error("Method not implemented.");
  }

  hapusAdmin(id: number): void {
    throw new Error("Method not implemented.");
  }

  hapusAnggota(id: number): void {
    throw new Error("Method not implemented.");
  }

  hapusBuku(id: number): void {
    throw new Error("Method not implemented.");
  }

  hapusPeminjaman(id: number): void {
    throw new Error("Method not implemented.");
  }

  tambahAdmin(admin: AdminType): void {
    throw new Error("Method not implemented.");
  }

  tambahAnggota(anggota: AnggotaType): void {
    throw new Error("Method not implemented.");
  }

  tambahBuku(buku: Buku): void {
    throw new Error("Method not implemented.");
  }

  tambahPeminjaman(
    peminjaman: PeminjamanByAnggotaStrategy | PeminjamanByNonAnggotaStrategy
  ): PeminjamanType {
    const data = peminjaman.addPeminjaman();
    return data;
  }

  ubahAdmin(id: number, admin: AdminType): void {
    throw new Error("Method not implemented.");
  }

  ubahAnggota(id: number, anggota: AnggotaType): void {
    throw new Error("Method not implemented.");
  }

  ubahBuku(id: number, buku: Buku): void {
    throw new Error("Method not implemented.");
  }

  ubahPeminjaman(id: number, peminjaman: PeminjamanType): void {
    throw new Error("Method not implemented.");
  }
}

export { Perpustakaan, PerpustakaanInterface };
