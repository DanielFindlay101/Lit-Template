import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement("my-element")
export class MyElement extends LitElement {

  @property()
  checked: boolean = false;


  render() {
    return html `
      <div>
        <input type="text" value="Hello There" ?disabled=${!this.checked}>
      </div>
      <label><input type="checkbox" @change=${this.setChecked}>Enable Editing</label>
      `
  }

  setChecked(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
    console.log("You pressed me!")
  }

 }