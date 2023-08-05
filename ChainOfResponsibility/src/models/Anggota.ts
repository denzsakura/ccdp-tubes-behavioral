import { AnggotaList, Anggota as AnggotaInterface } from "../data/anggota.js";

interface AnggotaManage extends AnggotaInterface {
  login(email: string, pwd: string): AnggotaInterface | undefined;
  addAnggota(
    name: string,
    pwd: string,
    email: string,
    telp?: string,
    alamat?: string
  ): AnggotaInterface;
  deleteAnggota(id: number): boolean;
  updateAnggota(
    id: number,
    name?: string,
    pwd?: string,
    email?: string,
    telp?: string
  ): boolean;
  getAnggota(id: number): AnggotaInterface | undefined;
  getAnggotaList(): AnggotaInterface[];
}

class Anggota implements AnggotaManage {
  id: number;
  nama: string;
  alamat: string;
  telp: string;
  email: string;
  pwd: string;

  static AnggotaList: AnggotaInterface[] = AnggotaList;

  constructor(
    id: number,
    nama: string,
    alamat: string,
    telp: string,
    email: string,
    pwd: string
  ) {
    this.id = id;
    this.nama = nama;
    this.alamat = alamat;
    this.telp = telp;
    this.email = email;
    this.pwd = pwd;
  }

  login(email: string, pwd: string): AnggotaInterface | undefined {
    const anggota = Anggota.AnggotaList.find(
      (a) => a.email === email && a.pwd === pwd
    );
    return anggota;
  }

  addAnggota(
    name: string,
    pwd: string,
    email: string,
    telp?: string,
    alamat?: string
  ): AnggotaInterface {
    const newAnggota = {
      id: Anggota.AnggotaList.length + 1,
      nama: name,
      alamat: alamat || "",
      telp: telp || "",
      email: email,
      pwd: pwd,
    };
    Anggota.AnggotaList.push(newAnggota);
    return newAnggota;
  }

  deleteAnggota(id: number): boolean {
    const index = Anggota.AnggotaList.findIndex((a) => a.id === id);
    if (index === -1) {
      return false;
    }
    Anggota.AnggotaList.splice(index, 1);
    return true;
  }

  updateAnggota(
    id: number,
    name?: string,
    pwd?: string,
    email?: string,
    telp?: string
  ): boolean {
    const anggota = Anggota.AnggotaList.find((a) => a.id === id);
    if (!anggota) {
      return false;
    }
    if (name) {
      anggota.nama = name;
    }
    if (pwd) {
      anggota.pwd = pwd;
    }
    if (email) {
      anggota.email = email;
    }
    if (telp) {
      anggota.telp = telp;
    }
    return true;
  }

  getAnggota(id: number): AnggotaInterface | undefined {
    const anggota = Anggota.AnggotaList.find((a) => a.id === id);
    return anggota;
  }

  static getAnggotaByName(name: string): AnggotaInterface | undefined {
    const anggota = Anggota.AnggotaList.find((a) => a.nama === name);
    return anggota;
  }

  getAnggotaList(): AnggotaInterface[] {
    return Anggota.AnggotaList;
  }
}

export default Anggota;
