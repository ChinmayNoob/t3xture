"use client"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black w-full pb-8">
            <div className="flex items-center justify-center">
                <p className="font-poppins uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-b from-transparent to-[rgba(239,236,255,0.45)] text-[50px] sm:text-[90px] md:text[110px] md:text-[120px] lg:text-[240px] leading-[0.9] whitespace-nowrap">
                    ACCELERATE
                </p>
            </div>

            <div className="w-full pt-4 text-center">
                <p className="text-white/70 text-sm font-poppins">
                    © {currentYear} T3xture. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
