import { faqData } from "helpers/data";
import React from "react";

const Faq = () => {
  return (
    <section className="container px-4 mb-16 lg:mb-36 mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="max-w-md lg:mr-32">
          <h2 className="text-2xl font-bold leading-9 mb-4 max-w-lg text-center lg:text-left">
            Frequently Asked Question
          </h2>
          <p className="text-sm font-light leading-5 mb-6 lg:mb-4 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className=" max-w-2xl w-full">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              tabIndex={index}
              className="collapse collapse-arrow border bg-white border-gray-300 rounded-md w-full mb-4"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-sm font-bold flex items-center py-4 px-6">
                {item.title}
              </div>
              <div className="collapse-content px-6">
                <p className="text-sm font-normal leading-5 text-gray-500">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
