/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

function Collection() {
    const { products } = useContext(ShopContext);
    const [filter, setFilter] = useState(false);
    const [filterData, setFilterData] = useState([]);

    const [category, setCategory] = useState([]);
    const [subCategory, setsubCategory] = useState([]);
    const [sortType, setSortType] = useState("Relavant");

    const { search } = useContext(ShopContext);

    // Toggles the selected category in the filter
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(category.filter((item) => item !== e.target.value));
        } else {
            setCategory([...category, e.target.value]);
        }
    };

    // Toggles the selected sub-category in the filter
    const togglesubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setsubCategory(
                subCategory.filter((item) => item !== e.target.value)
            );
        } else {
            setsubCategory([...subCategory, e.target.value]);
        }
    };

    // Filters the products based on selected categories and sub-categories
    const filterProduct = () => {
        let tempData = products.slice();

        if (search) {
            tempData = tempData.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category.length > 0) {
            tempData = tempData.filter((product) =>
                category.includes(product.category)
            );
        }
        if (subCategory.length > 0) {
            tempData = tempData.filter((product) =>
                subCategory.includes(product.subCategory)
            );
        }
        setFilterData(tempData);
    };

    // Sorts the filtered products based on the selected sort type
    const sortProduct = () => {
        let fdcopy = filterData.slice();
        switch (sortType) {
            case "Low-high":
                fdcopy.sort((a, b) => a.price - b.price);
                console.log("Low-high");
                break;
            case "High-low":
                fdcopy.sort((a, b) => b.price - a.price);
                console.log("High-low");
                break;
            default:
                filterProduct();
                console.log("Relavant");
                return;
        }
        setFilterData(fdcopy);
    };

    // useEffect hook to sort products whenever sortType changes
    useEffect(() => {
        sortProduct();
    }, [sortType]);

    // useEffect hook to filter products whenever category or subCategory changes
    useEffect(() => {
        filterProduct();
    }, [category, subCategory, search]);

    return (
        <div
            className={`flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t`}
        >
            {/* Fillter option */}

            <div className="min-w-60">
                <p
                    onClick={() => setFilter(!filter)}
                    className="my-2 text-xl flex items-center cursor-pointer gap-2 "
                >
                    {" "}
                    <span>Filter</span>
                    <img
                        src={assets.dropdown_icon}
                        className={`h-3 sm:hidden  ${
                            filter ? "rotate-90" : ""
                        } `}
                        alt=""
                    />
                </p>
                {/* Category Filter  */}
                <div
                    className={`flex flex-col  border border-gray-300 pl-5 py-3 mt-6 ${
                        filter ? " " : "hidden"
                    } sm:block`}
                >
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className=" flex  flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input
                                type="checkbox"
                                className="w-3"
                                value={"Men"}
                                onChange={toggleCategory}
                            />
                            <span>Men</span>
                        </p>
                        <p className="flex gap-2">
                            <input
                                type="checkbox"
                                className="w-3"
                                value={"Women"}
                                onChange={toggleCategory}
                            />
                            <span>Women</span>
                        </p>
                        <p className="flex gap-2">
                            <input
                                type="checkbox"
                                className="w-3"
                                value={"Kids"}
                                onChange={toggleCategory}
                            />
                            <span>Kids</span>
                        </p>
                    </div>
                </div>

                <div
                    className={`flex flex-col  border border-gray-300 pl-5 py-3 mt-6 ${
                        filter ? " " : "hidden"
                    } sm:block`}
                >
                    <p className="mb-3 text-sm font-medium">TYPE</p>
                    <div className=" flex  flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input
                                type="checkbox"
                                className="w-3"
                                value={"Topwear"}
                                onChange={togglesubCategory}
                            />
                            <span>Topwear</span>
                        </p>
                        <p className="flex gap-2">
                            <input
                                type="checkbox"
                                className="w-3"
                                value={"Bottomwear"}
                                onChange={togglesubCategory}
                            />
                            <span>Bottomwear</span>
                        </p>
                        <p className="flex gap-2">
                            <input
                                type="checkbox"
                                className="w-3"
                                value={"Winterwear"}
                                onChange={togglesubCategory}
                            />
                            <span>Winterwear</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Product Display right side  */}

            <div className="flex-1 ">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={"ALL"} text2={"COLLECTION"} />
                    {/* Product sort */}
                    <select
                        name=""
                        id=""
                        className="border-2 border-gray-300 text-sm px-2"
                        onChange={(e) => setSortType(e.target.value)}
                    >
                        <option value="Relavant">Sort by: Relavent</option>
                        <option value="Low-high">Sort by: Low to high</option>
                        <option value="High-low">Sort by: High to low</option>
                    </select>
                </div>

                {/* map product */}
                <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-4">
                    {filterData.map((product, index) => (
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
        </div>
    );
}

export default Collection;
