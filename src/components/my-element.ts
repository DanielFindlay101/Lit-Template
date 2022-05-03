import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

@customElement("my-element")
export class MyElement extends LitElement {

    @property() 
    listItems = [
      { text: "Make a list", completed: true },
      { text: "Phone home" , completed: false }
    ]

    @query('#newitem')
    input!: HTMLInputElement

  render() {
    return html `
      <h2>ToDo</h2>
      <ul>
        ${this.listItems.map((item) => 
          html `<li>${item.text}</li>`
          )}
      </ul>
      <input id="newitem" placeholder="New item">
      <button @click=${this.addToDo}>Add</button>
    `
  }

  addToDo() {
    this.listItems.push({ text: this.input.value, completed: false})
    this.input.value = '';
    this.requestUpdate();
  }

  }

 