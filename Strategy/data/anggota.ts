export interface Anggota {
  id: number;
  nama: string;
  alamat: string;
  telp: string;
  email: string;
  pwd: string;
}

export const AnggotaList: Anggota[] = [
  {
    id: 1,
    nama: "Anggota 1",
    alamat: "Alamat 1",
    telp: "08123456789",
    email: "geming@tri.com",
    pwd: "geming",
  },
  {
    id: 2,
    nama: "Anggota 2",
    alamat: "Alamat 2",
    telp: "08123456789",
    email: "tri@geming.com",
    pwd: "geming",
  },
];
