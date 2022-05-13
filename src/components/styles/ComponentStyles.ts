import { css } from 'lit'

export const ComponentStyles = css`

.container{
    display: flex;
    list-style: none;
    width: 50%;
    /* border: 2px solid red; */
    flex-direction: column;
    padding: 0;
    margin-bottom: 1rem;
 }
 .completedTask {
   text-decoration: line-through;
   color: green;
 }
 .delete-btn {
    background-color: #c34e4e;
    color: white;
    border: none;
    padding: 1rem 0.5rem;
    border-radius: 0.2rem;
 }
 .delete-btn:hover {
     cursor: pointer;
     background-color: #d62828;
 }

`