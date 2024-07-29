import Image from "next/image";
import Cloud from "/public/images/cloud.webp";
import { GoSearch } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";

const Navber = () => {
  return (
    <div className="w-[1150px] mx-auto">
      <div className="mt-[17px] flex items-center gap-10">
        <Image src="/images/logo.webp" width={129} height={38} alt="loading" className="cursor-pointer max-w-[100%]" />
        <div className="bg-[#EFF0F5] hover:shadow-lg w-full rounded-[10px] h-11 flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="outline-none px-4 py-3 w-full bg-transparent"
          />
          <button className="bg-primary py-3 px-4 rounded-[10px] text-white text-lg">
            <GoSearch />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 bg-[#f5f5f5] rounded-lg hover:bg-primary text-[#707070] hover:text-white">
            <HiOutlineUser />
          </button>
          <div className="relative">
            <button className="p-2 bg-[#f5f5f5] rounded-lg hover:bg-primary text-[#707070] hover:text-white">
              <CiHeart />
            </button>
            <div className="bg-primary text-white size-[17px] text-xs font-semibold rounded-full flex items-center justify-center cursor-pointer absolute -top-2 right-0">
              0
            </div>
          </div>
          <div className="relative">
            <button className="p-2 bg-[#f5f5f5] rounded-lg hover:bg-primary text-[#707070] hover:text-white">
              <PiShoppingCartLight />
            </button>
            <div className="bg-primary text-white size-[17px] text-xs font-semibold rounded-full flex items-center justify-center cursor-pointer absolute -top-2 right-0">
              0
            </div>
          </div>
        </div>
        <Image src={Cloud} alt="loading" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navber;
