import React from "react";
import { FaBurger } from "react-icons/fa6";
import Link from "next/link"
import { BiCycling } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi"
import { HiBars3BottomRight } from "react-icons/hi2"


interface Props {
    openNav:()=> void;
}



const Nav = ({openNav}:Props) => {
  return (
    <div className="h-[12vh] bg-white">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between">
        {/* logo div */}
        <div className="flex items-center space-x-2">
          <FaBurger className="w-[1.7rem] h-[1.7rem] sm:w-[1.7rem] sm:h-[1.7rem] text-orange-500" />
          <h1 className="text-xl sm:text-3xl font-bold text-black">BurgerBite</h1>
        </div>
        {/*Nav Links*/}
        <ul className="hidden lg:flex items-center space-x-10">
            <li className="text-[20px] font-medium hover:text-red-600">
                <Link href="/">Home</Link>
            </li>
            <li className="text-[20px] font-medium hover:text-red-600">
                <Link href="/">Shop</Link>
            </li>
            <li className="text-[20px] font-medium hover:text-red-600">
                <Link href="/">Menu</Link>
            </li>
            <li className="text-[20px] font-medium hover:text-red-600">
                <Link href="/">Blog</Link>
            </li>
            <li className="text-[20px] font-medium hover:text-red-600">
                <Link href="/">Contact</Link>
            </li>
        </ul>
        {/* buttons */}
        <div className="flex items-center space-x-4">
        <button className="px-4 py-2 sm:px-6 sm:py-3 text-[12px] sm:text-[16px] bg-blue-950
             transition-all duration-200 hover:bg-red-600 flex items-center rounded-md space-x-2
             text-white">
    <span>
        <BiCycling className="w-[1.2rem] h-[1.3rem] sm:w-[1.5rem] sm:h-[1.5rem]"/>
    </span>
    <span className="font-bold">Order Now</span>
</button>
<button className="px-4 py-2 sm:px-6 sm:py-3 hover:bg-green-700 transition-all duration-200 bg-orange-600
            flex items-center rounded-md text-white">
    <BiShoppingBag className="w-[1.2rem] h-[1.2rem] sm:w-[1.5rem] sm:h-[1.5rem]"/>
</button>
            <HiBars3BottomRight onClick={openNav} className="lg:hidden w-[2rem] h-[2rem] text-black"/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
