import { MdCurrencyRupee } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
const Header = () => {
    return (
        <header className="flex w-full h-[100px] justify-around items-center font-sans">
            <div id="logo">
                <h1 className="text-4xl text-[#129d8e] ">Arun Sharma</h1>
            </div>
            <div id="link" className=" flex justify-around ">
                <ul className="flex gap-5 text-md justify-center items-center cursor-pointer ">
                    {/* Home Tab */}
                    <div
                        id="homeText"
                        className="hover:text-[#129d8e] flex justify-center items-center "
                    >
                        <li>Home</li>
                    </div>
                    {/* Template Tab */}
                    <div className="home relative flex justify-center items-center group">
                        <div
                            id="templateText"
                            className="flex justify-center items-center hover:text-[#129d8e]"
                        >
                            <li>Template</li>
                            <IoMdArrowDropdown />
                        </div>
                        <div className="homesublist absolute top-5 -left-5 bg-white w-[200px] hidden rounded-sm group-hover:flex  ">
                            <ul className="flex w-full flex-col items-start space-y-8 py-5 px-5">
                                <li className="mt-8 hover:text-[#129d8e]">
                                    Template Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Template Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Template Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Template Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Template Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Template Sublist
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Id Card Tab */}
                    <div className="IdCard relative flex justify-center items-center group  ">
                        <div
                            id="idCardtext"
                            className="flex justify-center items-center hover:text-[#129d8e]"
                        >
                            <li>Id Card</li>
                            <IoMdArrowDropdown />
                        </div>
                        <div className="homesublist absolute top-5 -left-5 bg-white w-[200px] hidden rounded-sm group-hover:flex">
                            <ul className="flex w-full flex-col items-start space-y-8 py-5 px-5">
                                <li className="mt-8 hover:text-[#129d8e]">
                                    Id Card Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Id Card Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Id Card Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Id Card Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Id Card Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Id Card Sublist
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Banner tab */}
                    <div className="home relative flex justify-center items-center group ">
                        <div
                            id="bannerText"
                            className="flex justify-center items-center hover:text-[#129d8e]"
                        >
                            <li>Banner</li>
                            <IoMdArrowDropdown />
                        </div>
                        <div className="homesublist absolute top-5 -left-5 bg-white w-[200px] hidden rounded-sm group-hover:flex">
                            <ul className="flex w-full flex-col items-start space-y-8 py-5 px-5">
                                <li className="mt-8 hover:text-[#129d8e]">
                                    Banner Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Banner Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Banner Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Banner Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Banner Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Banner Sublist
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* invoice tab */}
                    <div className="invoice relative flex justify-center items-center group">
                        <div
                            id="invoiceText"
                            className="flex justify-center items-center hover:text-[#129d8e]"
                        >
                            <li>Invoice</li>
                            <IoMdArrowDropdown />
                        </div>
                        <div className="homesublist absolute top-5 -left-5 bg-white w-[200px] hidden rounded-sm group-hover:flex">
                            <ul className="flex w-full flex-col items-start space-y-8 py-5 px-5">
                                <li className="mt-8 hover:text-[#129d8e]">
                                    Invoice Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invoice Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invoice Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invoice Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invoice Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invoice Sublist
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* font tab */}
                    <div className="home relative flex justify-center items-center group ">
                        <div
                            id="fonttext"
                            className="flex justify-center items-center hover:text-[#129d8e]"
                        >
                            <li>Font</li>
                            <IoMdArrowDropdown />
                        </div>
                        <div className="homesublist absolute top-5 -left-5 bg-white w-[200px] hidden rounded-sm group-hover:flex">
                            <ul className="flex w-full flex-col items-start space-y-8 py-5 px-5">
                                <li className="mt-8 hover:text-[#129d8e]">
                                    Font Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Font Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Font Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Font Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Font Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Font Sublist
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="home relative flex justify-center items-center  group">
                        <div
                            id="invitationtext"
                            className="flex justify-center items-center hover:text-[#129d8e]"
                        >
                            <li>Invitation Card </li>
                            <IoMdArrowDropdown />
                        </div>
                        <div className="homesublist absolute top-5 -left-5 bg-white w-[200px] hidden rounded-sm group-hover:flex">
                            <ul className="flex w-full flex-col items-start space-y-8 py-5 px-5">
                                <li className="mt-8 hover:text-[#129d8e]">
                                    Invitation Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invitation Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invitation Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invitation Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invitation Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invitation Sublist
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Account tab */}
                    <div className="home relative flex justify-center items-center  group">
                        <div
                            id="accounttext"
                            className="flex justify-center items-center hover:text-[#129d8e]"
                        >
                            <li>Account</li>
                            <IoMdArrowDropdown />
                        </div>
                        <div className="homesublist absolute top-5 -left-5 bg-white w-[200px] hidden rounded-sm group-hover:flex">
                            <ul className="flex w-full flex-col items-start space-y-8 py-5 px-5">
                                <li className="mt-8 hover:text-[#129d8e]">
                                    Invitation Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invitation Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invitation Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invitation Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invitation Sublist
                                </li>
                                <li className="hover:text-[#129d8e]">
                                    Invitation Sublist
                                </li>
                            </ul>
                        </div>
                    </div>
                </ul>

                {/* Cart things */}
                <div
                    id="cart"
                    className="flex gap-10 justify-center items-center"
                >
                    <button className="bg-[#129d8e] ml-10 text-[20px] hover:bg-black cursor-pointer rounded-sm text-white px-5 py-2  ">
                        Order Design
                    </button>
                    <div
                        id="rupey"
                        className="flex justify-center items-center gap-5  "
                    >
                        <div className="rupey flex justify-center items-center  hover:text-[#129d8e] ">
                            <MdCurrencyRupee className="cursor-pointer" />
                            <span>0</span>
                        </div>
                        <IoBag className="cursor-pointer hover:text-[#129d8e]" />
                        <IoSearch className="cursor-pointer hover:text-[#129d8e]" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
