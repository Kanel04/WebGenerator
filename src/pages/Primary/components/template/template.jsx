import React from 'react'
import {motion} from 'framer-motion'
import Draggable from "react-draggable";
import { GrTemplate } from "react-icons/gr";
import Framer from '../Iframe/index'

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
    
// Iframe component with Backend
const componentText = document.querySelector("#component-text");
const componentContainer = document.querySelector("#components_list");
const loadComponents = () => {
    componentText.textContent = "Loading components...";
    fetch("/components")
      .then((res) => res.json())
      .then((data) => {
        for (item of data) {
          appendComponentToList(item.components);
        }
      })
      .catch((error) => alert(error))
      .finally(() => (componentText.textContent = "Components list"));
  };

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
             <div>
                <h1 id="component-text" className='font-bold'>components List</h1>
                <ul id="components_list" onLoad={loadComponents} className="my-4 grid grid-cols-1 gap-8"></ul>
                
             </div>
          </div>
          </div>
  )
}

export default template