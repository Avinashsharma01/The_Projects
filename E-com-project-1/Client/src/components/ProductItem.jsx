/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function ProductItem({ id, name, price, image }) {
    const { currency } = useContext(ShopContext);

    return (
        <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
            <div className="overflow-hidden">
                <img
                    src={image[0]}
                    // hover:scale-110
                    className=" hover:scale-110 -z-10 transition ease-in-out "
                    alt=""
                />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">
                {" "}
                {currency}
                {price}
            </p>
        </Link>
    );
}

export default ProductItem;