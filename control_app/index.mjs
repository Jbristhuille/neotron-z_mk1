/******************************************************************************
 * @Author                : Jbristhuille<jean-baptiste@halfsquare.fr>         *
 * @CreatedDate           : 2024-03-12 18:21:43                               *
 * @LastEditors           : Jbristhuille<jean-baptiste@halfsquare.fr>         *
 * @LastEditDate          : 2024-03-12 18:39:41                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
  * Modules
  * Constants
  * Setup express
  * Init serial com
  * Init websocke
  * Server listen
*/

/* Imports */
import open from "open";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
/***/

/* Modules */
import { Serial } from "./src/serial.mjs";
/***/

/* Constants */
const PORT = 5000;
const SOCKET_PORT = 5001;
/***/

/* Setup express */
const app = express();
app.use(express.static("client"));
app.use(cors());
/***/

/* Init serial com */
const serial = new Serial("COM3"); // Open communication to serial
/***/

/* Init websocket */
const io = new Server(SOCKET_PORT, {cors: {}});
console.log(`>>> Socket server start on port ${SOCKET_PORT}`);

io.on("connection", (socket) => {
  socket.on("input", (data) => serial.send(String(data)));
});
/***/

/* Server listen */
app.listen(PORT, () => {
  console.log(`>>> Server start on port ${PORT}`);

  if (!process.argv.find((arg) => arg == "--dev")) { // Do not open app in dev mode
    open(`http://localhost:${PORT}`); // Open app
  }
});
/***/
