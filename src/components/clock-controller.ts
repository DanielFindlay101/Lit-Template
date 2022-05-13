import {ReactiveController, ReactiveControllerHost} from 'lit';
import {LitElement, html} from 'lit';

export class ClockController implements ReactiveController {
  host: ReactiveControllerHost;

  time = 0 
  seconds = 0
  minutes = 0
  hours = 0
  value: any
   
  constructor(host: ReactiveControllerHost, timeout = 1000) {
    (this.host = host).addController(this);

  }
  hostConnected() {
    // Start a timer when the host is connected
     setInterval(() => {
    this.seconds++
    if(this.seconds > 59){
      this.minutes++
      this.seconds = 0
    }       
    this.value = html`0${this.hours} : 0${this.minutes} : 0${this.seconds}`
    // Update the host with new value
     this.host.requestUpdate();
    }, 1000);
  }
  hostDisconnected() {

  }
}