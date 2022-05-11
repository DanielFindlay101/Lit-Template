import Timer from 'easytimer.js';
import {LitElement, html, _$LE} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-element')
class MyElement extends LitElement {


 render() {
  const timer = new Timer();
  timer.start();

  timer.addEventListener('secondsUpdated', function(e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
  })

  return html`
    <h1>My timer</h1>
    <div id="basicUsage">00:00:00</div>
    `;
  }
}