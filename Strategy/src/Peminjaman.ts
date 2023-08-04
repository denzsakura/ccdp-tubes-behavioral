import { BukuList } from "./data/buku.js";
import {
  PeminjamanList,
  Peminjaman as PeminjamanInterface,
  PeminjamNonAnggota,
} from "./data/peminjaman.js";

interface PeminjamanByAnggota extends PeminjamanInterface {
  addPeminjaman(
    idBuku: number,
    idAnggota: number,
    tglPinjam: string,
    tglKembali: string,
    status: string,
    bukanAnggota: boolean
  ): PeminjamanInterface;
  deletePeminjaman(id: number): boolean;
  updatePeminjaman(
    id: number,
    idBuku: number,
    idAnggota: number,
    tglPinjam: string,
    tglKembali: string,
    status: string,
    bukanAnggota: boolean
  ): boolean;
  getPeminjaman(id: number): PeminjamanInterface | undefined;
  getPeminjamanList(): PeminjamanInterface[];
}

class PeminjamanByAnggotaStrategy implements PeminjamanByAnggota {
  id: number;
  idBuku: number;
  idAnggota: number;
  tglPinjam: string;
  tglKembali: string;
  status: string;
  bukanAnggota: boolean;
  detailPeminjamNonAnggota?: PeminjamNonAnggota | undefined;
  private peminjamanList: PeminjamanInterface[] = PeminjamanList;

  constructor({
    idBuku,
    idAnggota,
    tglPinjam,
    tglKembali,
    status,
    bukanAnggota,
  }: PeminjamanInterface) {
    this.id = this.peminjamanList.length + 1;
    this.idBuku = idBuku;
    this.idAnggota = idAnggota!;
    this.tglPinjam = tglPinjam;
    this.tglKembali = tglKembali;
    this.status = status;
    this.bukanAnggota = bukanAnggota;
  }

  addPeminjaman(): PeminjamanInterface {
    const peminjaman: PeminjamanInterface = {
      id: this.id,
      idBuku: this.idBuku,
      idAnggota: this.idAnggota,
      tglPinjam: this.tglPinjam,
      tglKembali: this.tglKembali,
      status: this.status,
      bukanAnggota: this.bukanAnggota,
      detailPeminjamNonAnggota: this.bukanAnggota
        ? this.detailPeminjamNonAnggota
        : undefined,
    };
    this.peminjamanList.push(peminjaman);
    const buku = BukuList.find((buku) => buku.id === this.idBuku);
    if (buku) {
      buku.stok--;
    }
    return peminjaman;
  }

  deletePeminjaman(id: number): boolean {
    const index = this.peminjamanList.findIndex(
      (peminjaman) => peminjaman.id === id
    );
    if (index === -1) {
      return false;
    }
    this.peminjamanList.splice(index, 1);
    return true;
  }

  updatePeminjaman(
    id: number,
    idBuku: number,
    idAnggota: number,
    tglPinjam: string,
    tglKembali: string,
    status: string,
    bukanAnggota: boolean
  ): boolean {
    const index = this.peminjamanList.findIndex(
      (peminjaman) => peminjaman.id === id
    );
    if (index === -1) {
      return false;
    }
    this.peminjamanList[index] = {
      id,
      idBuku,
      idAnggota,
      tglPinjam,
      tglKembali,
      status,
      bukanAnggota,
      detailPeminjamNonAnggota: undefined,
    };
    return true;
  }

  getPeminjaman(id: number): PeminjamanInterface | undefined {
    return this.peminjamanList.find((peminjaman) => peminjaman.id === id);
  }

  getPeminjamanList(): PeminjamanInterface[] {
    return this.peminjamanList;
  }

  static getPeminjamanListByAnggota(idAnggota: number): PeminjamanInterface[] {
    return PeminjamanList.filter(
      (peminjaman) => peminjaman.idAnggota === idAnggota
    );
  }
}

interface PeminjamanByNonAnggota extends PeminjamanInterface {
  addPeminjaman(
    idBuku: number,
    tglPinjam: string,
    tglKembali: string,
    status: string,
    bukanAnggota: boolean,
    detailPeminjamNonAnggota: PeminjamNonAnggota
  ): PeminjamanInterface;
  deletePeminjaman(id: number): boolean;
  updatePeminjaman(
    id: number,
    idBuku: number,
    tglPinjam: string,
    tglKembali: string,
    status: string,
    bukanAnggota: boolean,
    detailPeminjamNonAnggota: PeminjamNonAnggota
  ): boolean;
  getPeminjaman(id: number): PeminjamanInterface | undefined;
  getPeminjamanList(): PeminjamanInterface[];
}

class PeminjamanByNonAnggotaStrategy implements PeminjamanByNonAnggota {
  id: number;
  idBuku: number;
  tglPinjam: string;
  tglKembali: string;
  status: string;
  bukanAnggota: boolean;
  detailPeminjamNonAnggota: PeminjamNonAnggota;
  private peminjamanList: PeminjamanInterface[] = PeminjamanList;

  constructor({
    idBuku,
    tglPinjam,
    tglKembali,
    status,
    bukanAnggota,
    detailPeminjamNonAnggota,
  }: PeminjamanInterface) {
    this.id = this.peminjamanList.length + 1;
    this.idBuku = idBuku;
    this.tglPinjam = tglPinjam;
    this.tglKembali = tglKembali;
    this.status = status;
    this.bukanAnggota = bukanAnggota;
    this.detailPeminjamNonAnggota = detailPeminjamNonAnggota!;
  }

  addPeminjaman(): PeminjamanInterface {
    const newPeminjaman: PeminjamanInterface = {
      id: this.id,
      idBuku: this.idBuku,
      tglPinjam: this.tglPinjam,
      tglKembali: this.tglKembali,
      status: this.status,
      bukanAnggota: this.bukanAnggota,
      detailPeminjamNonAnggota: this.detailPeminjamNonAnggota,
    };
    this.peminjamanList.push(newPeminjaman);

    const buku = BukuList.find((buku) => buku.id === this.idBuku);
    if (buku) {
      buku.stok--;
    }
    return newPeminjaman;
  }

  deletePeminjaman(id: number): boolean {
    const index = this.peminjamanList.findIndex(
      (peminjaman) => peminjaman.id === id
    );
    if (index === -1) {
      return false;
    }
    this.peminjamanList.splice(index, 1);
    return true;
  }

  updatePeminjaman(
    id: number,
    idBuku: number,
    tglPinjam: string,
    tglKembali: string,
    status: string,
    bukanAnggota: boolean,
    detailPeminjamNonAnggota: PeminjamNonAnggota
  ): boolean {
    const index = this.peminjamanList.findIndex(
      (peminjaman) => peminjaman.id === id
    );
    if (index === -1) {
      return false;
    }
    this.peminjamanList[index] = {
      id,
      idBuku,
      tglPinjam,
      tglKembali,
      status,
      bukanAnggota,
      detailPeminjamNonAnggota,
    };
    return true;
  }

  getPeminjaman(id: number): PeminjamanInterface | undefined {
    return this.peminjamanList.find((peminjaman) => peminjaman.id === id);
  }

  getPeminjamanList(): PeminjamanInterface[] {
    return this.peminjamanList;
  }

  static getPeminjamanListByNonAnggota(idBuku: number): PeminjamanInterface[] {
    return PeminjamanList.filter((peminjaman) => peminjaman.idBuku === idBuku);
  }
}

export { PeminjamanByAnggotaStrategy, PeminjamanByNonAnggotaStrategy };
