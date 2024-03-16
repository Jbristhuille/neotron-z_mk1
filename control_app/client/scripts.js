/******************************************************************************
 * @Author                : Jbristhuille<jean-baptiste@halfsquare.fr>         *
 * @CreatedDate           : 2024-03-14 13:47:39                               *
 * @LastEditors           : Jbristhuille<jean-baptiste@halfsquare.fr>         *
 * @LastEditDate          : 2024-03-16 14:14:37                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
*/

/* Imports */
import { io } from "https://cdn.socket.io/4.7.4/socket.io.esm.min.js";
/***/

const socket = io("localhost:5001"); // Connect socket

socket.on("connect", () => {
  let status = document.querySelector(".socket-status");
  status.classList.add("active");
});

socket.on("disconnect", () => {
  let status = document.querySelector(".socket-status");
  status.classList.remove("active");
})

let onDown;

const handleInput = (key) => {
  switch (key) {
    case 122:
      let front = document.querySelector(".input.front");
      front.classList.add("active");
    break;

    case 113:
      let left = document.querySelector(".input.left");
      left.classList.add("active");
    break;

    case 100:
      let right = document.querySelector(".input.right");
      right.classList.add("active");
    break;

    default:
      let inputs = document.querySelectorAll(".input");
      for (let i = 0; i < Array.from(inputs).length; i++) {
        inputs[i].classList.remove("active");
      }
    break;
  }
};

window.addEventListener("keydown", (e) => {
  if (onDown != e.key) {
    onDown = e.key;
    socket.emit("input", (e.key.charCodeAt(0)));
    handleInput((e.key.charCodeAt(0)));
  }
});

window.addEventListener("keyup", (e) => {
  onDown = null;
  socket.emit("input", 0);
  handleInput(0);
});
