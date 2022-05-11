import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import type { TemplateResult } from 'lit';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  friends = ["Daniel", "Katie", "Conrad"]

  @state()
  pets = [
    { name: "Gizmo", species: "Cat" },
    { name: "Holly", species: "Dog" },
    { name: "Trevor", species: "Tortoise" }
  ]

  @state()
  displayPet: boolean = true

  render() {
    const listItems: TemplateResult[] = []
    this.friends.forEach((friend) => {
      listItems.push(html`<li>${friend}</li>`)
    })
    if(this.displayPet) {
      this.pets.forEach((pet) => {
        listItems.push(html`<li>${pet.name}(${pet.species})</li>`)
      })
    }
    return html`
    <button @click=${this.togglePetVisibility}>
      ${this.displayPet ? "Hide" : "Show"} pets
    </button>
      <ul>
        ${listItems}
      </ul>
    `
  }
  private togglePetVisibility() {
    this.displayPet =! this.displayPet
  }
}