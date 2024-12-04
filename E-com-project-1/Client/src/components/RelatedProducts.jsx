/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice();
            productCopy = productCopy.filter(
                (item) => category === item.category
            );
            productCopy = productCopy.filter(
                (item) => subCategory === item.subCategory
            );
            setRelated(productCopy.slice(0, 5));
        }
    }, [products, category, subCategory]);
    return (
        <div>
            <div className="title text-center text-3xl">
                <Title text1={"RELATED"} text2={"PRODUCTS"} />
            </div>
            <div className="relatedProduct grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {related.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
