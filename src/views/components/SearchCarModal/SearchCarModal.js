import { useState } from "react";
import SearchCarModalForm from "./SearchCarModalForm";
import "./style.css";
const SearchCarModal = () => {
  const [onFocus, setOnFocus] = useState(false);

  const openFormFocus = () => {
    setOnFocus(true);
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  };

  const closeFormFocus = () => {
    setOnFocus(false);
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
  };

  return (
    <>
      <section
        onClick={openFormFocus}
        tabIndex={0}
        id="search-form-container"
        className="py-6 bg-white shadow-md w-full max-w-6xl mx-auto -mt-8 xl:-mt-16 mb-24 relative z-20 rounded-lg"
      >
        <SearchCarModalForm />
      </section>
      <div className={onFocus ? "overlay" : ""} onClick={closeFormFocus} />
    </>
  );
};

export default SearchCarModal;
