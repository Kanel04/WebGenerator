

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