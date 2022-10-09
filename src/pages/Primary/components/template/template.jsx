import React , {useRef, useEffect , useState} from 'react';

function template(props) {
  const componentText = document.querySelector("#component-text");
  const componentContainer = document.querySelector("#components_list");
  const treelist = document.querySelector("#treelist");
  
  const loadComponents = () => {
    componentText.textContent = "Loading components...";
    fetch("/components")
      .then((res) => res.json())
      .then((data) => {
        for (item of data) {
          console.log(item);
          appendComponentToList(item.components);
        }
      })
      .catch((error) => alert(error))
      .finally(() => (componentText.textContent = "Components list"));
  };
//Draggable 
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
<div className='overflow-y-auto h-96'>
<h1 id="component-text"  className="font-bold">Liste des components</h1>
<ul id="components_list" className="my-4 grid grid-cols-1 gap-8">
<div className='mt-5'>
<h2 className='font-bold  text-lg'>Barre de Navigation</h2>
</div>  
<div
onDragStart={dragStart}
onDragEnter={dragEnter}
onDragOver={dragOver}
onDragLeave={dragLeave}
id='button' 
draggable='true'
className='item'
>
<nav class="py-3 px-4 bg-gray-600 flex flex-row " >
            <button class="rounded-md px-4 py-3 bg-pink-600 text-white font-bold">
              Commencer
            </button>
            <div>
                <a href="#" class="text-white ml-60 pl-40" >Logo</a>
            </div>
            <div class="ml-2">
                <a href="#" class="text-white" >Contact</a>
            </div>
            <div class="ml-2">
                <a href="#" class="text-white" >Service</a>
            </div>
            <div class="ml-2">
                <a href="#" class="text-white" >A propos</a>
            </div>     
          </nav>
</div>
<div
onDragStart={dragStart}
onDragEnter={dragEnter}
onDragOver={dragOver}
onDragLeave={dragLeave}
id='button' 
draggable='true'
className='item'
>
<nav class="py-3 px-4 bg-gray-600 flex flex-row " >
            <button class="rounded-md px-4 py-3 bg-pink-600 text-white font-bold">
              Commencer
            </button>
            <div>
                <a href="#" class="text-white ml-60 pl-40" >Logo</a>
            </div>
            <div class="ml-2">
                <a href="#" class="text-white" >Contact</a>
            </div>
            <div class="ml-2">
                <a href="#" class="text-white" >Service</a>
            </div>
            <div class="ml-2">
                <a href="#" class="text-white" >A propos</a>
            </div>     
          </nav>
</div> 
</ul>

 </div>
 </div>
  )
}

export default template