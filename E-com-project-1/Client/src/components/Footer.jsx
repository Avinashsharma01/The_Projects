import { assets } from "../assets/assets";

function Footer() {
    return (
        <div>
            <div className=" footer flex  flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-gray-600">
                <div className="w-full   text-gray-600">
                    <img src={assets.logo} className="w-32 mb-5" alt="" />
                    <p className="w-full md:w-2/3 text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur illo laborum aperiam quo eveniet. Sapiente,
                        veniam! Cum laudantium ex aspernatur quia quisquam ipsum
                        aut non qui reprehenderit! Sequi, voluptatem
                        reprehenderit!
                    </p>
                </div>

                <div className="w-full  text-gray-600">
                    <h1 className="text-black mb-5 text-2xl">COMPANY</h1>
                    <ul className="flex  flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="w-full  text-gray-600">
                    <h1 className="text-black  mb-5 text-2xl">GET IN TOUCH</h1>
                    <ul className="flex  flex-col gap-1 text-gray-600">
                        <li>+91 6201693634</li>
                        <li>Avinashsharma31384@gmail.com</li>
                        <a
                            href="https://www.instagram.com/avinash_sharma01010/"
                            target="_blank"
                        >
                            <li>instagram</li>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/avinash-sharma-1a4251244/"
                            target="_blank"
                        >
                            <li>Linkedin</li>
                        </a>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <h1 className="text-sm text-center py-5">
                    Copyright 2024@ greatstack.dev - All Right Reserved.
                </h1>
            </div>
        </div>
    );
}

export default Footer;
