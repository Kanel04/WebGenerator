import React from 'react'
import Draggable from "react-draggable";
function template() {
  return (
      <div> <h1 className="text-2xl mt-4">Template</h1>
          <div className="mt-5">
              <label for="template" >Choisissez votre Template:</label>

              <select name="template" id="template" className="w-40  mt-2 text-lg px-2 h-7 rounded-xl">
                  <option value="header">header</option>
                  <option value="navbar">navbar</option>
                  <option value="sidebar">sidebar</option>
                  <option value="article">article</option>
                  <option value="CTA">CTA</option>
                  <option value="root">root</option>
                  <option value="footer">footer</option>
              </select>
          </div>

          <div className='flex flex-col'>
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
              <Draggable>
                  <div className='bg-black text-white w-28 mt-5 ml-5 '>
                      card
                  </div>
              </Draggable>
          </div>
          </div>
  )
}

export default template