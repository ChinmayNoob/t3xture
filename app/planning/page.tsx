'use client'

import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgArrowsExpandUpRight, CgWebsite } from 'react-icons/cg';
import { FaCodeBranch } from 'react-icons/fa';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { IoMdHelp } from 'react-icons/io';
import { LiaNetworkWiredSolid } from 'react-icons/lia';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdOutlineSwitchAccessShortcutAdd } from 'react-icons/md';
import { PiHandSwipeRightBold } from 'react-icons/pi';
import { TbBrand4Chan, TbBrandAzure, TbHandClick, TbMessage2Star } from 'react-icons/tb';


export default function Planning() {
    const [isMounted, setIsMounted] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("branding");
    const [hiddenTooltips, setHiddenTooltips] = useState<{
        [key: number]: boolean;
    }>({});
    const [tooltipHoveredIndex, setTooltipHoveredIndex] = useState<number | null>(
        null
    );
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        setIsMounted(true);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    if (!isMounted) {
        return null;
    }

    const handleTooltipNo = (index: number) => {
        setHiddenTooltips((prev) => ({
            ...prev,
            [index]: true,
        }));
        setTimeout(() => {
            setHiddenTooltips((prev) => ({
                ...prev,
                [index]: false,
            }));
        }, 300000);
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2, ease: 'easeInOut' } },
        tap: { scale: 0.95 },
    };

    const iconVariants = {
        hover: { rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }
    }

    const tooltipVariants = {
        hidden: { opacity: 0, y: -10, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } }
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 0.6 } }
    }

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } }
    }

    const projects = {
        branding: [
            "/assets/projects/tonemaki.png",
            "/assets/projects/awp.png",
            "/assets/projects/greenspace.png",
            "/assets/projects/moore.png",


        ],
        ecommerce: [
            "/assets/projects/brewdistrict.png",
            "/assets/projects/sol.png",
            "/assets/projects/postfamiliar.png",
            "/assets/projects/mschf.png",
        ],
        finance: [
            "/assets/projects/xapo.png",
            "/assets/projects/composer.png",
            "/assets/projects/kiln.png",
            "/assets/projects/flayks.png",
        ],
        startups: [
            "/assets/projects/euveka.png",
            "/assets/projects/raycast.png",
            "/assets/projects/method.png",
            "/assets/projects/mainframe.png",

        ]

    };


    return (
        <motion.section
            className='relative flex flex-col w-full min-h-screen'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.8 }}
            >
                <p className="font-poppins uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-b from-transparent to-[#4F46E8] text-[90px] sm:text-[110px] md:text-[300px] lg:text-[316px] leading-[0.9] whitespace-nowrap">
                    T3XTURE
                </p>
            </motion.div>

            <div className='flex flex-col items-center mt-[-10px] sm:mt-[-20px] md:mt-[-40px] lg:mt-[-140px] py-4 px-4 z-10'>
                <motion.h1
                    className='font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-8xl font-bold text-white max-w-6xl text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Transform Your <span className='text-indigo-700'>Ideas</span>
                    <br /> into <span className='text-indigo-700'>Digital Reality</span>
                </motion.h1>
                <motion.p
                    className='text-center text-md z-50 font-dmsans text-[#a3a3a3] max-w-4xl mb-4 font-normal mt-4'
                >
                    Are you ready to have a website that will{" "}
                    <span className='text-t3xture font-semibold text-lg'>{" "}increase your sales</span>
                    and traffic in an impactful way? Fill out this form and speed up the{" "}
                    <span className='text-t3xture font-semibold text-lg'>process of transforming </span>
                    your ideas into results!
                </motion.p>

                <motion.h1
                    className="font-semibold font-poppins text-2xl text-white mx-auto inline-flex items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    What is your need{" "}
                    <IoMdHelp className="text-t3xture text-3xl -mt-1" />
                </motion.h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-8 px-4">
                    {[
                        {
                            href: "/planning/contact",
                            icon: <FaCodeBranch />,
                            title: "Website",
                            subtitle: "Development",
                        },
                        {
                            href: "/planning/contact",
                            icon: <LuLayoutDashboard />,
                            title: "UI/UX",
                            subtitle: "(Models)",
                        },
                        {
                            href: "/planning/contact",
                            icon: <LiaNetworkWiredSolid />,
                            title: "Wireframes",
                            subtitle: "Custom Solutions",
                        },
                        {
                            href: "/planning/contact",
                            icon: <TbHandClick />,
                            title: "Prototypes",
                            subtitle: "Interactive Models",
                        },


                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            onMouseEnter={() =>
                                window.innerWidth >= 768 && setTooltipHoveredIndex(index)
                            }
                            onMouseLeave={() =>
                                window.innerWidth >= 768 && setTooltipHoveredIndex(null)
                            }
                            onClick={() => {
                                if (window.innerWidth < 768) {
                                    window.location.href = item.href;
                                }
                            }}
                        >
                            <AnimatePresence>
                                {tooltipHoveredIndex === index &&
                                    !hiddenTooltips[index] &&
                                    window.innerWidth >= 768 && (
                                        <motion.div
                                            variants={tooltipVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            className="absolute -top-16 left-[20%] -translate-x-1/2 z-50 bg-[#0A0A0A] border-2 border-indigo-600 rounded-xl px-4 py-2 whitespace-nowrap"
                                        >
                                            <div className="flex flex-row items-center gap-3 text-sm">
                                                <span className="text-[#A3A3A3] font-dmsans font-normal">
                                                    Before leaving, do you want to see more about?
                                                </span>
                                                <div className="flex gap-2">
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            window.location.href = "/projetos";
                                                        }}
                                                        className="px-3 py-1 bg-indigo-600 font-poppins text-white rounded-lg text-sm"
                                                    >
                                                        Yes
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            handleTooltipNo(index);
                                                        }}
                                                        className="px-3 py-1 bg-transparent font-poppins border border-[#242424] text-white rounded-lg text-sm"
                                                    >
                                                        No
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                            </AnimatePresence>

                            <Link href={item.href}>
                                <motion.div
                                    className={`cursor-pointer border ${tooltipHoveredIndex === index
                                        ? "border-[#4F46E8]"
                                        : "border-[#151516] group-hover:border-[#4F46E8]"
                                        } bg-gradient-to-b from-[#040404] via-[#050505] to-[#070707] rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-200 min-h-[300px] relative overflow-hidden`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                    layout
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-b from-[#05031F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        layout
                                    />
                                    <motion.div
                                        className="text-spacefy text-7xl mb-8 relative z-10 group-hover:scale-110 transition-transform duration-200"
                                        layout
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <h3 className="font-poppins text-white text-2xl font-semibold mb-3 relative z-10 group-hover:text-spacefy transition-colors duration-200">
                                        {item.title}
                                    </h3>
                                    <p className="font-poppins text-spacefy text-sm font-medium text-center relative z-10">
                                        {item.subtitle}
                                    </p>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div className="w-full max-w-6xl mt-16">
                    <div className="flex flex-col items-center sm:items-start gap-3 px-6 mb-8">
                        <motion.div
                            className="flex flex-col items-center sm:items-start sm:flex-row justify-center sm:justify-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-flex items-center justify-center sm:justify-start bg-transparent bg-opacity-20 text-[#ccc] px-3 py-2 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-dmsans">
                                <TbMessage2Star className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                                <span className="text-sm sm:text-md  text-[#ccc] mr-1">
                                    530+
                                </span>{" "}
                                projects delivered
                            </span>
                            <span className="inline-flex items-center justify-center sm:justify-start bg-transparent bg-opacity-20 text-[#ccc] px-3 py-2 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-dmsans">
                                <MdOutlineSwitchAccessShortcutAdd className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                                <span className="text-sm sm:text-md text-[#ccc] mr-1">
                                    902.10k
                                </span>{" "}
                                generated views
                            </span>
                        </motion.div>

                        <motion.h2
                            className="text-white text-3xl md:text-5xl font-bold font-poppins text-center sm:text-left mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Explore Our <span className="text-indigo-600">Universe</span> of{" "}
                            <span className="text-indigo-600">Creations</span>
                        </motion.h2>

                        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-0">
                            <div className="flex flex-wrap md:flex-nowrap items-center justify-center w-full md:w-auto bg-[#0A0A0A] rounded-xl overflow-hidden">
                                <motion.button
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    onClick={() => setSelectedCategory("branding")}
                                    className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "branding"
                                        ? "bg-indigo-600 text-white"
                                        : "hover:bg-indigo-600 hover:text-white"
                                        } duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
                                >
                                    <motion.span variants={iconVariants}>
                                        <TbBrand4Chan className="text-xl" />
                                    </motion.span>
                                    Branding
                                </motion.button>
                                <motion.button
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    onClick={() => setSelectedCategory("ecommerce")}
                                    className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "ecommerce"
                                        ? "bg-indigo-600 text-white"
                                        : "hover:bg-indigo-600 hover:text-white"
                                        } duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
                                >
                                    <motion.span variants={iconVariants}>
                                        <CgWebsite className="text-xl" />
                                    </motion.span>
                                    Ecommerce
                                </motion.button>
                                <motion.button
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    onClick={() => setSelectedCategory("finance")}
                                    className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "finance"
                                        ? "bg-indigo-600 text-white"
                                        : "hover:bg-indigo-600 hover:text-white"
                                        } duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
                                >
                                    <motion.span variants={iconVariants}>
                                        <FaMoneyBillTrendUp className="text-xl" />
                                    </motion.span>
                                    Finance
                                </motion.button>
                                <motion.button
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    onClick={() => setSelectedCategory("startups")}
                                    className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "startups"
                                        ? "bg-indigo-600 text-white"
                                        : "hover:bg-indigo-600 hover:text-white"
                                        } duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
                                >
                                    <motion.span variants={iconVariants}>
                                        <TbBrandAzure className="text-xl" />
                                    </motion.span>
                                    Startups
                                </motion.button>
                            </div>

                            <Link
                                href="/projects"
                                className="text-indigo-600 font-medium hover:text-white group transition-colors font-poppins flex items-center gap-2"
                            >
                                See all
                                <motion.span
                                    className="text-lg"
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <PiHandSwipeRightBold />
                                </motion.span>
                            </Link>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedCategory}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full mt-8"
                            >
                                {projects[selectedCategory as keyof typeof projects].map(
                                    (image: string, index: number) => (
                                        <motion.div
                                            key={index}
                                            className={`relative rounded-lg overflow-hidden cursor-pointer ${index <= 1
                                                ? index === 0
                                                    ? "md:col-span-7 h-[300px]"
                                                    : "md:col-span-5 h-[300px]"
                                                : index === 2
                                                    ? "md:col-span-4 h-[300px]"
                                                    : "md:col-span-8 h-[300px]"
                                                }`}
                                            onHoverStart={() => setHoveredIndex(index)}
                                            onHoverEnd={() => setHoveredIndex(null)}
                                            whileHover={{ scale: 1.02 }}
                                            onClick={() => setSelectedImage(image)}
                                        >
                                            <Image
                                                src={image}
                                                alt={`Projeto ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-200 ease-out"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={index === 0}
                                            />
                                            <AnimatePresence>
                                                {hoveredIndex === index && (
                                                    <motion.div
                                                        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center"
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit="hidden"
                                                        variants={overlayVariants}
                                                    >
                                                        <motion.button
                                                            className="bg-indigo-600/80 p-3 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-all duration-300 hover:scale-110"
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <CgArrowsExpandUpRight className="w-6 h-6 text-white" />
                                                        </motion.button>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    )
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative max-w-4xl w-full max-h-[80vh] aspect-auto bg-black/40 rounded-xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Projeto em tamanho completo"
                                className="object-contain w-full h-full"
                                width={1280}
                                height={720}
                            />
                            <motion.button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-6 right-6 text-white bg-black/60 hover:bg-black/80 rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/20"
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


        </motion.section>

    )
}

