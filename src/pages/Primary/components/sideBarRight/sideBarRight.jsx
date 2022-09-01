
import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Outils from "../utils/outilsComponents";


const SideBarRight = () => {
    
    return (
        <>
            <div className="bg-white w-96">
                <div
                 
                                 >
                    <div className="top_section">
                        <AnimatePresence>
                              <h1
                                   
                                    className="text-center  mt-5 text-2xl"
                                >
                                    Outils
                                </h1>
                          
                        </AnimatePresence>
                            <Outils></Outils>
                        <div className="mt-1 ml-1">
                           
                        </div>
                    </div>

                </div>

                

            </div>
        </>
    );
};

export default SideBarRight;
