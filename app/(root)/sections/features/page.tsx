"use client";

import { motion, AnimatePresence } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { TbSquareRoundedPercentage } from "react-icons/tb";
import { FaHeadphonesSimple, FaPuzzlePiece, FaToolbox } from "react-icons/fa6";
import { RiSeoFill } from "react-icons/ri";
import { HiMiniServerStack } from "react-icons/hi2";
import { TbLayout2Filled } from "react-icons/tb";

import { RiWindyLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";


const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeShakeIndex, setActiveShakeIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const featureCards = [
    "Security",
    "Fast Performance",
    "Compatibility",
    "Maintenance",
    "Free Hosting",
    "SEO Optimization",
    "Attractive Interface"
  ];

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveShakeIndex((prevIndex) =>
          prevIndex === featureCards.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [inView]);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|android|iphone|ipad|ipod/.test(userAgent);
      setIsMobile(isMobileDevice || window.innerWidth <= 767);
    };

    checkMobile();

    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const handleClickOutside = (event: TouchEvent | MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.feature-card')) {
          setActiveTooltip(null);
        }
      };

      document.addEventListener('touchstart', handleClickOutside as EventListener);
      document.addEventListener('click', handleClickOutside as EventListener);

      return () => {
        document.removeEventListener('touchstart', handleClickOutside as EventListener);
        document.removeEventListener('click', handleClickOutside as EventListener);
      };
    }
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        duration: 0.3,
        ease: "easeOut"
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="flex flex-col sm:flex-row justify-center sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0 mb-6"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="inline-flex items-center justify-center sm:justify-center bg-transparent bg-opacity-20 text-[#ccc] px-3 py-1 rounded-full text-sm font-medium font-dmsans">
            <TbSquareRoundedPercentage className="mr-2 w-5 h-5 text-indigo-500" />
            <span className="text-md font-semibold mr-1">
              98%
            </span>
            Satisfaction
          </span>
          <span className="inline-flex items-center justify-center sm:justify-center bg-transparent bg-opacity-20 text-[#ccc] px-3 py-1 rounded-full text-sm font-medium font-dmsans">
            <FaHeadphonesSimple className="mr-2 w-5 h-5 text-indigo-500" />
            <span className="text-md font-semibold mr-1">
              1000+
            </span>
            Clients Served
          </span>
        </motion.div>

        <motion.h2
          className="text-center text-3xl md:text-5xl max-w-2xl mx-auto font-poppins font-semibold mb-8 md:mb-12"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Turn Clicks into{" "}
          <span className="text-indigo-600">
            Customers <span className="text-white">Upto </span> 82%
          </span>{" "}
          more <span className="text-indigo-600">Visits.</span>
        </motion.h2>


        {/* Mobile */}
        {isMobile ? (
          <motion.div
            className="grid grid-cols-1 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <FeatureCard
              title="Security"
              description="We ensure your data is secure with our advanced encryption and security measures."
              position="top"
              isShaking={activeShakeIndex === 0}
              isMobile={isMobile}
              isActive={activeTooltip === "Security"}
              onCardClick={() => setActiveTooltip(activeTooltip === "Security" ? null : "Security")}
            />
            <FeatureCard
              title="Fast Performance"
              description="We optimize your website to load quickly, improving the user experience."
              position="top"
              icon={
                <RiWindyLine className="w-4 h-4 text-indigo-700" />
              }
              isMobile={isMobile}
              isShaking={activeShakeIndex === 1}
              isActive={activeTooltip === "Fast Performance"}
              onCardClick={() => setActiveTooltip(activeTooltip === "Fast Performance" ? null : "Fast Performance")}
            />
            <FeatureCard
              title="Compatibility"
              description="We ensure your website is compatible with all devices, improving the user experience."
              position="top"
              isShaking={activeShakeIndex === 2}
              isMobile={isMobile}
              isActive={activeTooltip === "Compatibility"}
              onCardClick={() => setActiveTooltip(activeTooltip === "Compatibility" ? null : "Compatibility")}
            />
            <FeatureCard
              title="Maintenance"
              description="We ensure your website is maintained and updated, improving the user experience."
              position="top"
              isShaking={activeShakeIndex === 3}
              isMobile={isMobile}
              isActive={activeTooltip === "Maintenance"}
              onCardClick={() => setActiveTooltip(activeTooltip === "Maintenance" ? null : "Maintenance")}
            />
            <FeatureCard
              title="Free Hosting"
              description="We provide free hosting for your website, improving the user experience."
              icon={
                <HiMiniServerStack className="w-4 h-4 text-indigo-700" />
              }
              position="top"
              isShaking={activeShakeIndex === 4}
              isMobile={isMobile}
              isActive={activeTooltip === "Free Hosting"}
              onCardClick={() => setActiveTooltip(activeTooltip === "Free Hosting" ? null : "Free Hosting")}
            />
            <FeatureCard
              title="SEO Optimization"
              description="We optimize your website for search engines, improving the user experience."
              icon={
                <RiSeoFill className="w-4 h-4 text-indigo-700" />
              }
              position="top"
              isShaking={activeShakeIndex === 5}
              isMobile={isMobile}
              isActive={activeTooltip === "SEO Optimization"}
              onCardClick={() => setActiveTooltip(activeTooltip === "SEO Optimization" ? null : "SEO Optimization")}
            />
            <FeatureCard
              title="Attractive Interface"
              description="We ensure your website is attractive and user-friendly, improving the user experience."
              icon={
                <TbLayout2Filled className="w-4 h-4 text-indigo-700" />
              }
              position="top"
              isShaking={activeShakeIndex === 6}
              isMobile={isMobile}
              isActive={activeTooltip === "Attractive Interface"}
              onCardClick={() => setActiveTooltip(activeTooltip === "Attractive Interface" ? null : "Attractive Interface")}
            />
          </motion.div>
        ) : (
          <motion.div
            className="relative h-[300px]"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <FeatureCard
              title="Security"
              className="absolute top-0 left-0"
              icon={
                <MdSecurity className="w-4 h-4 text-indigo-700" />
              }
              description="We ensure your data is secure with our advanced encryption and security measures."
              position="top"
              isShaking={activeShakeIndex === 0}
            />
            <FeatureCard
              title="Fast Performance"
              className="absolute top-0 left-[50%] transform -translate-x-1/2"
              description="We optimize your website to load quickly, improving the user experience."
              position="top"
              icon={
                <RiWindyLine className="w-4 h-4 text-indigo-700" />
              }
              isMobile={isMobile}
              isShaking={activeShakeIndex === 1}
              isActive={activeTooltip === "Fast Performance"}
              onCardClick={() => setActiveTooltip(activeTooltip === "Fast Performance" ? null : "Fast Performance")}
            />
            <FeatureCard
              title="Compatibility"
              className="absolute top-0 right-0"
              icon={
                <FaPuzzlePiece className="w-4 h-4 text-indigo-700" />
              }
              description="We ensure your website is compatible with all devices, improving the user experience."
              position="top"
              isShaking={activeShakeIndex === 2}

            />
            <FeatureCard
              title="Maintenance"
              className="absolute top-1/3 right-[55%] transform -translate-y-1/2 -translate-x-1/2"
              description="We ensure your website is maintained and updated, improving the user experience."
              icon={
                <FaToolbox className="w-4 h-4 text-indigo-700" />
              }
              position="top"
              isShaking={activeShakeIndex === 3}

            />
            <FeatureCard
              title="Free Hosting"
              className="absolute top-1/3 left-[55%] transform -translate-y-1/2 translate-x-1/2"
              description="We provide free hosting for your website, improving the user experience."
              icon={
                <HiMiniServerStack className="w-4 h-4 text-indigo-700" />
              }
              position="top"
              isShaking={activeShakeIndex === 4}
            />
            <FeatureCard
              title="SEO Optimization"
              className="absolute bottom-24 right-[50%] transform -translate-x-1/2"
              description="We optimize your website for search engines, improving the user experience."
              icon={
                <RiSeoFill className="w-4 h-4 text-indigo-700" />
              }
              position="top"
              isShaking={activeShakeIndex === 5}

            />
            <FeatureCard
              title="Attractive Interface"
              className="absolute bottom-20 left-[50%] transform translate-x-1/2"
              description="We ensure your website is attractive and user-friendly, improving the user experience."
              icon={
                <TbLayout2Filled className="w-4 h-4 text-indigo-700" />
              }
              position="top"
              isShaking={activeShakeIndex === 6}
            />

          </motion.div>
        )}
      </div>
    </section>
  );
};

const FeatureCard = ({
  title,
  className,
  icon,
  description,
  isShaking,
  isMobile,
  isActive,
  onCardClick,
}: {
  title: string;
  className?: string;
  icon?: React.ReactNode;
  description: string;
  isShaking?: boolean;
  position: "top";
  isMobile?: boolean;
  isActive?: boolean;
  onCardClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const shakeAnimation = {
    rotate: [0, -2, 2, -2, 0],
    transition: {
      duration: 0.5,
      repeat: 2,
      ease: "easeInOut",
    },
  };

  const getTooltipClass = () => {
    if (isMobile) {
      return "fixed left-[50%] bottom-[50%] transform -translate-x-1/2";
    }
    return "left-1/2 bottom-full mb-2 transform -translate-x-1/2";
  };

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isMobile && onCardClick) {
      onCardClick();
    }
  };

  const showTooltip = isMobile ? isActive : isHovered;

  return (
    <motion.div
      id={title}
      className={`feature-card bg-[#121212] p-[8px] px-4 rounded-lg inline-flex items-center justify-center cursor-pointer select-none ${className || ""
        }`}
      variants={{
        hidden: { opacity: 0, scale: 1 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        },
      }}
      initial={{ scale: 1 }}
      whileHover={{
        backgroundColor: "#4F46E5",
        scale: 1.02,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      animate={isShaking ? shakeAnimation : { scale: 1 }}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      onClick={handleClick}
      onTouchStart={handleClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <h3 className="text-md font-poppins font-semibold">{title}</h3>
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            className={`${isMobile ? 'fixed' : 'absolute'
              } ${getTooltipClass()} bg-[#121212] text-white p-3.5 rounded-md shadow-lg w-64 z-[9999] select-none pointer-events-none`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-md font-normal font-dmsans text-[#ccc] leading-relaxed">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Features;
