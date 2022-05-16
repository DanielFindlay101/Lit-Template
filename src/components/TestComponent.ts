import {LitElement, html, PropertyValues} from 'lit';
import {customElement, query, state, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {

 @query('#canvas')
 canvas!: HTMLCanvasElement

 @query('#video')
 video: HTMLVideoElement

 @property()
 photo: boolean = false

 render() {
  
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
      this.video.srcObject = stream
      this.video.play()
    })
  }
   return html`
      <video id="video" width="640px" height="480px" autoplay></video>
      <button id="snap" @click=${() => this._takePhoto()}>${this.photo? html `CLOSE` : html `SNAP`}</button>
      <button @click=${() => this._clearPhoto()}>CLOSE!</button>
      <canvas id="canvas" width="640px" height="480px"></canvas>
    `
   }

   private _takePhoto() {
    // this.photo = true
    const ctx = this.canvas.getContext('2d')
    ctx?.drawImage(this.video, 0, 0, 640, 480)
   }
   private _clearPhoto() {
    // this.photo = false
    const ctx = this.canvas.getContext('2d')
    ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
   }
  }