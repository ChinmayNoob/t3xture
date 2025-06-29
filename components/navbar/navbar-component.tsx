"use client"

import Image from "next/image";
import NavbarLogo from "../logo";
import MakeBudge from "../ui/buttons/budge-button";
import MobileNavigation from "./mobile-navigation";
import NavbarNavigation from "./navigation";

const NavbarComponent = () => {
    return (
        <>
            <header className="w-full bg-black py-6 relative !z-10 overflow-hidden">
                <div className="hidden xl:block absolute top-0 right-0 w-full h-full">
                    <Image
                        src="/assets/blurs/purple.png"
                        alt="Blur Roxo"
                        width={64}
                        height={64}
                        className="absolute top-[-100px] right-[-150px] !w-[600px] h-[600px] object-cover opacity-60 mix-blend-lighten"
                    />
                </div>
                <div className="flex flex-wrap ml-10 md:ml-0 gap-4 xs:gap-0 items-center justify-between xl:justify-between py-4 h-fit px-4 md:px-24 ">
                    <NavbarLogo />
                    <div className="block xl:hidden ">
                        <MobileNavigation />
                    </div>

                    <div className="hidden xl:flex items-center gap-4">
                        <NavbarNavigation />
                    </div>

                    <div className="gap-4 hidden lg:flex">
                        <MakeBudge />
                    </div>
                </div>
            </header>
        </>
    );

}

export default NavbarComponent;
