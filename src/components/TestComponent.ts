import {LitElement, html} from 'lit';
import {customElement, query, property} from 'lit/decorators.js';


@customElement('my-element')
export class MyElement extends LitElement {

 @query('#canvas')
 canvas: HTMLCanvasElement

 @query('#video')
 video: HTMLVideoElement

 render() {
  // const ctx = this.canvas.getContext('2d')
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
      this.video.srcObject = stream
      this.video.play()
    })
  }
   return html`
      <h1>Testing</h1>
      <video id="video" width="640px" height="480px" autoplay></video>
      <button id="snap">Take Photo</button>
      <canvas id="canvas" width="640px" height="480px"></canvas>
    `
   }
  }