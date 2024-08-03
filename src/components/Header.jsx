import profilePicture from "../assets/profilePicture.svg";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-end items-center h-[64px] bg-white">
      <div className="flex px-10 gap-4">
        <div className="hidden sm:flex flex-col justify-center text-sm">
          <h3>Thomas Andree</h3>
          <h3 className="text-[#637381]">Admin</h3>
        </div>
        <div className="flex items-center gap-4">
          <img src={profilePicture} />
          <ChevronDown size={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;
