import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="h-20 bg-[#00000033] backdrop-blur-sm flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 py-[13px]">
        <Image src="/Logo.svg" alt="logo" width={80} height={50} />
        <div className="hidden md:flex gap-4 lg:gap-7 items-center font-normal text-sm sm:text-base md:text-lg text-[#E4E6F2] leading-[30px] tracking-tight">
          <span className="hover:cursor-pointer">About</span>
          <span className="hover:cursor-pointer">Service</span>
          <span className="hover:cursor-pointer">Process</span>
          <span className="hover:cursor-pointer">Work</span>
          <span className="hover:cursor-pointer">Pricing</span>
          <span className="hover:cursor-pointer">FAQs</span>
        </div>
        <Button
          variant={"outline"}
          className="hidden sm:block w-24 sm:w-32 h-12 sm:h-14 rounded-xl bg-transparent border-[#6881FF] font-semibold text-sm sm:text-lg text-[#FFFFFF] leading-[30px] tracking-tight"
        >
          Book a call
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
