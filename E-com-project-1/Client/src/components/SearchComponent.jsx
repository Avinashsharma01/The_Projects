/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function SearchComponent() {
    const { search, setSearch, darkMode, setDarkMode } =
        useContext(ShopContext);

    return (
        <>
            <div className="w-full h-20  flex justify-center items-center">
                <input
                    type="text"
                    className="border text-black border-gray-700 px-5 py-[7.08px] outline-none w-2/4"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="bg-gray-700 text-white px-5 py-2">
                    Search
                </button>
            </div>
        </>
    );
}

export default SearchComponent;
