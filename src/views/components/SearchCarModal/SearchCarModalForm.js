import React from "react";
import { Button } from "views/components";

const SearchCarModalForm = () => {
  return (
    <form className="flex items-end gap-4 flex-row justify-evenly ">
      <div className="form-control">
        <label className="label">
          <span className="text-xs">Nama Mobil</span>
        </label>
        <input
          type="text"
          placeholder="Ketik nama/tipe mobil"
          className="input input-bordered w-full lg:w-52 text-xs"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="text-xs">Kategori</span>
        </label>
        <select className="select select-bordered w-full lg:w-52 text-xs">
          <option disabled selected>
            Pilih Kapasitas Mobil
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="text-xs">Harga</span>
        </label>
        <select className="select select-bordered w-full lg:w-52 text-xs">
          <option disabled selected>
            Pilih Harga Sewa Per hari
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="text-xs">Status</span>
        </label>
        <select className="select select-bordered w-full lg:w-52 text-xs">
          <option disabled selected>
            Pilih Status Mobil
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </div>
      <Button variant="contained" color="primary" type="submit">
        Cari Mobil
      </Button>
    </form>
  );
};

export default SearchCarModalForm;
