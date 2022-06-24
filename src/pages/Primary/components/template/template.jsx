import React from 'react'
import {motion} from 'framer-motion'
import Draggable from "react-draggable";
import { GrTemplate } from "react-icons/gr";
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
const menuAnimation = {
    hidden: {
        opacity: 0,
        height: 0,
        padding: 0,
        transition: { duration: 0.3, when: "afterChildren" },
    },
    show: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.3,
            when: "beforeChildren",
        },
    },
};
const menuItemAnimation = {
    hidden: (i) => ({
        padding: 0,
        x: "-100%",
        transition: {
            duration: (i + 1) * 0.1,
        },
    }),
    show: (i) => ({
        x: 0,
        transition: {
            duration: (i + 1) * 0.1,
        },
    }),
};

function template() {
  return (
      <motion.div
          variants={showAnimation}
          initial="hidden"
          animate="show"
          exit="hidden"
      > 
          <div className="mt-5">
              <label for="template" >Choisissez votre Template:</label>
              <div className="flex flex-row">
                  <GrTemplate className="mt-5 ml-2"></GrTemplate>
                  <select name="template" id="template" className="w-40 ml-2  mt-5 text-lg px-2 h-7 ">
                      <option value="header">header</option>
                      <option value="navbar">navbar</option>
                      <option value="sidebar">sidebar</option>
                      <option value="article">article</option>
                      <option value="CTA">CTA</option>
                      <option value="root">root</option>
                      <option value="footer">footer</option>
                  </select>
              </div>
              
          </div>

          <div className='flex flex-col'>
              <Draggable>
                  <div className='bg-black text-white w-28 mt-16 ml-5 '>
                      card
                  </div>
              </Draggable>
              <Draggable>
                  <div className='bg-black text-white w-28 mt-5 ml-5 '>
                      card
                  </div>
              </Draggable>
              <Draggable>
                  <div className='bg-black text-white w-28 mt-5 ml-5 '>
                      card
                  </div>
              </Draggable>
          </div>
          </motion.div>
  )
}

export default template