import React from 'react'
import Draggable from "react-draggable";

function outilsComponents() {
  function changeColor() {
    let color = document.getElementById("colorInputColor").value;
    document.getElementById("colorInputText").value = color;
  }
  function importFile() {
    let file = document.getElementById("fileInputFile").value;
    let image = document.getElementById("fileImageFile").value;

  }
  return (
    <div>  <div className='mt-28 bg-white rounded-l-lg  h-screen  '>
      
      <h1 className='text-xl ml-5 mt-5'>Boutton:</h1>
      <div id='tols' className='ml-5'>

        <Draggable>
          <button className='bg-slate-500 w-24 h-8  text-white' >boutton</button>
        </Draggable>
        <div className='mt-5 pr-5'>
          <h1 className='text-xl ml-2'>Texte:</h1>
          <input type="text" placeholder='texte ici' className=' mt-2 w-40 h-9 px-5 rounded-full' />

        </div>
        <div className="mt-5 flex flex-col">
          <h1 className="text-xl">Coleur:</h1>
          <div className='ml-3  '>
            <input type="color" className="cursor-pointer " id='colorInputColor' />
          </div>

          <input type="text" placeholder="code coleur" id='colorInputText' className="ml-2  rounded-full w-28 h-7 px-3" />
          <input type="button" id='colorButton' value='Changer le coleur' onClick={changeColor} className='mt-2 h-9 rounded-xl w-40 bg-slate-900 text-white' />
          <div className='m-2'>
            <label htmlFor="image" id="image" className='text-xl '>Image:</label>
            <input type="file" className='mt-2' id='fileInputFile' />
            <div className='mt-5'>

            </div>
            <input type="button" onClick={importFile} id='fileButton' value="Importer l'image" className='mt-2 h-9 w-40 rounded-xl bg-slate-900 text-white' />
          </div>
        </div>
        <button className='mt-2 bg-slate-900 w-40 h-10 text-white rounded-xl ml-15'>Ajouter</button>
      </div>
</div>
    </div>
  )
}

export default outilsComponents