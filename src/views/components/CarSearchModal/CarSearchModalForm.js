import CarsContext from "context/cars/CarsContext";
import { useContext } from "react";
import { Button } from "views/components";

const CarSearchModalForm = () => {
  const { carsData, loading } = useContext(CarsContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const capitalize = (text) => {
      return text.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      );
    };
    const carName = capitalize("innova");
    console.log(
      "hello",
      carsData?.filter((item) => item.name.includes(carName))
    );
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="search-form"
        tabIndex={1}
        className="flex flex-col md:flex-row md:items-end gap-4 justify-between "
      >
        <div className="form-control flex-1">
          <label className="label">
            <span className="text-xs">Nama Mobil</span>
          </label>
          <input
            disabled={loading}
            type="text"
            placeholder="Ketik nama/tipe mobil"
            className="input input-bordered w-full text-xs rounded-sm"
          />
        </div>

        <div className="form-control  flex-1">
          <label className="label">
            <span className="text-xs">Kategori</span>
          </label>
          <select
            disabled={loading}
            className="select select-bordered w-full text-xs font-normal text-black rounded-sm"
          >
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
          <select
            disabled={loading}
            className="select select-bordered w-full text-xs font-normal text-black rounded-sm"
          >
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
          <select  disabled={loading} className="select select-bordered w-full text-xs font-normal text-black rounded-sm">
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
        {/* <Button  disabled={loading} variant="outlined" color="secondary" type="button">
          Edit
        </Button> */}
        <Button
          disabled={loading}
          variant="contained"
          color="primary"
          type="submit"
        >
          Cari Mobil
        </Button>
      </form>
    </>
  );
};

export default CarSearchModalForm;
