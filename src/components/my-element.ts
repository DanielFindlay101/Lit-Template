import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { buttonStyles } from './button-styles'
    
let pressed: boolean = false
    
@customElement('my-element')
class MyElement extends LitElement {
  static styles = buttonStyles
   
  protected render() {
   return html `
    <button class=${pressed ? 'blue-button-pressed' : 'blue-button'}
       @click=${() => this.buttonColor()}>Test</button>
   `;
  }
  
  buttonColor() {
     pressed = !pressed;
     this.requestUpdate();
  }
}