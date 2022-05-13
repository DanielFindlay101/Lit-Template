import {ReactiveController, ReactiveControllerHost, render} from 'lit';
import {LitElement, html} from 'lit';

export class ClockController implements ReactiveController {
  host: ReactiveControllerHost;
 
  seconds = 0
  minutes = 0
  hours = 0
  value: any
  timeout: number;
  private _timerID?: number
   
  constructor(host: ReactiveControllerHost, timeout = 1000) {
    (this.host = host).addController(this);
    this.timeout = timeout

  }
  hostConnected() {
    // Start a timer when the host is connected
     setInterval(() => {
    this.seconds++

    if(this.seconds > 59){
      this.minutes++
      this.seconds = 0
    } 
    if(this.minutes > 59){
      this.hours++
      this.minutes = 0
    }      

    this.value = html`${this.hours} : ${this.minutes} : ${this.seconds}`
    // Update the host with new value
     this.host.requestUpdate();
    }, 1000);
  }
  hostDisconnected() {
        // Clear the timer when the host is disconnected
        clearInterval(this._timerID);
        this._timerID = undefined;
  }
}