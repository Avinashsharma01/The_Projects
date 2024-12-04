import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { ShopContext } from "./context/ShopContext";

function App() {
    const { darkMode } = useContext(ShopContext);

    return (
        <>
            {/* px-4 sm:px-[5vm] md:px-[7vw] lg:px-[9vw] */}
            <div
                className={`px-4  sm:px-[5vm] md:px-[7vw] lg:px-[9vw] ${
                    darkMode ? `bg-black text-white` : ""
                } `}
            >
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/collection" element={<Collection />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/place-order" element={<PlaceOrder />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
