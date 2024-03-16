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
  constructor() {
    this.getPortList().then((ports) => {
      let arduino = ports.find((el) => el.productId == "0043");

      if (arduino) {
        this.init(arduino.path);
    
        console.log(`>>> Connected to arduino on port ${arduino.path} !`);
      } else {
        console.log(">>> Arduino not found...");
      }
    });
  }
  /***/

  /**
  * Init com to specified port
  * @param path - Path to port 
  */
  init(path) {
    this.port = new SerialPort({
      path: path,
      baudRate: 115200
    });
  }
  /***/

  /**
  * Get port list
  * @return - List of ports 
  */
  getPortList() {
    return new Promise((resolve) => {
      SerialPort.list().then((ports) => {
        return resolve(ports);
      });
    })
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
