import React from 'react'
import {motion} from 'framer-motion'
import Draggable from "react-draggable";
import { GrTemplate } from "react-icons/gr";


function template() {
    function dragStart(e) {
        const target = e.target;
        e.dataTransfer.setData('text/plain', target.id);
        setTimeout(() => {
            
             e.target.classList.add('hide');
        }, 0);
        console.log('dragStart....');
    }

    function dragEnter(e) {
        e.preventDefault();
        console.log('dragEnter..')
        
    }
    function dragOver(e) {
        //e.preventDefault();
        e.stopPropagation();
        console.log('dragOver...')
       
    }

    function dragLeave(e) {
        e.preventDefault();
        console.log('dragLeave...')
    }
    

  return (
      <div> 
          <div className="mt-5">
              <label for="template" className='text-xl'>Choisissez votre Template:</label>
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

          <div className='flex flex-col'>
              
                  <div
                   onDragStart={dragStart}
                   onDragEnter={dragEnter}
                   onDragOver={dragOver}
                   onDragLeave={dragLeave}
                   className='drag-over bg-black text-white w-28 mt-16 ml-5 ' 
                   id='item' 
                   draggable='true'>
                      card
                  </div>
              
            
          </div>
          </div>
  )
}

export default template