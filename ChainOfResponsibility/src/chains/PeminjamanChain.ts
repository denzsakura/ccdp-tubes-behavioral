import { Peminjaman as PeminjamanInterface } from "../data/peminjaman.js";

export type PeminjamanType = {
  ANGGOTA: "ANGGOTA";
  NON_ANGGOTA: "NON_ANGGOTA";
};

export const PeminjamanTypes: PeminjamanType = {
  ANGGOTA: "ANGGOTA",
  NON_ANGGOTA: "NON_ANGGOTA",
};

interface PeminjamanChain {
  setNextChain(chain: PeminjamanChain): void;
  addPeminjaman(data: PeminjamanInterface): PeminjamanInterface;
}

export default PeminjamanChain;
