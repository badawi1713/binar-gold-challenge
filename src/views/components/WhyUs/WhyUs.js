import { whyUsData } from "helpers/data";
import React from "react";

const WhyUs = () => {
  return (
    <section id="our-services" className="mb-24 mx-auto px-4 container">
      <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
        Why Us?
      </h2>
      <p className="text-sm font-bold mb-10 text-center lg:text-left">
        Mengapa harus memilih Binar Rental Car?
      </p>
      <div className="flex gap-8 flex-col lg:flex-row justify-between">
        {whyUsData?.map((item) => (
          <div key={item.title} className="bg-white p-6 flex flex-col gap-4 border-2 rounded-lg lg:h-48 lg:w-72 items-baseline">
            <div className={` p-2 ${item.iconBackgroundColor} rounded-full text-white`}>
              {item.icon}
            </div>
            <h3 className="font-bold text-base">Mobil Lengkap</h3>
            <p className="text-sm font-light">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
