/******************************************************************************
 * @Author                : Jbristhuille<jean-baptiste@halfsquare.fr>         *
 * @CreatedDate           : 2024-03-14 13:47:39                               *
 * @LastEditors           : Jbristhuille<jean-baptiste@halfsquare.fr>         *
 * @LastEditDate          : 2024-03-14 14:26:20                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
*/

/* Imports */
import { io } from "https://cdn.socket.io/4.7.4/socket.io.esm.min.js";
/***/

const socket = io("localhost:5001"); // Connect socket
let onDown;

window.addEventListener("keydown", (e) => {
  if (onDown != e.key) {
    onDown = e.key;
    socket.emit("input", (e.key.charCodeAt(0)));
  }
});

window.addEventListener("keyup", (e) => {
  onDown = null;
  socket.emit("input", "000");
});
