import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

@customElement("my-element")
export class MyElement extends LitElement {

  @property()
  listItems = [
    { text: 'Make a list', completed: true },
    { text: 'Phone Home', completed: false }
  ];

  @query('#newitem')
    input!: HTMLInputElement;

  render() {
    return html `
      <h2>To Do</h2>
      <ul>
        ${this.listItems.map((item) => 
            html `<li>${item.text}</li>`
          )}
      </ul>
      <input id="newitem" aria-label="New item">
      <button @click=${this.addTodo}>Add</button>
    `
  }
    // Add click handler
    addTodo() {
        this.listItems.push({text: this.input.value, completed: false})
        this.input.value = ''
        this.requestUpdate()
    }
  }

 