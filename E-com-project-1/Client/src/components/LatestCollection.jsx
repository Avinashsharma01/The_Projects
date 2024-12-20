import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
// Desc: LatestCollection component
function LatestCollection() {
    const { products } = useContext(ShopContext);
    // console.log(products);
    const [LatestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl ">
                <Title text1="Latest" text2="Collection" />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae ea maiores error quasi quia aliquam quo facere
                    sapiente laboriosam debitis?
                </p>
            </div>
            {/* Render here all product */}
            <div className="grid grid-cols-2 sm:grid-cols md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {LatestProducts.map((product, index) => (
                    <ProductItem
                        key={index}
                        id={product._id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default LatestCollection;
