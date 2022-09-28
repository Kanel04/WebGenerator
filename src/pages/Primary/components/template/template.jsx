import React from 'react'
import {motion} from 'framer-motion'
import Draggable from "react-draggable";
import { GrTemplate } from "react-icons/gr";
import Iframe from '../Iframe';


function template() {


  return (
      <div> 
          <div className="mt-5">
              <div className="flex flex-row">
                  <GrTemplate className="mt-5 ml-5"></GrTemplate>
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

          <div className=' mt-5 ml-5'>
              
                 
             <div>
<Iframe></Iframe>
             </div>
          </div>
          </div>
  )
}

export default template