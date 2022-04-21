import React , { useState , useEffect } from 'react'
import Draggable from "react-draggable";

function outilsComponents() {
const [images , setImages]= useState([]);
const [imageURLs , setImageURLs] = useState([]);
useEffect (()=>{
  if (images.length < 1)return;
  const newImageUrls = [];
  images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
  setImageURLs(newImageUrls);
}, [images]);
function onImageChange (e){
  setImages ([...e.target.files]);

}
  function changeColor() {
    let color = document.getElementById("colorInputColor").value;
    document.getElementById("colorInputText").value = color;
  }
  function importFile() {
    let file = document.getElementById("fileInputFile").value;
    let image = document.getElementById("fileImageFile").value;

  }
  function dragStart(e) {
    const target = e.target;
    e.dataTransfer.setData('button', target.id);
    setTimeout(() => {
        
         e.target.classList.add('hide');
    }, 0);
}

function dragEnter(e) {
    e.preventDefault();
    
}
function dragOver(e) {
  e.stopPropagation();
   // e.preventDefault();
   
}

function dragLeave(e) {
    e.preventDefault();
}
  return (
    <div> 
       <div className='bg-white h-screen  '>
      
      <h1 className='text-xl ml-5 mt-5'>Boutton:</h1>
      <div id='tols' className='ml-5'>
<div
onDragStart={dragStart}
onDragEnter={dragEnter}
onDragOver={dragOver}
onDragLeave={dragLeave}
id='button' 
draggable='true'
className='w-24 h-8 bg-slate-500'
>
 <button className='text-white ml-2 mt-1'>boutton</button>
</div>
                
        <div className='mt-5 pr-5'>
          <h1 className='text-xl ml-2'>Texte:</h1>
          <input type="text" placeholder='texte ici' className=' mt-2 w-40 h-9 px-5 rounded-full' />

        </div>
        <div className="mt-5 flex flex-col">
          <h1 className="text-xl">Coleur:</h1>
          <div className=''>
            <input type="color" className="cursor-pointer " id='colorInputColor' onChange={changeColor} />
          </div>

          <input type="text" placeholder="code coleur" id='colorInputText' onChange={changeColor} className="ml-2  rounded-full w-28 h-7 px-3" />
         
          <div className='m-2'>
            <label  id="image" className='text-xl '>Image:</label>
            
            <div className='mt-5'>
            <input type="file" multiple accept='image/*' onChange={onImageChange} className='mt-2  cursor-pointer' id='fileInputFile' />
            {imageURLs.map(imageSrc => <img src={imageSrc} draggable='true'/> )}
            </div>
            
          </div>
        </div>
        
      </div>
</div>
    </div>
  )
}

export default outilsComponents