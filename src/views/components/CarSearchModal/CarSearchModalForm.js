import CarsContext from "context/cars/CarsContext";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "views/components";

const CarSearchModalForm = ({ closeFormFocus }) => {
  const { loading, editMode, changeCars, carsData, getCarList } =
    useContext(CarsContext);

  const { pathname } = useLocation();

  const isNotSearchPage = pathname !== "/cari-mobil" ? true : false;

  const initialFormData = {
    name: "",
    category: "",
    price: "",
    status: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target?.id]: e.target?.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, category } = formData;

    changeCars({
      loading: true,
    });

    closeFormFocus();

    if (name.trim() === "" && !category) {
      return getCarList();
    }

    let newData = carsData?.filter((item) => item.name === name);
    newData = category
      ? carsData?.filter((item) => item.category === category)
      : newData;

    setTimeout(() => {
      changeCars({
        loading: false,
        carsData: newData,
      });
    }, 2000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="search-form"
        tabIndex={1}
        className="flex flex-col md:flex-row md:items-end gap-4 justify-between"
      >
        <div className="form-control flex-1">
          <label className="label">
            <span className="text-xs">Nama Mobil</span>
          </label>
          <input
            onChange={(e) => {
              handleChange(e);
              if (e.target.value === "") {
                getCarList();
              }
            }}
            disabled={loading || !editMode || isNotSearchPage}
            type="text"
            id="name"
            name="name"
            placeholder="Ketik nama/tipe mobil"
            className="input input-bordered w-full text-xs rounded-sm without-ring"
          />
        </div>

        <div className="form-control  flex-1">
          <label className="label">
            <span className="text-xs">Kategori</span>
          </label>
          <select
            onChange={(e) => {
              handleChange(e);
              getCarList();
            }}
            id="category"
            name="category"
            disabled={loading || isNotSearchPage}
            className="select select-bordered w-full text-xs font-normal text-black rounded-sm appearance-none without-ring "
          >
            <option className="text-gray-400" disabled>
              Pilih Kapasitas Mobil
            </option>
            <option className="text-black" value="">
              Semua
            </option>
            <option className="text-black" value="2 - 4 orang">
              2 - 4 orang
            </option>
            <option className="text-black" value="4 - 6 orang">
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
            onChange={handleChange}
            id="price"
            name="price"
            disabled
            className="select select-bordered w-full text-xs font-normal text-black rounded-sm without-ring"
          >
            <option className="text-gray-400" disabled>
              Pilih Harga Sewa Per hari
            </option>
            <option className="text-black" value="">
              Semua
            </option>
            <option className="text-black" value="1">
              &lt; Rp 400.000
            </option>
            <option className="text-black" value="2">
              Rp 400.000 - Rp 600.000{" "}
            </option>
            <option className="text-black" value="3">
              &gt; Rp 600.000
            </option>
          </select>
        </div>
        <div className="form-control  flex-1">
          <label className="label">
            <span className="text-xs">Status</span>
          </label>
          <select
            onChange={(e) => {
              handleChange(e);
              getCarList();
            }}
            id="status"
            name="status"
            disabled={loading || !editMode || isNotSearchPage}
            className="select select-bordered w-full text-xs font-normal text-black rounded-sm without-ring"
          >
            <option className="text-gray-400" disabled>
              Pilih Status Mobil
            </option>
            <option className="text-black" value={true}>
              Tersedia
            </option>
            <option className="text-black" value={false}>
              Disewa
            </option>
          </select>
        </div>
        {!isNotSearchPage && (
          <Button
            disabled={loading}
            variant={editMode ? "contained" : "outlined"}
            color={editMode ? "primary" : "secondary"}
            type="submit"
          >
            {editMode ? "Cari Mobil" : "Edit"}
          </Button>
        )}
      </form>
    </>
  );
};

export default CarSearchModalForm;
