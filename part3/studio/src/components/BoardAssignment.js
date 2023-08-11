import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label: "Dessert",
       value: "Cake"},
      {label: "Fruit Recipes",
       value: "Baked Goods"},
      {label: "Summer Recipes",
       value: "Drupes"}
   ];

<option value={appropriate value}>{appropriate label}</option>

   const handleChange = (event) => {
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}