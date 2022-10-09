import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
function DropZoneComponent() {
    function drop(e) {
      e.preventDefault();
      console.log(e.target);
       
      if(e.dataTransfer.getData("navbar")){
        const card_id = e.dataTransfer.getData("navbar");
        const card = document.getElementById(card_id);
        card.style.display = "block";
        e.target.appendChild(card);
        console.log(card_id);
      }
      if(e.dataTransfer.getData("button")){
        const card_id = e.dataTransfer.getData("button");
        const card = document.getElementById(card_id);
        card.style.display = "block";
        e.target.appendChild(card);
        
      }
       
    }

//another drop zone
const onDrop = useCallback(acceptedFiles => {
  // Do something with the files
}, [])
const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
  return (
   
    <div 
    onDrop={drop}
    className='w-screen bg-gray-200 border-5  min-h-[70vh]'
    >   
   <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the template here ...</p> :
          <p className=' text-gray-200'>.</p>
      }
    </div>
    </div>

  )
}

export default DropZoneComponent