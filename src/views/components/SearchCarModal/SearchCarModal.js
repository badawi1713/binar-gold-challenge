import React from "react";

const SearchCarModal = () => {
  return (
    <section className="hidden lg:block p-6 bg-white shadow-md min-w-5xl max-w-5xl mx-auto -mt-8 xl:-mt-16 mb-24 relative z-10 rounded-lg">
      <form className="flex items-baseline gap-4 justify-between">
        <input placeholder="Nama mobil" />
        <input placeholder="Pilih kategori" />
        <input placeholder="Pilih harga sewa" />
        <input placeholder="Status" />
        <button type="submit">Cari Mobil</button>
      </form>
    </section>
  );
};

export default SearchCarModal;
