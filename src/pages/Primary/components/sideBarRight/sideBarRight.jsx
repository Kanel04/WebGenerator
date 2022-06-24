
import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Outils from "../utils/outilsComponents";


const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <div className="bg-white mt-28 rounded-l-xl">
                <motion.div
                    animate={{
                        width: isOpen ? "180px" : "45px",

                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                        },
                    }}
                    className={`sidebar `}
                >
                    <div className="top_section">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="text-center ml-28 mt-5 text-2xl"
                                >
                                    Outils
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <div className="mt-1 ml-1">
                            <AiFillSetting onClick={toggle} className="w-8 h-8" />
                        </div>
                    </div>

                </motion.div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            
                        >
                            <Outils></Outils>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </>
    );
};

export default SideBar;
