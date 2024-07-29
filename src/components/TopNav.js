"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const TopNav = () => {
  // const [open,setOpen] = useState(false)
  return (
    <div className="bg-[#f0f1f1] ">
      <div className="w-[1150px] mx-auto">
        <div className="text-xs flex items-center justify-between h-[34px]">
          <ul className="flex items-center gap-[34px]">
            <li className="text-primary cursor-pointer flex items-center gap-1 relative group">
              English{" "}
              <IoIosArrowDown className="group-hover:rotate-180 duration-150" />
            </li>
            <li className="hover:text-primary  cursor-pointer duration-100">
              Help Center
            </li>
            <li className="hover:text-primary  cursor-pointer duration-100">
              Helpline: 0964781656
            </li>
          </ul>
          <ul className="flex items-center gap-[34px]">
            <li className="hover:text-primary  cursor-pointer duration-100">
              Become a Seller
            </li>
            <li className="hover:text-primary  cursor-pointer duration-100">
              Order Track
            </li>
            <li className="text-primary cursor-pointer ">Sing up/Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
