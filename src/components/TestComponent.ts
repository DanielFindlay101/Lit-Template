import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  names = ["Daniel", "Katie", "Conrad", "Ian", "Tony", "Ethan"]

  render() {
    return html`
    <p>List of friends names containing the letter "a"</p>
    <ul>
      ${this.names
        .filter((name) => name.match(/o/i))
        .map((name) => html`<li>${name}</li>`)
      }
    </ul>
    `
  }
}