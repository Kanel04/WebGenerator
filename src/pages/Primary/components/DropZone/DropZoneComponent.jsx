import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
function DropZoneComponent() {
    function drop(e) {
      e.preventDefault();
      console.log(e.target);
      if(e.dataTransfer.getData("text/plain")){
        const card_id = e.dataTransfer.getData("text/plain");
        const card = document.getElementById(card_id);
        card.style.display = "block";
        e.target.appendChild(card);
      }
        //const classes = "item bg-slate-500 w-10 h-10 items-center ml-2 mt-2"
       // e.target.classList.remove('drag-over');
      
        // get the draggable element
        //const id = e.dataTransfer.getData('text/plain');
        //const draggable = document.getElementById(id);
       // const element = document.createElement('div');
        
        //classes.split(' ').forEach((classe)=>{
        //    element.classList.add(classe)
      // })
    
        // add it to the drop target
       // e.target.appendChild(element);
    
        // display the draggable element
       // draggable.classList.remove('hide');
    }
//another drop zone
const onDrop = useCallback(acceptedFiles => {
  // Do something with the files
}, [])
const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
  return (
   
    <div 
    onDrop={drop}
    className='w-screen bg-gray-200 ml-20'
    >   
   <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
    </div>

  )
}

export default DropZoneComponent