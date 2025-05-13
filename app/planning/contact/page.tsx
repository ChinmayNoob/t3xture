"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconType } from "react-icons";
import {
    BsArrowLeftShort,
    BsArrowRightShort,
    BsCalculator,
} from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import {
    HiOutlineArrowLeft,
    HiOutlineSparkles,
    HiOutlineViewGrid,
} from "react-icons/hi";
import {
    MdOutlineDesignServices,
    MdOutlineSwitchAccessShortcutAdd,
} from "react-icons/md";
import {
    RiFileTextLine,
    RiMailSendLine,
    RiPhoneLine,
    RiUserSmileLine,
} from "react-icons/ri";

interface Field {
    type: string;
    placeholder: string;
    Icon?: IconType;
    description?: string;
    options?: string[] | OptionType[];
    name: string;
    conditional?: string;
    title?: string;
    tooltip?: string;
}

interface Step {
    fields: Field[];
    title: string;
    subtitle: string;
}

interface OptionType {
    label: string;
    value: string;
}

const Sites = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const router = useRouter();
    const [direction, setDirection] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showThanks, setShowThanks] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        description: "",
        reference: "",
        referenceLink: "",
        technologies: "",
        pages: "",
        sections: "",
        objective: "",
        deadline: "",
        investment: "",
        infrastructure: "",
    });
    const [selectedCategory, setSelectedCategory] = useState("branding");
    const [activeSelect, setActiveSelect] = useState<string | null>(null);
    const [dropdownPosition, setDropdownPosition] = useState<{
        top: number;
        left: number;
        width: number;
    } | null>(null);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [showErrors, setShowErrors] = useState(false);

    const handleSendRequest = async () => {
        try {
            router.push('/planning');
        } catch (error) {
            console.error('Error sending form:', error);
            setToastMessage('Error sending form. Try again.');
            throw error;
        }
    };

    const steps: Step[] = [
        {
            fields: [
                {
                    Icon: RiUserSmileLine,
                    placeholder: "Your company name or project",
                    type: "text",
                    name: "name",
                    description:
                        "Identify your project to follow the entire process.",
                },
                {
                    Icon: RiPhoneLine,
                    placeholder: "DDD + WhatsApp number",
                    type: "tel",
                    name: "phone",
                    description: "For important updates about the development.",
                },
                {
                    Icon: RiMailSendLine,
                    placeholder: "Professional e-mail for communication",
                    type: "email",
                    name: "email",
                    description: "We will keep you informed about each step.",
                },
            ],
            title: "Start your Digital Journey with us",
            subtitle:
                "The first step to transform your vision into reality starts here. We will build something incredible together.",
        },
        {
            fields: [
                {
                    type: "radio",
                    title: "Do you have any design or prototype?",
                    name: "reference",
                    placeholder: "Select an option",
                    options: [
                        { label: "Yes", value: "yes" },
                        { label: "No", value: "no" },
                    ],
                },
                {
                    Icon: RiFileTextLine,
                    placeholder: "Paste here the links of your references",
                    type: "text",
                    name: "referenceLink",
                    conditional: "yes",
                    description:
                        "Links of prototypes or sketches that you would like to use as inspiration.",
                },
            ],
            title: "How do you really imagine your project?",
            subtitle:
                "Share your ideas and visual references, or trust our expertise to create an exclusive design.",
        },
        {
            fields: [
                {
                    Icon: HiOutlineSparkles,
                    type: "text",
                    placeholder: "If yes, which tool do you prefer?",
                    name: "technologies",
                    description:
                        "Ex: Framer, Figma, Adobe XD or leave blank for our suggestion",
                },
            ],
            title: "Let's choose the best tools",
            subtitle:
                "Tell us if you have any preference for tools or leave it to our team.",
        },
        {
            fields: [
                {
                    Icon: HiOutlineViewGrid,
                    type: "text",
                    placeholder: "What pages will be needed?",
                    name: "pages",
                    description: "Ex: Home, About, Services, Contact, Blog, etc.",
                },
                {
                    Icon: CgWebsite,
                    type: "text",
                    placeholder: "What sections will each page have?",
                    name: "sections",
                    description: "Ex: Banner, Gallery, Form, Product List",
                },
                {
                    Icon: HiOutlineSparkles,
                    type: "text",
                    placeholder: "What is the main objective of the site?",
                    name: "objective",
                    description:
                        "Ex: Sell products, share information, promote services",
                },
            ],
            title: "What is the structure and objectives of the project?",
            subtitle:
                "Define the necessary pages and the main objective of your site.",
        },
        {
            fields: [
                {
                    type: "select",
                    Icon: BsCalculator,
                    placeholder: "What is the desired deadline for the project?",
                    name: "deadline",
                    description: "Estimated deadline for project delivery",
                    options: [
                        { label: "Up to 15 days", value: "15 days" },
                        { label: "15-30 days", value: "30 days" },
                        { label: "30-60 days", value: "60 days" },
                        { label: "More than 60 days", value: "more than 60 days" },
                    ],
                },
                {
                    type: "select",
                    Icon: MdOutlineSwitchAccessShortcutAdd,
                    placeholder: "What is the available investment?",
                    name: "investment",

                    description: "Investment range for the project",
                    options: [
                        { label: "Up to $ 1.000", value: "1000" },
                        { label: "$ 1.000 - $ 3.000", value: "3000" },
                        { label: "$ 3.000 - $ 5.000", value: "5000" },
                        { label: "More than $ 5.000", value: "more than 5000" },
                    ],
                },
                {
                    type: "radio",
                    title: "Do you already have a domain and hosting?",
                    name: "infrastructure",
                    description: "If you don't have it, we can include it in the budget",
                    placeholder: "Select an option",
                    options: [
                        { label: "Yes, I already have", value: "yes" },
                        { label: "No, I don't have yet", value: "no" },
                    ],
                },
            ],
            title: "What is the desired deadline and investment?",
            subtitle:
                "Inform the estimated time and the available investment that you want to invest in the project",
        },
    ];

    const iconVariants = {
        hover: {
            rotate: [0, -10, 10, -10, 0],
            transition: {
                duration: 0.5,
            },
        },
    };

    const inputVariants = {
        initial: {
            opacity: 0,
            y: 10,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.15,
            },
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.1,
            },
        },
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.1,
            },
        },
        tap: {
            scale: 0.98,
        },
    };

    const isCurrentStepValid = () => {
        switch (currentStep) {
            case 0:
                return formData.name && formData.phone && formData.email;
            case 1:
                return (
                    formData.reference === "no" ||
                    (formData.reference === "yes" && formData.referenceLink)
                );
            case 2:
                return formData.technologies && formData.technologies.trim().length > 0;
            case 3:
                return formData.pages && formData.objective;
            case 4:
                return (
                    formData.deadline && formData.investment && formData.infrastructure
                );
            default:
                return false;
        }
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePhone = (phone: string) => {
        const re = /^[0-9]+$/;
        return re.test(phone);
    };

    const showToast = (message: string) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(null), 3000);
    };

    const handleNext = async () => {
        if (currentStep === steps.length - 1) {
            try {
                setIsLoading(true);
                await handleSendRequest();
                setShowSuccess(true);

                setTimeout(() => {
                    setShowSuccess(false);
                    setShowThanks(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }, 3500);
            } catch (error) {
                console.error('Erro ao enviar:', error);
            } finally {
                setIsLoading(false);
            }
            return;
        }


        setShowErrors(false);
        setDirection(1);
        setCurrentStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setDirection(-1);
            setCurrentStep((prev) => prev - 1);
        }
    };

    const pageVariants = {
        initial: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            },
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -100 : 100,
            opacity: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
            },
        }),
    };

    const titleVariants = {
        initial: (direction: number) => ({
            y: direction > 0 ? 20 : -20,
            opacity: 0,
        }),
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        exit: (direction: number) => ({
            y: direction > 0 ? -20 : 20,
            opacity: 0,
            transition: {
                duration: 0.3,
            },
        }),
    };

    const loadingVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "linear",
            },
        },
    };

    const successVariants = {
        initial: { x: 100, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
            },
        },
        exit: {
            x: 100,
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

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
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (activeSelect && !(event.target as Element).closest(".relative")) {
                setActiveSelect(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [activeSelect]);

    const handleSelectClick = (
        event: React.MouseEvent<HTMLButtonElement>,
        fieldName: string
    ) => {
        if (activeSelect === fieldName) {
            setActiveSelect(null);
            setDropdownPosition(null);
            return;
        }

        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();

        setDropdownPosition({
            top: rect.bottom + window.scrollY + 8,
            left: rect.left + window.scrollX,
            width: rect.width,
        });

        setActiveSelect(fieldName);
    };

    const toastVariants = {
        initial: {
            opacity: 0,
            x: 50,
            scale: 0.95,
            filter: "blur(8px)"
        },
        animate: {
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            x: 50,
            scale: 0.95,
            filter: "blur(8px)",
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    };

    if (showThanks) {
        return (
            <div className="flex flex-col items-center min-h-screen px-4">
                <div className="relative w-full text-center pt-20">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 font-poppins text-[120px] sm:text-[200px] font-bold text-[#4F46E8]/10 select-none"
                    >
                        T3XTURE
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10"
                    >
                        <h1 className="font-poppins text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
                            Your Digital Journey
                            <br />
                            <span className="text-[#4F46E8]">Start Now</span>
                            <HiOutlineSparkles className="inline-block ml-2 text-[#4F46E8] w-8 h-8 md:w-12 md:h-12" />
                        </h1>
                        <p className="font-dmsans text-lg text-[#A3A3A3] max-w-2xl mx-auto mb-8">
                            Thank you for trusting our team! In a few days we will contact you to transform your ideas into an extraordinary digital experience.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col mx-auto md:flex-row  justify-center text-center items-center gap-2"
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center gap-3 px-6 py-3 text-gray-400 hover:text-[#4F46E8] font-poppins transition-all duration-300 mb-20"
                            >
                                <HiOutlineArrowLeft className="text-xl" />
                                Back to Home
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="w-full max-w-6xl px-4">
                    <div className="flex flex-col items-center sm:items-start gap-3 mb-12">
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-2">
                            <span className="inline-flex items-center bg-[#0D0D0E] text-[#A3A3A3] px-4 py-2 rounded-full text-sm font-medium font-dmsans">
                                <svg
                                    className="mr-2 w-5 h-5 text-[#4F46E8]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="text-white mr-1">530+</span> projects delivered
                            </span>
                            <span className="inline-flex items-center bg-[#0D0D0E] text-[#A3A3A3] px-4 py-2 rounded-full text-sm font-medium font-dmsans">
                                <MdOutlineSwitchAccessShortcutAdd className="mr-2 w-5 h-5 text-[#4F46E8]" />
                                <span className="text-white mr-1">902.10k</span> views generated
                            </span>
                        </div>

                        <h2 className="text-white text-3xl md:text-5xl font-bold font-poppins text-center sm:text-left mb-8">
                            Discover the Power of{" "}
                            <span className="text-[#4F46E8]">Digital Innovation</span>
                        </h2>

                        <div className="flex flex-wrap md:flex-nowrap items-center justify-center w-full md:w-auto bg-[#0A0A0A] rounded-xl overflow-hidden">
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => setSelectedCategory("branding")}
                                className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "branding"
                                    ? "bg-[#4F46E8] text-white"
                                    : "hover:bg-[#4F46E8] hover:text-white"
                                    } duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
                            >
                                <motion.span variants={iconVariants}>
                                    <HiOutlineViewGrid className="text-xl" />
                                </motion.span>
                                Branding
                            </motion.button>
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => setSelectedCategory("ecommerce")}
                                className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "ecommerce"
                                    ? "bg-[#4F46E8] text-white"
                                    : "hover:bg-[#4F46E8] hover:text-white"
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
                                    ? "bg-[#4F46E8] text-white"
                                    : "hover:bg-[#4F46E8] hover:text-white"
                                    } duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
                            >
                                <motion.span variants={iconVariants}>
                                    <MdOutlineDesignServices className="text-xl" />
                                </motion.span>
                                Finance
                            </motion.button>
                        </div>

                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={selectedCategory}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full"
                            >
                                {projects[selectedCategory as keyof typeof projects].map(
                                    (image: string, index: number) => (
                                        <motion.div
                                            key={index}
                                            className={`relative rounded-xl overflow-hidden cursor-pointer group ${index <= 1
                                                ? index === 0
                                                    ? "lg:col-span-7 h-[400px]"
                                                    : "lg:col-span-5 h-[400px]"
                                                : index === 2
                                                    ? "lg:col-span-4 h-[400px]"
                                                    : "lg:col-span-8 h-[400px]"
                                                }`}
                                            whileHover={{
                                                scale: 1.02,
                                                transition: {
                                                    duration: 0.2,
                                                    ease: "easeOut",
                                                },
                                            }}
                                            layout="position"
                                        >
                                            <Image
                                                src={image}
                                                alt={`Projeto ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-200 ease-out group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        </motion.div>
                                    )
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center w-full min-h-screen pt-10">
            <div className="flex items-center justify-center">
                <p className="font-poppins uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-b from-transparent via-[#4F46E8]/70 to-[#4F46E8] text-[90px] sm:text-[110px] md:text-[300px] lg:text-[316px] leading-[0.9] whitespace-nowrap">
                    T3XTURE
                </p>
            </div>

            <div className="flex flex-col items-center px-4 py-8 z-10 -mt-10 sm:-mt-28">
                <div className="relative">
                    <h2 className="font-poppins uppercase font-bold text-[#1A1A1C]/10 text-[100px] sm:text-[130px] md:text-[160px] lg:text-[200px] leading-[0.9] mb-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                        T3XTURE
                    </h2>

                    <div className="relative z-10 pt-16 sm:pt-0">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.h1
                                key={currentStep}
                                custom={direction}
                                variants={titleVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold text-center mb-4 max-w-5xl leading-tight"
                            >
                                {steps[currentStep].title}
                            </motion.h1>
                        </AnimatePresence>
                    </div>
                </div>

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.p
                        key={currentStep}
                        custom={direction}
                        variants={titleVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="text-center text-md font-dmsans text-[#A3A3A3] max-w-lg mb-10 z-50"
                    >
                        {steps[currentStep].subtitle}
                    </motion.p>
                </AnimatePresence>

                <div className="w-full max-w-xl space-y-6">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentStep}
                            custom={direction}
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="w-full z-50"
                        >
                            {steps[currentStep].fields.map((field, index) => (
                                <motion.div key={index} className="relative group">
                                    {field.type === "radio" ? (
                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center">
                                                <h3 className="text-xl text-white font-poppins font-medium">
                                                    {field.title}
                                                </h3>

                                                {field.tooltip && (
                                                    <div className="relative ml-1.5">
                                                        <button
                                                            type="button"
                                                            className="group/tooltip w-4 h-4"
                                                        >
                                                            <svg
                                                                className="w-4 h-4 text-gray-400 group-hover/tooltip:text-t3xture transition-colors duration-200"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                />
                                                            </svg>
                                                        </button>

                                                        {/* Tooltip */}
                                                        <div
                                                            className="absolute invisible group-hover/tooltip:visible opacity-0 group-hover/tooltip:opacity-100 
                              bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 z-[9999]
                              transition-all duration-200"
                                                        >
                                                            <div
                                                                className="bg-[#0D0D0E] border border-[#151516] p-2.5 rounded-lg 
                                shadow-lg backdrop-blur-sm"
                                                            >
                                                                <p className="font-dmsans text-xs text-gray-300 leading-relaxed whitespace-normal">
                                                                    {field.tooltip}
                                                                </p>
                                                                <div
                                                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
                                  rotate-45 w-2 h-2 bg-[#0D0D0E] border-r border-b border-[#151516]"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {field.description && (
                                                <p className="text-sm text-gray-400 font-dmsans mb-4">
                                                    {field.description}
                                                </p>
                                            )}

                                            <div className="grid grid-cols-2 gap-4">
                                                {Array.isArray(field.options) &&
                                                    field.options.map(
                                                        (option: OptionType | string, i) => {
                                                            const value =
                                                                typeof option === "string"
                                                                    ? option
                                                                    : option.value;
                                                            const label =
                                                                typeof option === "string"
                                                                    ? option
                                                                    : option.label;

                                                            return (
                                                                <motion.button
                                                                    key={i}
                                                                    type="button"
                                                                    whileHover={{ scale: 1.02 }}
                                                                    whileTap={{ scale: 0.98 }}
                                                                    onClick={() =>
                                                                        setFormData({
                                                                            ...formData,
                                                                            [field.name]: value,
                                                                        })
                                                                    }
                                                                    className={`relative flex flex-col items-center justify-center p-6 rounded-xl border-2 
                                ${formData[
                                                                            field.name as keyof typeof formData
                                                                        ] === value
                                                                            ? "border-t3xture bg-t3xture/5"
                                                                            : "border-[#151516] bg-[#0A0A0B]/80"
                                                                        } 
                                transition-all duration-300 group hover:border-t3xture/50`}
                                                                >
                                                                    <div
                                                                        className={`w-6 h-6 rounded-full border-2 mb-3 flex items-center justify-center
                                ${formData[
                                                                                field.name as keyof typeof formData
                                                                            ] === value
                                                                                ? "border-t3xture"
                                                                                : "border-[#151516]"
                                                                            }`}
                                                                    >
                                                                        {formData[
                                                                            field.name as keyof typeof formData
                                                                        ] === value && (
                                                                                <motion.div
                                                                                    initial={{ scale: 0 }}
                                                                                    animate={{ scale: 1 }}
                                                                                    className="w-3 h-3 rounded-full bg-t3xture"
                                                                                />
                                                                            )}
                                                                    </div>
                                                                    <span className="font-poppins text-sm text-white">
                                                                        {label}
                                                                    </span>
                                                                </motion.button>
                                                            );
                                                        }
                                                    )}
                                            </div>
                                        </div>
                                    ) : field.conditional === "yes" ? (
                                        formData.reference === "yes" && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="relative group mt-4"
                                            >
                                                {field.Icon && (
                                                    <field.Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl transition-colors duration-300 group-hover:text-t3xture group-focus-within:text-t3xture z-10" />
                                                )}
                                                <input
                                                    type={field.type}
                                                    placeholder={field.placeholder}
                                                    value={formData[field.name as keyof typeof formData]}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            [field.name]: e.target.value,
                                                        })
                                                    }
                                                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#0A0A0B]/80 backdrop-blur-sm
                            border-2 border-[#151516] text-white placeholder-gray-500
                            transition-all duration-300 ease-out
                            font-dmsans text-sm
                            focus:outline-none focus:ring-0 focus:ring-offset-0
                            focus:border-t3xture focus:bg-[#0D0D0E]
                            focus:shadow-[0_0_20px_rgba(79,70,232,0.15)]
                            hover:border-t3xture/50 hover:bg-[#0C0C0D]
                            disabled:opacity-50 disabled:cursor-not-allowed"
                                                />
                                            </motion.div>
                                        )
                                    ) : (
                                        <motion.div
                                            variants={inputVariants}
                                            className="relative group mb-4"
                                        >
                                            {field.Icon && (
                                                <field.Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl transition-colors duration-300 group-hover:text-t3xture group-focus-within:text-t3xture z-10" />
                                            )}
                                            {field.type === "select" ? (
                                                <div className="relative group mb-4">
                                                    {field.Icon && (
                                                        <field.Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl transition-colors duration-300 group-hover:text-t3xture group-focus-within:text-t3xture z-10" />
                                                    )}
                                                    <button
                                                        type="button"
                                                        onClick={(e) => handleSelectClick(e, field.name)}
                                                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#0A0A0B]/80 backdrop-blur-sm
                              border-2 border-[#151516] text-white 
                              transition-all duration-300 ease-out
                              font-dmsans text-sm
                              focus:outline-none
                              hover:border-t3xture/50 hover:bg-[#0C0C0D]
                              flex items-center justify-between"
                                                    >
                                                        <span
                                                            className={`${formData[field.name as keyof typeof formData]
                                                                ? "text-white"
                                                                : "text-gray-500"
                                                                }`}
                                                        >
                                                            {formData[field.name as keyof typeof formData] ||
                                                                field.placeholder}
                                                        </span>

                                                        <BsArrowRightShort
                                                            className={`w-5 h-5 -rotate-90 text-gray-500 transition-transform duration-200 ${activeSelect === field.name ? "rotate-90" : ""
                                                                }`}
                                                        />
                                                    </button>

                                                    {createPortal(
                                                        <AnimatePresence>
                                                            {activeSelect === field.name &&
                                                                dropdownPosition && (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, y: -4 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        exit={{ opacity: 0, y: -4 }}
                                                                        transition={{ duration: 0.2 }}
                                                                        style={{
                                                                            position: "absolute",
                                                                            top: dropdownPosition.top,
                                                                            left: dropdownPosition.left,
                                                                            width: dropdownPosition.width,
                                                                            zIndex: 99999,
                                                                        }}
                                                                        className="fixed"
                                                                    >
                                                                        <div
                                                                            className="bg-[#0D0D0E] border-2 border-[#151516] rounded-xl overflow-hidden
                                    shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-lg"
                                                                        >
                                                                            {field.options?.map((option, i) => {
                                                                                const value =
                                                                                    typeof option === "string"
                                                                                        ? option
                                                                                        : option.value;
                                                                                const label =
                                                                                    typeof option === "string"
                                                                                        ? option
                                                                                        : option.label;
                                                                                const isSelected =
                                                                                    formData[
                                                                                    field.name as keyof typeof formData
                                                                                    ] === value;

                                                                                return (
                                                                                    <motion.button
                                                                                        key={i}
                                                                                        onClick={() => {
                                                                                            setFormData({
                                                                                                ...formData,
                                                                                                [field.name]: value,
                                                                                            });
                                                                                            setActiveSelect(null);
                                                                                            setDropdownPosition(null);
                                                                                        }}
                                                                                        className={`w-full px-6 py-4 text-left transition-all duration-200
                                            flex items-center gap-3 group
                                            ${isSelected
                                                                                                ? "bg-t3xture/10"
                                                                                                : "hover:bg-[#151516]"
                                                                                            }`}
                                                                                        whileHover={{ x: 4 }}
                                                                                        whileTap={{ scale: 0.98 }}
                                                                                    >
                                                                                        <div
                                                                                            className={`w-2 h-2 rounded-full transition-all duration-200
                                            ${isSelected
                                                                                                    ? "bg-t3xture scale-100"
                                                                                                    : "bg-gray-500 scale-0 group-hover:scale-100 group-hover:bg-t3xture/50"
                                                                                                }`}
                                                                                        />
                                                                                        <span
                                                                                            className={`font-dmsans text-sm
                                            ${isSelected
                                                                                                    ? "text-t3xture"
                                                                                                    : "text-gray-400 group-hover:text-white"
                                                                                                }`}
                                                                                        >
                                                                                            {label}
                                                                                        </span>
                                                                                    </motion.button>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    </motion.div>
                                                                )}
                                                        </AnimatePresence>,
                                                        document.body
                                                    )}
                                                </div>
                                            ) : (
                                                <input
                                                    type={field.type}
                                                    placeholder={field.placeholder}
                                                    value={formData[field.name as keyof typeof formData]}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            [field.name]: e.target.value,
                                                        })
                                                    }
                                                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#0A0A0B]/80 backdrop-blur-sm
                            border-2 border-[#151516] text-white placeholder-gray-500
                            transition-all duration-300 ease-out
                            font-dmsans text-sm
                            focus:outline-none focus:ring-0 focus:ring-offset-0
                            focus:border-t3xture focus:bg-[#0D0D0E]
                            focus:shadow-[0_0_20px_rgba(79,70,232,0.15)]
                            hover:border-t3xture/50 hover:bg-[#0C0C0D]
                            disabled:opacity-50 disabled:cursor-not-allowed"
                                                />
                                            )}
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center justify-center gap-4 pt-2">
                        <motion.button
                            variants={buttonVariants}
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                            onClick={handleBack}
                            disabled={currentStep === 0}
                            className={`flex-1 px-8 py-4 rounded-xl text-white font-poppins flex items-center justify-center gap-2 text-sm transition-all duration-300 
                bg-[#0A0A0B]/90 backdrop-blur-sm border-2 border-[#151516] 
                hover:border-t3xture/50 hover:bg-[#0D0D0E] 
                hover:shadow-[0_0_20px_rgba(79,70,232,0.15)] hover:-translate-y-1
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0`}
                        >
                            <BsArrowLeftShort className="text-2xl" />
                            <span className="font-medium tracking-wide">Back</span>
                        </motion.button>

                        <motion.button
                            variants={buttonVariants}
                            initial="initial"
                            whileHover="hover"
                            whileTap="tap"
                            onClick={handleNext}
                            disabled={!isCurrentStepValid() || showSuccess}
                            className={`flex-1 px-8 py-4 rounded-xl text-white font-poppins flex items-center justify-center gap-2 text-sm transition-all duration-300 
                ${isCurrentStepValid()
                                    ? showSuccess
                                        ? "bg-green-500 opacity-90 cursor-not-allowed"
                                        : "bg-t3xture hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(79,70,232,0.25)] hover:-translate-y-1"
                                    : "bg-[#0A0A0B]/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                }`}
                        >
                            <span className="font-medium tracking-wide">
                                {currentStep === steps.length - 1 ? (
                                    isLoading ? (
                                        <motion.svg
                                            variants={loadingVariants}
                                            animate="animate"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                                        </motion.svg>
                                    ) : (
                                        "Finish"
                                    )
                                ) : (
                                    "Next"
                                )}
                            </span>
                            {!isLoading && currentStep !== steps.length - 1 && (
                                <BsArrowRightShort className="text-2xl" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        variants={successVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed top-4 right-4 bg-green-500/10 backdrop-blur-sm border border-green-500/20 text-green-500 px-6 py-4 rounded-2xl shadow-lg z-50 flex items-center gap-3"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="font-poppins font-medium">
                            Form sent successfully!
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {toastMessage && (
                    <motion.div
                        variants={toastVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed top-4 right-4 z-50"
                    >
                        <div className="flex items-center gap-3 bg-[#0D0D0E]/95 backdrop-blur-lg border border-red-500/20 
              px-5 py-4 rounded-xl shadow-[0_8px_32px_rgba(239,68,68,0.15)] min-w-[320px]"
                        >
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/10">
                                <motion.svg
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                        transition: { delay: 0.2, duration: 0.2 }
                                    }}
                                    className="w-5 h-5 text-red-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </motion.svg>
                            </div>

                            <div className="flex-1">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 0.1, duration: 0.2 }
                                    }}
                                    className="flex flex-col gap-0.5"
                                >
                                    <span className="text-red-500 font-poppins font-medium text-sm">
                                        Validation Error
                                    </span>
                                    <span className="text-gray-400 font-dmsans text-sm">
                                        {toastMessage}
                                    </span>
                                </motion.div>
                            </div>

                            <motion.button
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{
                                    scale: 1,
                                    opacity: 0.5,
                                    transition: { delay: 0.3, duration: 0.2 }
                                }}
                                whileHover={{ opacity: 1 }}
                                onClick={() => setToastMessage(null)}
                                className="text-gray-500 hover:text-gray-300 transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </motion.button>
                        </div>

                        <div className="relative w-full h-0.5 bg-red-500/10 mt-1 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 3, ease: "linear" }}
                                className="absolute top-0 left-0 h-full bg-red-500/50"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Sites;
