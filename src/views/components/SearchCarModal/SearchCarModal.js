import React from "react";

const SearchCarModal = () => {
  return (
    <section className="hidden lg:block p-6 bg-white shadow-md min-w-5xl max-w-5xl mx-auto -m-16 mb-24 relative z-10 rounded-lg">
      <form className="flex items-baseline gap-4 justify-between">
        <input placeholder="Pilih tipe Driver" />
        <input placeholder="Tanggal" />
        <input placeholder="Waktu Jemput Anda" />
        <input placeholder="Jumlah Penumpang (Opsional)" />
        <button type="submit">Cari Mobil</button>
      </form>
    </section>
  );
};

export default SearchCarModal;
