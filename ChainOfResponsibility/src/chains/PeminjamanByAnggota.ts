import { Peminjaman as PeminjamanInterface } from "../data/peminjaman.js";
import { PeminjamanByAnggotaStrategy } from "../models/Peminjaman.js";
import Chain, { PeminjamanTypes } from "./PeminjamanChain.js";

class PeminjamanAnggota implements Chain {
  private nextChain: Chain | undefined;
  private JenisPeminjaman: string = PeminjamanTypes.ANGGOTA;

  setNextChain(chain: Chain): void {
    this.nextChain = chain;
  }
  addPeminjaman(data: PeminjamanInterface): PeminjamanInterface {
    if (data.bukanAnggota) {
      this.nextChain?.addPeminjaman(data);
    }
    const peminjaman = new PeminjamanByAnggotaStrategy(data);
    return peminjaman.addPeminjaman();
  }
}

export { PeminjamanAnggota };
