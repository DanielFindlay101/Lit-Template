import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { elapsedTimer } from './timer';

@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`
     <h3>My Timer</h3>
    `
  }
}
