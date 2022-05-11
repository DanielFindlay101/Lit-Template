import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import { map } from 'lit/directives/map.js'

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  guitars = new Set (["Ibanez", "Jackson", "Fender", "Gibson"])

  render() {
    return html`
    <p>My guitar list</p>
    <ul>
      ${map(this.guitars, (guitar) => html`<li>${guitar}</li>`)}
    </ul>
    `
  }
}