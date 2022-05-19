import { LitElement, html, customElement, css } from "lit-element";
import './childComponent'

@customElement("my-element")
class MyContainer extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <my-button @myClick=${this.handleClick} label="Hello LitElement">
      </my-button>
    `;
  }

  private handleClick(e: Event) {
    console.log("MyContainer, myClick", e);
  }
}