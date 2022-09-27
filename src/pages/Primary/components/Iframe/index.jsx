import React from 'react';

function IframeComponent() {
/*   const componentText = document.querySelector("#component-text");
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

loadComponents();

 */
  return (
    <div>
        <h1 id="component-text"   className="font-bold">Components List</h1>
        <ul id="components_list"   className="my-4 grid grid-cols-1 gap-8">
                    
        </ul>
    </div>
  )
}

export default IframeComponent