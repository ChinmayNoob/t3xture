"use client"
import { motion, useAnimation } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiOutlineSparkles } from "react-icons/hi";
import { TbMoodPlus } from "react-icons/tb";
import { MdVerified } from "react-icons/md";

interface Review {
    text: string;
    author: string;
    role: string;
    avatar: string;
}

const initialReviews: Review[] = [
    {
        text: "A platform revolutionized our way of working. The simplicity and efficiency are impressive. It's exactly what we needed.",
        author: "Charles Leclerc",
        role: "CEO of Legasse",
        avatar: "/assets/avatars/avatar1.png"

    },
    {
        text: "Since implementing the solution, our productivity has increased significantly. The intuitive interface makes all the difference.",
        author: "Ana Sweeney",
        role: "Co-founder of DevBrasil",
        avatar: "/assets/avatars/avatar1.png"
    },
    {
        text: "We tested several alternatives on the market, but nothing compares. The experience is simply superior in all aspects.",
        author: "Carlos Sainz",
        role: "CTO of InovaTech",
        avatar: "/assets/avatars/avatar1.png"
    },
    {
        text: "The team delivered beyond expectations. The support and dedication were exceptional from start to finish of the project.",
        author: "Max Verstappen",
        role: "CEO of InnovateBR",
        avatar: "/assets/avatars/avatar1.png"
    }
];

const Reviews = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const reviews = [...initialReviews, ...initialReviews, ...initialReviews];

    useEffect(() => {
        // eslint-disable-next-line prefer-const
        let timeoutId: NodeJS.Timeout | null = null;
        let currentX = 0;

        const startAnimation = async () => {
            try {
                await controls.start({
                    x: [`${currentX}px`, `-${(100 / 3)}%`],
                    transition: {
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        }
                    }
                });
            } catch (error) {
                console.error("Erro na animação:", error);
            }
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                controls.stop();
            }
        };

        const container = containerRef.current;

        const handleInteraction = () => {
            if (!isMobile) {
                controls.stop();
                const element = container?.firstChild as Element;
                if (element) {
                    const transform = getComputedStyle(element).transform;
                    const matrix = new DOMMatrix(transform);
                    currentX = matrix.m41;
                }
            }
        };

        const handleInteractionEnd = () => {
            if (!isMobile) {
                startAnimation();
            }
        };

        if (!isMobile) {
            container?.addEventListener('mouseenter', handleInteraction);
            container?.addEventListener('mouseleave', handleInteractionEnd);
        }

        container?.addEventListener('touchstart', handleInteraction);
        container?.addEventListener('touchend', handleInteractionEnd);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        startAnimation();

        return () => {
            container?.removeEventListener('mouseenter', handleInteraction);
            container?.removeEventListener('mouseleave', handleInteractionEnd);
            container?.removeEventListener('touchstart', handleInteraction);
            container?.removeEventListener('touchend', handleInteractionEnd);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            if (timeoutId) clearTimeout(timeoutId);
            controls.stop();
        };
    }, [controls, isMobile]);

    return (
        <motion.section
            className="w-full bg-black py-32 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            id="reviews"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="inline-flex items-center bg-transparent bg-opacity-20 text-[#ccc] px-3 py-1 rounded-full text-sm font-medium font-dmsans"
                    >
                        <HiOutlineSparkles className="mr-2 w-5 h-5 text-indigo-600" />
                        <span className="text-md mr-1">100+</span> projects delivered
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-center text-white text-3xl sm:text-5xl font-poppins font-bold mb-4 sm:mb-8"
                    >
                        Authentic <span className="text-indigo-600">Testimonials</span> of Trust.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-[#ccc] text-md max-w-2xl mx-auto mb-8 sm:mb-16 font-dmsans font-normal leading-relaxed"
                    >
                        Discover how our clients have transformed their businesses with our custom-built solutions. We take pride in delivering excellence reflected in a <span className="text-indigo-600 font-semibold">97% satisfaction rate</span> across all our projects.                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="relative w-full"
                >
                    <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

                    <div className="relative overflow-hidden" ref={containerRef}>
                        <motion.div
                            animate={controls}
                            className="flex gap-6"
                            style={{ width: "fit-content" }}
                        >
                            {reviews.map((review, index) => (
                                <ReviewCard key={`${review.author}-${index}`} {...review} />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

const ReviewCard = ({ text, author, role, avatar }: Review) => {
    return (
        <motion.div
            className="w-[380px] bg-[#0A0A0A] p-8 rounded-xl flex flex-col gap-6 border border-[#1a1a1a] hover:border-transparent transition-all duration-100 my-4 group"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            whileHover={{
                y: -4,
                scale: 1.02,
                transition: {
                    duration: 0.2,
                    ease: "easeOut"
                }
            }}
        >
            <div className="flex justify-between items-center">
                <TbMoodPlus className="text-lg text-indigo-600 group-hover:text-emerald-400 transition-colors duration-300" />
                <motion.div
                    className="bg-[#111] px-3 py-1 rounded-xl border border-zinc-800"
                    whileHover={{
                        scale: 1.01,
                        transition: {
                            duration: 0.1,
                            ease: "easeOut"
                        }
                    }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="text-zinc-400 text-xs font-dmsans font-medium flex items-center gap-1.5">
                        <MdVerified />
                        Verified Client
                    </span>
                </motion.div>
            </div>

            <div className="flex-grow">
                <p className="text-[#A3A3A3] text-base font-dmsans leading-relaxed">{text}</p>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                        src={avatar}
                        alt={`${author} avatar`}
                        fill
                        sizes="40px"
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <h4 className="text-white font-medium font-poppins text-sm">{author}</h4>
                    <p className="text-indigo-500 text-xs font-dmsans font-normal">{role}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Reviews;