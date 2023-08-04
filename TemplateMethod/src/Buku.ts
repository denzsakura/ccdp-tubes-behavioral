import { BukuList, Buku as BukuInterface } from "./data/buku.js";

interface BukuManage extends BukuInterface {
  addBuku(
    judul: string,
    pengarang: string,
    penerbit: string,
    tahun: number,
    stok: number,
    harga: number
  ): BukuInterface;
  deleteBuku(id: number): boolean;
  updateBuku(
    id: number,
    judul: string,
    pengarang: string,
    penerbit: string,
    tahun: number,
    stok: number,
    harga: number
  ): boolean;
  getBuku(id: number): BukuInterface | undefined;
  getBukuList(): BukuInterface[];
}

class Buku implements BukuManage {
  id: number;
  judul: string;
  pengarang: string;
  penerbit: string;
  tahun: number;
  stok: number;
  harga: number;

  constructor(
    id: number,
    judul: string,
    pengarang: string,
    penerbit: string,
    tahun: number,
    stok: number,
    harga: number
  ) {
    this.id = id;
    this.judul = judul;
    this.pengarang = pengarang;
    this.penerbit = penerbit;
    this.tahun = tahun;
    this.stok = stok;
    this.harga = harga;
  }

  static addBuku(
    judul: string,
    pengarang: string,
    penerbit: string,
    tahun: number,
    stok: number,
    harga: number
  ): BukuInterface {
    const newBuku = new Buku(
      BukuList.length + 1,
      judul,
      pengarang,
      penerbit,
      tahun,
      stok,
      harga
    );
    BukuList.push(newBuku);
    return newBuku;
  }

  addBuku(
    judul: string,
    pengarang: string,
    penerbit: string,
    tahun: number,
    stok: number,
    harga: number
  ): BukuInterface {
    const newBuku = new Buku(
      BukuList.length + 1,
      judul,
      pengarang,
      penerbit,
      tahun,
      stok,
      harga
    );
    BukuList.push(newBuku);
    return newBuku;
  }

  deleteBuku(id: number): boolean {
    const index = BukuList.findIndex((buku) => buku.id === id);
    if (index === -1) {
      return false;
    }
    BukuList.splice(index, 1);
    return true;
  }

  updateBuku(
    id: number,
    judul: string,
    pengarang: string,
    penerbit: string,
    tahun: number,
    stok: number,
    harga: number
  ): boolean {
    const index = BukuList.findIndex((buku) => buku.id === id);
    if (index === -1) {
      return false;
    }
    BukuList[index] = {
      id,
      judul,
      pengarang,
      penerbit,
      tahun,
      stok,
      harga,
    };
    return true;
  }

  getBuku(id: number): BukuInterface | undefined {
    return BukuList.find((buku) => buku.id === id);
  }

  getBukuList(): BukuInterface[] {
    return BukuList;
  }
}

export default Buku;
