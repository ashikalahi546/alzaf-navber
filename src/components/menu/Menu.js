import React, { useState } from "react";
import { menuData } from "./../../data/MenuData";
import { MdOutlineChevronRight } from "react-icons/md";

const Menu = () => {
  const [hover, setHover] = useState(null);
  return (
    <ul className="bg-white h-[355px] w-[230px] text-xs text-livebg py-2.5 flex flex-col gap-y-[10px]">
      {menuData?.map((menu, index) => (
        <li
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(null)}
          key={index}
          className="cursor-pointer pl-4"
        >
          <div className="flex items-center justify-between group relative ease-in-out duration-300 hover:text-primary">
            <span className="group-hover:text-primary">{menu?.title}</span>
            {menu?.submenu && (
              <MdOutlineChevronRight
                className={` mr-2 z-20  text-livebg ${
                  menu?.submenu
                    ? "transition-transform duration-300 ease-in-out group-hover:rotate-180 group-hover:text-primary"
                    : ""
                } `}
              />
            )}
          </div>
          {hover === index && menu?.submenu && (
            <ul className="bg-white absolute left-[100%] h-[355px] top-0 w-[230px] flex flex-col gap-y-[10px] py-2.5 duration-300">
              {menu?.submenu?.map((sub, subIndex) => (
                <li key={subIndex}>
                  <span className="pl-4 hover:text-primary ease-in-out transform duration-300">
                    {sub?.title}
                  </span>
                </li>
              ))}
              <div className="h-[355px] w-[1px] bg-gray-100 absolute top-0"></div>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
