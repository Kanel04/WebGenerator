import io from 'socket.io-client';
const socket = io();
const main = document.querySelector("main");
export const mainScript = () =>{
    socket.on("receive-component", (data) => {
        const script = document.createElement("script");
        script.text = data.content;
        document.head.appendChild(script);
        const variable = document.createElement(data.name);
        main.appendChild(variable);
      });
}
mainScript();

liComponent.addEventListener("click", (e) => {
  socket.emit("add-component", data);
  // Adding element in treelist
  const li = document.createElement("li");
  li.classList.add("tree-item");
  li.textContent = `${document.querySelectorAll(".tree-item").length + 1} - ${
    data.name
  }`;
  treelist.appendChild(li);
});