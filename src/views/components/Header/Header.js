import "./Header.css";

const Header = () => {
  return (
    <header className="header__container relative h-auto flex flex-col xl:block">
      <div className="container mx-auto relative xl:pt-32 xl:pb-24 px-4 mb-8">
        <div className="flex flex-col items-start gap-4">
          <h1 className=" text-4xl font-bold header__title max-w-xl">
            Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p className="text-sm font-light max-w-md">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas{" "}
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <button className="bg-green-500">Mulai Sewa Mobil</button>
        </div>
      </div>
      <img
        alt="header-car"
        width={"100%"}
        src="assets/images/header-image.png"
        className="w-full xl:w-auto lg:h-auto xl:absolute xl:bottom-0 xl:right-0 "
      />
    </header>
  );
};

export default Header;
