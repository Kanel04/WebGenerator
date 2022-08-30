import React from 'react'

function DropZoneComponent() {
    function drop(e) {
        const classes = "item bg-yellow-500 w-10 h-10 items-center ml-2 mt-2"
        e.target.classList.remove('drag-over');
    
        // get the draggable element
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        const element = document.createElement('div');
        
        classes.split(' ').forEach((classe)=>{
            element.classList.add(classe)
        })
    
        // add it to the drop target
        e.target.appendChild(element);
    
        // display the draggable element
        draggable.classList.remove('hide');
    }
  return (
    <div 
    onDrop={drop}
    
    >

    </div>
  )
}

export default DropZoneComponent