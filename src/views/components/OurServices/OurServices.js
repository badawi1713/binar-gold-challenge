const OurServices = () => {
  return (
    <section className="px-4 my-24 container mx-auto flex flex-col lg:flex-row justify-center gap-14 lg:gap-24">
      <img
        alt="services-banner"
        src="assets/images/service-image.png"
        width={"460px"}
      />
      <article className="flex flex-col justify-start">
        <h2 className="text-2xl font-bold leading-9 mb-6 max-w-lg">
          Best Car Rental for any kind of trip in (Lokasimu)!
        </h2>
        <p className="text-sm font-light leading-5 mb-4 max-w-md">
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-light leading-5">
            Sewa Mobil dengan Supir di Bali 12 Jam
          </p>
          <p className="text-sm font-light leading-5">
            Sewa Mobil dengan Supir di Bali 12 Jam
          </p>
          <p className="text-sm font-light leading-5">
            Sewa Mobil dengan Supir di Bali 12 Jam
          </p>
          <p className="text-sm font-light leading-5">
            Sewa Mobil dengan Supir di Bali 12 Jam
          </p>
        </div>
      </article>
    </section>
  );
};

export default OurServices;
