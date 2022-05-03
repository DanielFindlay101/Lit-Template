import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

type ToDoItem = {
  text: string,
  completed: boolean
}
@customElement("my-element")
export class MyElement extends LitElement {

    @property({attribute: false})   //Don't understand the false attribute
    listItems = [
      { text: "Make a list", completed: false },
      { text: "Phone home" , completed: false }
    ]

    //styles
    static styles = css`
      .completed {
        text-decoration-line: line-through;
        color: #777;
      }
    `;

  render() {
    return html `
      <h2>ToDo</h2>
      <ul>
        ${this.listItems.map((item) => 
          html `<li
          class=${item.completed ? 'completed' : ''}
          @click=${() => this.toggleCompleted(item)}
          >
          ${item.text}</li>`
          )}
      </ul>
      <input id="newitem" placeholder="New item">
      <button @click=${this.addToDo}>Add</button>
    `
  }

  toggleCompleted(item: ToDoItem) {
    item.completed = !item.completed;
    this.requestUpdate()
  }

  @query('#newitem')
  input!: HTMLInputElement

  addToDo() {
    this.listItems.push({ text: this.input.value, completed: false})
    this.input.value = '';
    this.requestUpdate();
   }
  }
