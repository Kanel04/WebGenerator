import {useRef, useEffect} from 'react';

function IframeComponent() {
  const ref = useRef(null);

 
  const loadComponents = () => {
    useEffect(() => {
      // 👇️ use a ref (best)
      const componentText = ref.current;
      console.log(componentText);
      const componentContainer = document.getElementById("components_list");
      console.log(componentContainer);
      componentText.textContent = "Loading components...";
      fetch("/components")
        .then((res) => res.json())
        .then((data) => {
          for (item of data) {
            appendComponentToList(item.components);
          }
        })
        .catch((error) => console.log(error))
        .finally(() => (componentText.textContent = "Liste des components"));
        const appendComponentToList = (data) => {
          const script = document.createElement("script");
          script.text = data.content;
          document.head.appendChild(script);
          const liComponent = document.createElement("li");
          liComponent.classList.add("component", "cursor-pointer");
          const component = document.createElement(data.name);
          liComponent.appendChild(component); 
          componentContainer.appendChild(liComponent);
        };
    
    }, []);
    
  };
   
  loadComponents();

  // Drag component with iframe
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
        <h1 id="component-text" ref={ref}  className="font-bold">Liste des components</h1>
        <ul id="components_list" onLoad={loadComponents}  className="my-4 grid grid-cols-1 gap-8">
       
       <iframe
          src="http://localhost:5000/navbar"
          width="500%"
          height="150%"
        ></iframe>
        </ul>
        <ul id="components_list" onLoad={loadComponents}  className="mt-2">
       
       <iframe
          src="http://localhost:5000/navbar1"
          width="500%"
          height="50%"
        ></iframe>
        </ul>
        <ul id="components_list" onLoad={loadComponents}  className="mt-2">
       
       <iframe
          src="http://localhost:5000/footer1"
          width="500%"
          height="100%"
          className="hidden"
        ></iframe>
        </ul>
    </div>
  )
}

export default IframeComponent