# Importing Libraries 
import serial 
import time 

arduino = serial.Serial(port='COM5', baudrate=115200, timeout=.1) 

def write_read(x): 
    arduino.write(bytes(x, 'utf-8')) 
    time.sleep(0.05)

while True: 
    print("--- Choose command ---")
    print("1 - LEFT")
    print("2 - RIGHT")
    print("3 - Exit")

    cmd = input("\n[1-3] command: ")

    if (cmd == "1"): write_read("42")
    elif (cmd == "2"): write_read("58")
    elif(cmd == "3"): exit()
    else: print("\nCommand not found...\n")
