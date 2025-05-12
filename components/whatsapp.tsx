"use client";
import { useState, useEffect, useRef } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { BsArrowRight, BsStars, BsSend } from "react-icons/bs";
import { AnimatePresence, motion } from "motion/react";

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [currentSuggestion, setCurrentSuggestion] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
    });

    const modalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const suggestions = [
        "I need an institutional website.",
        "I want an online jewelry store.",
        "I need a commercial logo.",
        "I want a personalized system.",
        "I need an application."
    ];

    const placeholderVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSuggestion((prev) => (prev + 1) % suggestions.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setStep(0);
                setFormData({ name: '', subject: '' });
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen, step]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const steps = [
        {
            title: "Let's Create Something Amazing?",
            description: "Tell us about your dream project.",
            field: "subject",
            placeholder: ""
        },
        {
            title: "Can we call you?",
            description: "To make it more personal.",
            field: "name",
            placeholder: "What is your name?"
        }
    ];

    const handleNext = () => {
        if (step === steps.length - 1) {
            const message = `Hello, I am ${formData.name}. I would like to talk to you about: ${formData.subject}`;
            window.open(`https://wa.me/+917069903244?text=${encodeURIComponent(message)}`, '_blank');
            setIsOpen(false);
            setStep(0);
            setFormData({ name: '', subject: '' });
            return;
        }
        setStep(prev => prev + 1);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && formData[steps[step].field as keyof typeof formData]) {
            handleNext();
        }
    };

    const toggleCard = (e: React.MouseEvent) => {
        e.stopPropagation();

        if (isOpen) {
            setIsOpen(false);
            setStep(0);
            setFormData({ name: '', subject: '' });
            return;
        }
        setIsOpen(true);
    };

    return (
        <div className="fixed right-8 bottom-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-full right-0 mb-4 bg-[#0A0A0B] border border-[#151516] rounded-lg p-4 w-[340px] shadow-lg"
                    >
                        <div className="flex flex-col gap-3">
                            <div className="space-y-0">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white font-poppins text-sm font-medium">
                                        {steps[step].title}
                                    </h3>
                                    <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-spacefy/10">
                                        <BsStars className="text-spacefy text-sm" />
                                    </div>
                                </div>
                                <p className="text-[#666] text-sm font-dmsans">
                                    {steps[step].description}
                                </p>
                            </div>

                            <div className="relative group">
                                <div className="relative">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={formData[steps[step].field as keyof typeof formData]}
                                        onChange={(e) => setFormData(prev => ({
                                            ...prev,
                                            [steps[step].field]: e.target.value
                                        }))}
                                        onKeyPress={handleKeyPress}
                                        className="w-full bg-[#0A0A0B] border border-[#151516] rounded-lg pl-4 pr-14 py-3
                    text-white font-dmsans text-sm
                    transition-all duration-200 ease-out
                    focus:outline-none focus:ring-0
                    focus:border-spacefy/50
                    group-hover:border-[#222222]"
                                        placeholder={steps[step].placeholder}
                                    />
                                    {step === 0 && !formData.subject && (
                                        <AnimatePresence mode="wait" initial={false}>
                                            <motion.span
                                                key={currentSuggestion}
                                                variants={placeholderVariants}
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                                transition={{ duration: 0.2 }}
                                                className="absolute inset-0 pl-4 pr-14 py-3 text-gray-600 text-sm font-dmsans pointer-events-none"
                                            >
                                                {suggestions[currentSuggestion]}
                                            </motion.span>
                                        </AnimatePresence>
                                    )}
                                </div>
                                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                                    <motion.button
                                        variants={{
                                            initial: { scale: 1 },
                                            hover: { scale: 1.05 },
                                            tap: { scale: 0.95 }
                                        }}
                                        initial="initial"
                                        whileHover="hover"
                                        whileTap="tap"
                                        onClick={handleNext}
                                        disabled={!formData[steps[step].field as keyof typeof formData]}
                                        className="w-10 h-8 flex items-center justify-center
                    bg-spacefy rounded-lg text-white transition-all duration-200
                    disabled:opacity-50 disabled:cursor-not-allowed 
                    hover:bg-white hover:text-black group-hover:opacity-100"
                                    >
                                        {step === 0 ? (
                                            <BsArrowRight className="text-lg" />
                                        ) : (
                                            <BsSend className="text-lg" />
                                        )}
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-[-4px] right-4 w-2 h-2 bg-[#0A0A0B] border-r border-b border-[#151516] rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        className="bg-white hover:bg-[#4F46E8] group p-3.5 rounded-full shadow-lg hover:shadow-xl transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.3,
                                type: "spring",
                                stiffness: 200,
                                damping: 20
                            }
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => toggleCard(e)}
                    >
                        <FaWhatsapp className="text-black transition duration-300 group-hover:text-white text-2xl" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WhatsAppButton;
