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
   const accessBoards = boards.map(aBoard => {
   return (
   <option value={aBoard.value}>{aBoard.label}</option>
   );
   });


   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   const [boardName, setBoardName] = useState("no boards yet!");

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {accessBoards}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}