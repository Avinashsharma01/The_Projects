/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const ShopContext = createContext();
import { products } from "../assets/assets";

// ShopContextProvider component to provide context values to its children
const ShopContextProvider = (props) => {
    const currency = "₹";
    const delivery_charges = 10;

    const [search, setSearch] = useState("");

    const [darkMode, setDarkMode] = useState(false);
    // Context value containing products, currency, and delivery charges
    const value = {
        products,
        currency,
        delivery_charges,
        darkMode,
        setDarkMode,
        search,
        setSearch,
    };

    return (
        // Providing the context value to the children components
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
