import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <header>
        <nav className="bg-[#163ba4] w-full h-[80px] flex justify-around items-center text-white">
            <div className="logo">
                <h1 className="text-3xl">Avinash Sharma</h1>
            </div>
            <div className="link hidden md:block">
                <ul className="flex justify-around items-center ">
                    <li className="p-5 text-lg" ><NavLink to="/">Home</NavLink></li>
                    <li className="p-5 text-lg" ><NavLink to="/about">About</NavLink></li>
                    <li className="p-5 text-lg" ><NavLink to="/contact">Contact</NavLink></li>
                    <li className="p-5 text-lg" ><NavLink to="/services">Services</NavLink></li>
                    <li className="p-5 text-lg" ><NavLink to="/myhandles">MyHandles</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header