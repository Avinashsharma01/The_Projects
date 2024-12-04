import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
function BestSeller() {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestSeller = products.filter((product) => product.bestseller);
        setBestSeller(bestSeller.slice(0, 5));
    }, [products]);
    return (
        <div className=" my-10">
            <div className="text-center text-3xl py-8">
                <Title text1={"BEST"} text2={"SELLERS"}></Title>
                <p className="w-3/4 m-auto text-sm md:text-base text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam, illo?
                </p>
            </div>

            {/* Best sellers products display here  */}

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {bestSeller.map((product, index) => (
                    <ProductItem
                        key={index}
                        id={product._id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default BestSeller;
