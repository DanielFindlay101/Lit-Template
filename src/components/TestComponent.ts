import {LitElement, html, PropertyValues} from 'lit';
import {customElement, query, state, property} from 'lit/decorators.js';
import './buttonComponent'

@customElement('my-element')
export class MyElement extends LitElement {

 @query('#canvas')
 canvas!: HTMLCanvasElement

 @query('#video')
 video: HTMLVideoElement

 @property()
 photo: boolean = false

 createPhotoEvent: any

connectedCallback() {
  super.connectedCallback();
  this.createPhotoEvent = this._takePhoto.bind(this)
  window.addEventListener('take-photo', this.createPhotoEvent);
}
disconnectedCallback() {
   window.removeEventListener('take-photo', this.createPhotoEvent); 
   super.disconnectedCallback();
}

 render() {
  
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
      this.video.srcObject = stream
      this.video.play()
    })
  }
  return html`
      <video id="video" width="640px" height="480px" autoplay></video>
      <button id="snap" @click=${() => this._takePhoto()}>SNAP</button>
      <button @click=${() => this._clearPhoto()}>CLOSE!</button>
      <canvas id="canvas" width="640px" height="480px"></canvas>
      <button-element></button-element>
    `
   }
   private _takePhoto() {     
    console.log(this);
    const ctx = this.canvas.getContext('2d')
    ctx?.drawImage(this.video, 0, 0, 640, 480)        
   }
   private _clearPhoto() {     
    const ctx = this.canvas.getContext('2d')
    ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
   }
  }