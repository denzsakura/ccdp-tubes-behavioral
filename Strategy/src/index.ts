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
import { Peminjaman, PeminjamanList } from "./data/peminjaman.js";
import { Perpustakaan } from "./Perpus.js";

// let objectPinjam: Peminjaman | undefined = undefined;

// const login = async () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "admin_name",
//         message: "Masukkan nama admin",
//         validate: function (value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Masukkan nama admin";
//           }
//         },
//       },
//       {
//         type: "password",
//         name: "admin_pwd",
//         message: "Masukkan password admin",
//         validate: function (value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Masukkan password admin";
//           }
//         },
//         mask: "*",
//       },
//     ])
//     .then((answers) => {
//       const admin = new Admin(answers.admin_name, answers.admin_pwd);
//       if (admin.login(answers.admin_name, answers.admin_pwd)) {
//         console.log(chalk.green("Login berhasil"));
//         menu();
//       } else {
//         console.log(chalk.red("Login gagal"));
//         login();
//       }
//     });
// };

// const anggota = async () => {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "anggota",
//         message: "Pilih menu",
//         choices: [
//           "Tambah Anggota",
//           "Edit Anggota",
//           "Hapus Anggota",
//           "Lihat Anggota",
//         ],
//       },
//     ])
//     .then((answers) => {
//       switch (answers.anggota) {
//         case "Tambah Anggota":
//           // tambahAnggota();
//           console.log("tambah anggota");
//           break;
//         case "Edit Anggota":
//           // editAnggota();
//           console.log("edit anggota");
//           break;
//         case "Hapus Anggota":
//           // hapusAnggota();
//           console.log("hapus anggota");
//           break;
//         case "Lihat Anggota":
//           lihatAnggota();
//           break;
//       }
//     });
// };

// const lihatAnggota = async () => {
//   const anggota = Anggota.AnggotaList;
//   console.log(chalk.blue(JSON.stringify(anggota)));
//   menu();
// };

// const menu = async () => {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "menu",
//         message: "Pilih menu",
//         choices: [
//           "Peminjaman",
//           "Anggota",
//           "Buku",
//           "Pengembalian",
//           "Laporan",
//           "Logout",
//         ],
//       },
//     ])
//     .then((answers) => {
//       switch (answers.menu) {
//         case "Peminjaman":
//           peminjaman();
//           break;
//         case "Anggota":
//           anggota();
//           break;
//         case "Buku":
//           // buku();
//           console.log("buku");
//           break;
//         case "Pengembalian":
//           // pengembalian();
//           console.log("pengembalian");
//           break;
//         case "Laporan":
//           // laporan();
//           console.log("laporan");
//           break;
//         case "Logout":
//           // logout();
//           console.log("logout");
//           break;
//       }
//     });
// };

// const peminjaman = async () => {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "peminjaman",
//         message: "Pilih menu",
//         choices: ["Anggota", "Non Anggota"],
//       },
//     ])
//     .then((answers) => {
//       switch (answers.peminjaman) {
//         case "Anggota":
//           peminjamanAnggota();
//           break;
//         case "Non Anggota":
//           peminjamanNonAnggota();
//           break;
//       }
//     });
// };

// const peminjamanAnggota = async () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "anggota_id",
//         message: "Masukkan id anggota",
//         validate: function (value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Masukkan id anggota";
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "buku_id",
//         message: "Masukkan id buku",
//         validate: function (value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Masukkan id buku";
//           }
//         },
//       },
//     ])
//     .then((answers) => {
//       objectPinjam = {
//         idBuku: answers.buku_id,
//         idAnggota: answers.anggota_id,
//         tglPinjam: new Date().toISOString(),
//         tglKembali: addWeeksToDate(new Date(), 2).toISOString(),
//         status: "Dipinjam",
//         bukanAnggota: false,
//       };
//       pinjamSave(new PeminjamanByAnggotaStrategy(objectPinjam));

//       console.log(chalk.green("Peminjaman berhasil"));
//       console.log(chalk.blue("Detail peminjaman"));
//       console.log(chalk.blue(JSON.stringify(PeminjamanList)));
//       menu();
//     });
// };

// const peminjamanNonAnggota = async () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "nama",
//         message: "Masukkan nama",
//         validate: function (value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Masukkan nama";
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "alamat",
//         message: "Masukkan alamat",
//         validate: function (value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Masukkan alamat";
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "no_hp",
//         message: "Masukkan no hp",
//         validate: function (value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Masukkan no hp";
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "buku_id",
//         message: "Masukkan id buku",
//         validate: function (value) {
//           if (value.length) {
//             return true;
//           } else {
//             return "Masukkan id buku";
//           }
//         },
//       },
//     ])
//     .then((answers) => {
//       objectPinjam = {
//         idBuku: answers.buku_id,
//         idAnggota: answers.anggota_id,
//         tglPinjam: new Date().toISOString(),
//         tglKembali: addWeeksToDate(new Date(), 2).toISOString(),
//         status: "Dipinjam",
//         bukanAnggota: false,
//       };
//       pinjamSave(new PeminjamanByNonAnggotaStrategy(objectPinjam));

//       console.log(chalk.green("Peminjaman berhasil"));
//       console.log(chalk.blue("Detail peminjaman"));
//       console.log(chalk.blue(JSON.stringify(PeminjamanList)));
//       menu();
//     });
// };

// const pinjamSave = (
//   strategy: PeminjamanByAnggotaStrategy | PeminjamanByNonAnggotaStrategy
// ): void => {
//   strategy.addPeminjaman();
// };

class Main {
  objectPinjam: Peminjaman | undefined = undefined;
  perpus: Perpustakaan;

  constructor() {
    this.perpus = new Perpustakaan();
  }

  login() {
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
          this.menu();
        } else {
          console.log(chalk.red("Login gagal"));
          this.login();
        }
      });
  }

  anggota = async () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "anggota",
          message: "Pilih menu",
          choices: [
            "Tambah Anggota",
            "Edit Anggota",
            "Hapus Anggota",
            "Lihat Anggota",
          ],
        },
      ])
      .then((answers) => {
        switch (answers.anggota) {
          case "Tambah Anggota":
            // tambahAnggota();
            console.log("tambah anggota");
            break;
          case "Edit Anggota":
            // editAnggota();
            console.log("edit anggota");
            break;
          case "Hapus Anggota":
            // hapusAnggota();
            console.log("hapus anggota");
            break;
          case "Lihat Anggota":
            this.lihatAnggota();
            break;
        }
      });
  };

  lihatAnggota = async () => {
    const anggota = this.perpus.anggota;
    console.log(chalk.blue(JSON.stringify(anggota)));
    this.menu();
  };

  menu = async () => {
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
            this.peminjaman();
            break;
          case "Anggota":
            this.anggota();
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

  peminjaman = async () => {
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
            this.peminjamanAnggota();
            break;
          case "Non Anggota":
            this.peminjamanNonAnggota();
            break;
        }
      });
  };

  peminjamanAnggota() {
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
        this.objectPinjam = {
          idBuku: answers.buku_id,
          idAnggota: answers.anggota_id,
          tglPinjam: new Date().toISOString(),
          tglKembali: addWeeksToDate(new Date(), 2).toISOString(),
          status: "Dipinjam",
          bukanAnggota: false,
        };
        this.perpus.tambahPeminjaman(
          new PeminjamanByAnggotaStrategy(this.objectPinjam)
        );

        console.log(chalk.green("Peminjaman berhasil"));
        console.log(chalk.blue("Detail peminjaman"));
        console.log(chalk.blue(JSON.stringify(this.perpus.peminjaman)));
        this.menu();
      });
  }

  peminjamanNonAnggota() {
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
        this.objectPinjam = {
          idBuku: answers.buku_id,
          idAnggota: answers.anggota_id,
          tglPinjam: new Date().toISOString(),
          tglKembali: addWeeksToDate(new Date(), 2).toISOString(),
          status: "Dipinjam",
          bukanAnggota: true,
        };
        this.perpus.tambahPeminjaman(
          new PeminjamanByNonAnggotaStrategy(this.objectPinjam)
        );

        console.log(chalk.green("Peminjaman berhasil"));
        console.log(chalk.blue("Detail peminjaman"));
        console.log(chalk.blue(JSON.stringify(this.perpus.peminjaman)));
        this.menu();
      });
  }
}

const main = new Main();
main.login();
