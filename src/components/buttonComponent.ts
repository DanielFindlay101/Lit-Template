import {LitElement, html, PropertyValues} from 'lit';
import {customElement, eventOptions} from 'lit/decorators.js';

@customElement('button-element')
export class ButtonElement extends LitElement {
    
 render() {
  return html  `
   <button @click=${() => {
     window.dispatchEvent(new CustomEvent('take-photo'))
     }}>Test</button>`
    }
 }