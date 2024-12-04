/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
    const { productId } = useParams();

    const [productdata, setProductdata] = useState(null);

    const { products, currency } = useContext(ShopContext);
    const [images, setImages] = useState("");
    const [size, setSize] = useState("");

    const findProductbyID = () => {
        const product = products.find((product) => product._id === productId);
        if (product) {
            setProductdata(product);
            setImages(product.image[0]);
        }
    };

    useEffect(() => {
        findProductbyID();
    }, [productId]);

    return productdata ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            {/* product data */}
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                {/* product images */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        {productdata.image.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                                alt=""
                                onClick={() => setImages(img)}
                            />
                        ))}
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img className="w-full h-auto" src={images} alt="" />
                    </div>
                </div>

                {/* product details */}

                <div className="flex-1">
                    <h1 className="text-2xl font-medium mt-2 ">
                        {productdata.name}
                    </h1>

                    <div className="flex items-center gp1 mt-2 ">
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img
                            src={assets.star_dull_icon}
                            alt=""
                            className="w-3 5"
                        />
                        <p className="pl-2">(1234)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">
                        {currency} {productdata.price}
                    </p>
                    <p className="mt-5 text-gray-500 md:4/5">
                        {productdata.description}
                    </p>
                    <div className="flex flex-col gap-4 my-8 ">
                        <p className="">Select Size</p>
                        <div className="flex gap-2 ">
                            {productdata.sizes.map((item, index) => (
                                <button
                                    className={`border py-2 px-4 bg-gray-100 cursor-pointer ${
                                        item === size ? "border-orange-500" : ""
                                    } `}
                                    key={index}
                                    onClick={() => setSize(item)}
                                >
                                    {" "}
                                    {item}{" "}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
                        Add to cart
                    </button>
                    <hr className="mt-8 sm:w-4/5" />
                    <div className="product-detaile mt-5 text-sm text-gray-500 ">
                        <p>100% Original Product.</p>
                        <p>Cash on delivery is available on this product</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            {/* Description and revieve section  */}
            <div className="mt-20">
                <div className="flex ">
                    <p className="border p-2">Description</p>
                    <p className="border p-2">Reviews (122)</p>
                </div>
                <div className="detail mt-5 flex flex-col gap-4 text-gray-500 border p-5">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam esse commodi vitae dolore rerum iusto, optio autem
                        nostrum eligendi velit nisi non minima animi iste,
                        libero sed assumenda quia sint deserunt delectus fuga
                        magni! Harum exercitationem accusamus, sit ex possimus
                        quibusdam blanditiis cumque beatae eligendi cum dicta
                        animi praesentium nam sint consequatur nisi ad eum
                        aperiam atque esse autem eos? Sapiente quod odio facilis
                        reprehenderit laboriosam earum ipsum ducimus adipisci
                        sequi hic. Est, enim quaerat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nulla, architecto, quidem corrupti perspiciatis
                        eveniet earum soluta quaerat sequi quis excepturi
                        placeat harum atque vel iusto inventore unde omnis quam
                        beatae.
                    </p>
                </div>
            </div>

            {/*----------------------------Displya related product-------------------- */}
            <RelatedProducts
                category={productdata.category}
                subCategory={productdata.subCategory}
            />
        </div>
    ) : (
        <div className="opacity-0">Loading...</div>
    );
}

export default Product;
