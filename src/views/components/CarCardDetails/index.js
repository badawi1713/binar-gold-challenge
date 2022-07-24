import React from "react";
import { FiUsers } from "react-icons/fi";

const CarCardDetails = () => {
  return (
    <section className="container mx-auto mb-24 w-full max-w-6xl px-4 lg:p-0">
      <div className="w-full flex flex-col-reverse md:flex-row justify-between gap-8 items-start ">
        <div className="flex flex-col gap-4 w-full md:w-3/5 border p-6 bg-white shadow-sm">
          <h2 className="text-sm font-bold">Tentang Paket</h2>
          <div>
            <h2 className="text-sm font-bold mb-2">Include</h2>
            <ul className="list-inside">
              {[1, 2, 3, 4, 5].map((item) => (
                <li
                  key={item}
                  className="list-disc text-sm leading-6 text-neutral-03 font-bold"
                >
                  Apa saja yang termasuk dalam paket misal durasi max 12 jam
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold mb-2">Exclude</h2>
            <ul className="list-inside">
              {[1, 2, 3, 4, 5].map((item) => (
                <li
                  key={item}
                  className="list-disc text-sm leading-6 text-neutral-03 font-bold"
                >
                  Apa saja yang termasuk dalam paket misal durasi max 12 jam
                </li>
              ))}
            </ul>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border-none w-auto -mt-5"
          >
            <input type="checkbox" className="peer p-0" />
            <div className="collapse-title text-sm font-bold flex items-center pl-0 py-0 pr-10">
              Refund, Reschedule, Overtime
            </div>
            <div className="collapse-content p-0 -mt-2">
              <ul className="list-inside">
                {[1, 2, 3].map((item) => (
                  <li
                    key={item}
                    className="list-disc text-sm leading-6 text-neutral-03 font-bold"
                  >
                    Tidak termasuk biaya makan sopir Rp 75.000/hari
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-2/5 border p-6 bg-white shadow-sm">
          <figure className="lg:w-72 mb-6 mx-auto">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1655268790869-Innova.png?alt=media"
              }
              alt="Shoes"
              width={"100%"}
            />
          </figure>

          <div>
            <h2 className="text-sm font-bold mb-2">Innova</h2>
            <p className="flex items-center text-sm gap-2 text-neutral-03 font-bold">
              <FiUsers /> 2-6 orang
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold">Total</h2>
            <p className="text-sm font-bold">Rp 500.000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarCardDetails;
