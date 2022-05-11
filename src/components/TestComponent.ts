import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { map } from 'lit/directives/map.js'

@customElement('my-element')
class MyElement extends LitElement {
 @property()
 groceries = ["Milk", "Apples", "Bananas", "Chocolate"]

 render() {
  return html `
   ${map(
     this.groceries,
     (item, index) => html `
     <ul>
       ${item}
       <button @click=${() => this._deleteItem(index)}>Delete</button>
     </ul>
     `
   )}
  `
 }

 private _deleteItem(index: number){
   this.groceries = this.groceries.filter((_, i) => i !== index)
 }
}