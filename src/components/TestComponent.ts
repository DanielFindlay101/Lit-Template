import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import type { TemplateResult } from 'lit';
@customElement('my-element')
class MyElement extends LitElement {
@state()
friends = ["Daniel", "Katie", "Conrad"]

@state()
pets = [
  { name: "Gizmo", species: "cat"},
  { name: "Sammy", species: "dog"},
  { name: "Trevor", species: "tortoise"}
]

@state()
displayPets: boolean = true

render() {
  const listItems: TemplateResult[] =[]
  this.friends.forEach((friend) => {
    listItems.push(html`<li>${friend}</li>`)
  })
  if(this.displayPets){
    this.pets.forEach((pet) => {
      listItems.push(html`<li>${pet.name}(${pet.species})</li>`)
    })
  } 
  return html`
  ${listItems}
  <button @click=${this._togglePetDisplay}>
    ${this.displayPets ? "Hide" : "Show"}
  </button>
  `
}
 
private _togglePetDisplay() {
  this.displayPets = !this.displayPets
}


}
