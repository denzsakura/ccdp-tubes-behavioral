#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

import Buku from "./Buku.js";
import {
  PeminjamanByAnggotaStrategy,
  PeminjamanByNonAnggotaStrategy,
} from "./Peminjaman.js";
import Admin from "./Admin.js";
import Anggota from "./Anggota.js";
import { addWeeksToDate } from "./utils/date.js";

const login = async () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "admin_name",
        message: "Masukkan nama admin",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Masukkan nama admin";
          }
        },
      },
      {
        type: "password",
        name: "admin_pwd",
        message: "Masukkan password admin",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Masukkan password admin";
          }
        },
        mask: "*",
      },
    ])
    .then((answers) => {
      const admin = new Admin(answers.admin_name, answers.admin_pwd);
      if (admin.login(answers.admin_name, answers.admin_pwd)) {
        console.log(chalk.green("Login berhasil"));
        menu();
      } else {
        console.log(chalk.red("Login gagal"));
        login();
      }
    });
};

const menu = async () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Pilih menu",
        choices: [
          "Peminjaman",
          "Anggota",
          "Buku",
          "Pengembalian",
          "Laporan",
          "Logout",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.menu) {
        case "Peminjaman":
          peminjaman();
          break;
        case "Anggota":
          // anggota();
          console.log("anggota");
          break;
        case "Buku":
          // buku();
          console.log("buku");
          break;
        case "Pengembalian":
          // pengembalian();
          console.log("pengembalian");
          break;
        case "Laporan":
          // laporan();
          console.log("laporan");
          break;
        case "Logout":
          // logout();
          console.log("logout");
          break;
      }
    });
};

const peminjaman = async () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "peminjaman",
        message: "Pilih menu",
        choices: ["Anggota", "Non Anggota"],
      },
    ])
    .then((answers) => {
      switch (answers.peminjaman) {
        case "Anggota":
          peminjamanAnggota();
          break;
        case "Non Anggota":
          peminjamanNonAnggota();
          break;
      }
    });
};

const peminjamanAnggota = async () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "anggota_id",
        message: "Masukkan id anggota",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Masukkan id anggota";
          }
        },
      },
      {
        type: "input",
        name: "buku_id",
        message: "Masukkan id buku",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Masukkan id buku";
          }
        },
      },
    ])
    .then((answers) => {
      const peminjaman = new PeminjamanByAnggotaStrategy({
        idBuku: answers.buku_id,
        idAnggota: answers.anggota_id,
        tglPinjam: new Date().toISOString(),
        tglKembali: addWeeksToDate(new Date(), 2).toISOString(),
        status: "Dipinjam",
        bukanAnggota: false,
      }).addPeminjaman();
      console.log(chalk.green("Peminjaman berhasil"));
      console.log(chalk.blue("Detail peminjaman"));
      console.log(chalk.blue(JSON.stringify(peminjaman)));
      menu();
    });
};

const peminjamanNonAnggota = async () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nama",
        message: "Masukkan nama",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Masukkan nama";
          }
        },
      },
      {
        type: "input",
        name: "alamat",
        message: "Masukkan alamat",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Masukkan alamat";
          }
        },
      },
      {
        type: "input",
        name: "no_hp",
        message: "Masukkan no hp",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Masukkan no hp";
          }
        },
      },
      {
        type: "input",
        name: "buku_id",
        message: "Masukkan id buku",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Masukkan id buku";
          }
        },
      },
    ])
    .then((answers) => {
      const peminjaman = new PeminjamanByNonAnggotaStrategy({
        idBuku: answers.buku_id,
        tglPinjam: new Date().toISOString(),
        tglKembali: addWeeksToDate(new Date(), 1).toISOString(),
        status: "Dipinjam",
        bukanAnggota: true,
        detailPeminjamNonAnggota: {
          nama: answers.nama,
          alamat: answers.alamat,
          telp: answers.no_hp,
        },
      }).addPeminjaman();
      console.log(chalk.green("Peminjaman berhasil"));
      console.log(chalk.blue("Detail peminjaman"));
      console.log(chalk.blue(JSON.stringify(peminjaman)));
      menu();
    });
};

(() => {
  login();
})();
