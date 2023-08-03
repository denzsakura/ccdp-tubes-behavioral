export interface Peminjaman {
  id: number;
  idBuku: number;
  idAnggota?: number;
  tglPinjam: string;
  tglKembali: string;
  status: string;
  bukanAnggota: boolean;
  detailPeminjamNonAnggota?: PeminjamNonAnggota;
}

export interface PeminjamNonAnggota {
  nama: string;
  alamat: string;
  telp: string;
}

export const PeminjamanList: Peminjaman[] = [];
