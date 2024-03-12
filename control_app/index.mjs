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
*/

/* Imports */
import open from "open";
import express from "express";
/***/

/* Modules */
import { Serial } from "./src/serial.mjs";
/***/

/* Constants */
const PORT = 5000;
/***/

/* Setup express */
const app = express();
app.use(express.static("client"));
/***/

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);

  const serial = new Serial("COM3"); // Open communication to serial
  open(`http://localhost:${PORT}`); // Open application
});

