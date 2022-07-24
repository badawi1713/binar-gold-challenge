import { Button } from "views/components";

const CarSearchModalForm = ({ searchFormRef }) => {
  return (
    <>
      <form
        id="search-form"
        tabIndex={1}
        className="flex flex-col md:flex-row md:items-end gap-4 justify-between "
      >
        <div className="form-control flex-1">
          <label className="label">
            <span className="text-xs">Nama Mobil</span>
          </label>
          <input
            ref={searchFormRef}
            type="text"
            placeholder="Ketik nama/tipe mobil"
            className="input input-bordered w-full text-xs rounded-sm"
          />
        </div>

        <div className="form-control  flex-1">
          <label className="label">
            <span className="text-xs">Kategori</span>
          </label>
          <select className="select select-bordered w-full text-xs font-normal text-black rounded-sm">
            <option className="text-gray-400" value="">
              Pilih Kapasitas Mobil
            </option>
            <option className="text-black" value="semua">
              Semua
            </option>
            <option className="text-black" value="2 - 4 orang">
              2 - 4 orang
            </option>
            <option className="text-black" value="4 - 6 orang2">
              4 - 6 orang
            </option>
            <option className="text-black" value="6 - 8 orang">
              6 - 8 orang
            </option>
          </select>
        </div>

        <div className="form-control  flex-1">
          <label className="label">
            <span className="text-xs">Harga</span>
          </label>
          <select className="select select-bordered w-full text-xs font-normal text-black rounded-sm">
            <option className="text-gray-400" value="">
              Pilih Harga Sewa Per hari
            </option>
            <option className="text-gray-400" value="semua">
              Pilih Harga Sewa Per hari
            </option>
            <option className="text-black" value="1">
              &lt; Rp 400.000{" "}
            </option>
            <option className="text-black" value="2">
              Rp 400.000 - Rp 600.000{" "}
            </option>
            <option className="text-black" value="3">
              &gt; Rp 600.000{" "}
            </option>
          </select>
        </div>
        <div className="form-control  flex-1">
          <label className="label">
            <span className="text-xs">Status</span>
          </label>
          <select className="select select-bordered w-full text-xs font-normal text-black rounded-sm">
            <option className="text-gray-400" value="">
              Pilih Status Mobil
            </option>
            <option className="text-black" value={""}>
              Semua
            </option>
            <option className="text-black" value={true}>
              Tersedia
            </option>
            <option className="text-black" value={false}>
              Disewa
            </option>
          </select>
        </div>
        <Button variant="outlined" color="secondary" type="button">
          Edit
        </Button>
        {/* <Button variant="contained" color="primary" type="submit">
          Cari Mobil
        </Button> */}
      </form>
    </>
  );
};

export default CarSearchModalForm;
