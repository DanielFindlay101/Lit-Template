import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './styles'

@customElement('motion-carousel')
class MotionCarousel extends LitElement {
  static styles = styles;

  private selectdInternal = 0
  @property({type: Number})
  selected = 0;

  get maxSelected() {
    return this.childElementCount - 1
  }

  hasValidSelected() {
    return this.selected >=0
  }

  render() {  
    return html`
    <div class="fit">
      <slot></slot>
    </div>`
  }
}