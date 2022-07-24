import { Link } from "react-router-dom";
import Button from "../Button/Button";

const CarList = () => {
  return (
    <section className="container mx-auto mb-24 px-4">
      {/* <div className="flex flex-col items-center justify-center">
        <div className=" w-60 md:w-80 -mt-8 rounded-full">
          <img
            src="assets/images/error.png"
            alt="error"
            width={"100%"}
          />
        </div>
        <h1 className="text-3xl mb-2 text-gray-700">
          Maaf, sedang terjadi kesalahan!
        </h1>
        <p className="text-lg text-gray-500">
          Silakan coba kembali.
        </p>
      </div> */}
      {/* <div className="flex flex-col items-center justify-center">
        <div className=" w-60 md:w-80 -mt-8 rounded-full">
          <img
            src="assets/images/empty-search.png"
            alt="empty-search"
            width={"100%"}
          />
        </div>
        <h1 className="text-3xl mb-2 text-gray-700">
          Maaf, pencarianmu tidak ditemukan atau tidak tersedia!
        </h1>
        <p className="text-lg text-gray-500">
          Silakan cari dengan kata kunci yang berbeda.
        </p>
      </div> */}
      <div className="flex justify-center lg:justify-between flex-col lg:flex-row gap-6 items-center md:items-start">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="p-6 flex flex-col w-96 bg-white shadow-sm border rounded-lg mx-auto"
          >
            <figure className="px-4 py-8 mb-4">
              <img
                src={
                  item
                    ? "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1655268790869-Innova.png?alt=media"
                    : "assets/images/not-found.png"
                }
                alt="Shoes"
                width={"100%"}
              />
            </figure>
            <div className="flex flex-col">
              <h2 className="leading-5 font-normal text-sm">Innova</h2>
              <p className="text-base leading-6 font-bold my-2">Rp 500.000</p>
              <p className="text-sm font-bold leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="mt-6">
                <Link to={`/detail-mobil/${item}`}>
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
