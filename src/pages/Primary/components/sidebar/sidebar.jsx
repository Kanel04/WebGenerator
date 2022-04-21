
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Template from "../template/template";


const SideBar = () => {
  

  return (
    <>
      <div className="bg-white w-96">
        <div >
          <div className="top_section">
            
                <h1
                 className="text-center font-bold mt-5 text-2xl">
                  Template
                </h1>
              
            <div className="mt-1 ml-1">
             </div>
          </div>

        </div>

                     
                <div className="text-center mt-5 text-2xl">
                  <Template></Template>
                </div>
             


      </div>
    </>
  );
};

export default SideBar;
