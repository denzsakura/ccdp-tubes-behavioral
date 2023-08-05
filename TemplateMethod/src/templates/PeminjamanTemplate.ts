abstract class PeminjamanTemplate {
  abstract pinjam(): void;

  abstract cekKetersediaan(): void;
  abstract cekPeminjam(): void;

  cekPengembalian(): void {
    console.log("Pengembalian diperiksa");
  }
}

export default PeminjamanTemplate;
