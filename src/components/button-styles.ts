import { css } from 'lit';

export const buttonStyles = css`
  .blue-button {
    color: white;
    background-color: blue;
    cursor: pointer;
  }
  .blue-button:disabled {
    background-color: grey;
  }
  .blue-button-pressed {
    background-color: green;
  }
  `;
