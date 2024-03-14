/******************************************************************************
 * @Author                : Jbristhuille<jean-baptiste@halfsquare.fr>         *
 * @CreatedDate           : 2024-03-12 18:25:43                               *
 * @LastEditors           : Jbristhuille<jean-baptiste@halfsquare.fr>         *
 * @LastEditDate          : 2024-03-12 18:28:09                               *
 *****************************************************************************/

/* SUMMARY
  * Imports
*/

/* Imports */
import { SerialPort } from "serialport";
/***/

export class Serial {
  port;

  /**
  * Initialize serial com
  * @param port - Port to communicate 
  */
  constructor(port) {
    this.port = new SerialPort({
      path: port,
      baudRate: 115200
    });

    console.log(">>> Serial COM connected !");
  }
  /***/

  /**
  * Send to serial port
  * @param data - Data to send  
  */
  send(data) {
    this.port.write(data);
  }
  /***/
}
