import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ClockController} from './clock-controller'

@customElement('my-element')
class MyElement extends LitElement {
  // Create the controller and store it
  private clock = new ClockController(this, 100);

  // Use the controller in render()
  render() {
    const formattedTime =(this.clock.value);
    return html`${formattedTime}`;
  }
}