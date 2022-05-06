import { css } from 'lit';

export const buttonStyles = css`
  .blue-button {
    width: 50%;
    height: 10%;
    border-radius: 20px;
    color: white;
    background-color: hsl(240, 100%, 50%);
    cursor: pointer;
    font-size: 2rem;
  }
  .blue-button:hover {
    background-color: hsl(240, 50%, 50%);;
  }
  .green-button{
    background-color: hsl(100, 100%, 50%);
    width: 50%;
    height: 10%;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-size: 2rem;
  }
  .green-button:hover {
   background-color: hsl(120, 50%, 50%)  
  }
  `;
