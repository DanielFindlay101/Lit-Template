import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js'


@customElement('my-element')
class MyElement extends LitElement {

@property()
listItems = ["Clean House", "Feed Cat", "Wash Dishes"]

@property()
input!: HTMLInputElement

render() {
  return html  `
   ${map(this.listItems,(item, id) => html `
    <li>
     ${item}
      <button @click=${() => this._toggleDelete(id)}>Delete Task</button>
    </li>`)}
    <h2>Add a new task</h2>
    <input type="text" placeholder="Enter Task:"/>
    <button @click=${() => this._toggleAdd()}>Add</button>
  `
 }
 private _toggleDelete(id: number) {
  this.listItems = this.listItems.filter((_, i) => i !== id)
 }
 private _toggleAdd(){
   console.log("Here");
   
   this.listItems.push()
 }
}