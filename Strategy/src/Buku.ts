import { BukuList, Buku as BukuInterface } from "./data/buku.js";

interface BukuManage extends BukuInterface {
  addBuku(data: BukuInterface): BukuInterface;
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
  static BukuList: BukuInterface[] = BukuList;
  harga: number;
  id: number;
  judul: string;
  penerbit: string;
  pengarang: string;
  stok: number;
  tahun: number;
  constructor() {
    this.id = BukuList[0].id;
    this.judul = BukuList[0].judul;
    this.pengarang = BukuList[0].pengarang;
    this.penerbit = BukuList[0].penerbit;
    this.tahun = BukuList[0].tahun;
    this.stok = BukuList[0].stok;
    this.harga = BukuList[0].harga;
  }

  addBuku({
    judul,
    pengarang,
    penerbit,
    tahun,
    stok,
    harga,
  }: BukuInterface): BukuInterface {
    const newBuku = {
      id: BukuList.length + 1,
      judul,
      pengarang,
      penerbit,
      tahun,
      stok,
      harga,
    };
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

  getBuku(id: number): BukuInterface | undefined {
    return BukuList.find((buku) => buku.id === id);
  }

  getBukuList(): BukuInterface[] {
    return BukuList;
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
}

export default Buku;
