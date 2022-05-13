import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js'
import { ComponentStyles } from './styles/ComponentStyles'

interface Todo {
  task: string,
  completed: boolean
}

@customElement('my-element')
class MyElement extends LitElement {

 static styles = ComponentStyles 

@property()
listItems: Todo[] = [
  {task: "Clean House", completed: false},
  {task: "Feed Cat", completed: false},
  {task: "Wash Dishes", completed: false}
  ]

@query('#newitem')
input!: HTMLInputElement


render() {
  return html  `
   ${map(this.listItems,(item, id) => html `
   <div class="container">
    <li>
      <input type="checkbox" @click=${() => this._toggleCompleted(item)} />
      <span class=${item.completed ? "completedTask" : ""}>
        ${item.task}
      </span>
      <button class="delete-btn" @click=${() => this._toggleDelete(id)}>Delete Task</button>
    </li>
  </div>`)}
   

    <h2>Add a new task</h2>
    <input type="text" placeholder="Enter Task:" id='newitem'/>
    <button @click=${() => this._toggleAdd()}>Add</button>
  `
 }
 private _toggleDelete(id: number) {
  this.listItems = this.listItems.filter((_, i) => i !== id)
 }
 private _toggleAdd(){
   this.listItems = [...this.listItems, {task: this.input.value, completed: false}]
   this.input.value = ''
 }
 private _toggleCompleted(item: Todo){
  item.completed = !item.completed
  this.requestUpdate()
 }
}