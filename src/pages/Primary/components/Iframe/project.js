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