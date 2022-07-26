import CarsContext from "context/cars/CarsContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import CurrencyFormat from "../CurrencyFormat";

const CarList = () => {
  const { loading, carsData, error } = useContext(CarsContext);

  const isEmpty = carsData.length < 1;

  if (loading) {
    return (
      <section className="container mx-auto mb-24 px-4">
        <div className="flex justify-center lg:justify-between flex-col lg:flex-row gap-6 items-center md:items-start">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="p-6 flex flex-col w-full md:w-96 bg-white shadow-sm border rounded-lg mx-auto animate-pulse"
            >
              <div className="px-4 py-8 mb-4">
                <div className=" h-32 w-full bg-slate-400"></div>
              </div>
              <div className="flex flex-col">
                <div className=" h-2 w-24 bg-slate-400"></div>
                <div className=" h-2 w-32 bg-slate-400 my-2"></div>
                <div className=" h-2 w-32 bg-slate-400"></div>
                <div className="mt-6">
                  <div className=" h-12 w-full bg-slate-400"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (isEmpty) {
    <div className="flex flex-col items-center justify-center">
      <div className=" w-60 md:w-80 -mt-8 rounded-full">
        <img
          src="assets/images/empty-search.png"
          alt="empty-search"
          width={"100%"}
        />
      </div>
      <h1 className="text-lg md:text-3xl mb-2 text-gray-700 text-center">
        Maaf, daftar mobil tidak ditemukan atau tidak tersedia!
      </h1>
      <p className="text-base md:text-lg text-gray-500 text-center">
        Silakan cari dengan kata kunci yang berbeda.
      </p>
    </div>;
  }

  if (error) {
    <div className="flex flex-col items-center justify-center">
      <div className=" w-60 md:w-80 -mt-8 rounded-full">
        <img src="assets/images/error.png" alt="error" width={"100%"} />
      </div>
      <h1 className="text-lg md:text-3xl mb-2 text-gray-700 text-center">
        Maaf, sedang terjadi kesalahan!
      </h1>
      <p className="text-base md:text-lg text-gray-500 text-center">
        Silakan coba kembali.
      </p>
    </div>;
  }

  return (
    <section className="container mx-auto mb-24 px-4">
      <div className="flex justify-center lg:justify-between flex-col lg:flex-row flex-wrap gap-6 items-center sm:items-stretch">
        {carsData.map((item) => (
          <div
            key={item.id}
            className="p-6 flex flex-col w-full md:w-96 bg-white shadow-sm border rounded-lg mx-auto"
          >
            <figure className="px-4 py-8 mb-4 w-full flex-1">
              <img
                src={
                  item?.image ? item?.image : "assets/images/no-image-found.png"
                }
                alt="car-data"
                width={"100%"}
              />
            </figure>
            <div className="flex flex-col">
              <h2 className="leading-5 font-normal text-sm">{item.name}</h2>
              <p className="text-base leading-6 font-bold my-2">
                <CurrencyFormat value={item?.price || 0} />
              </p>
              <p className="text-sm font-bold leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mt-6">
                <Link to={`/detail-mobil/${item.id}`}>
                  <Button variant="contained" color="primary" fullWidth>
                    Pilih Mobil
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarList;
