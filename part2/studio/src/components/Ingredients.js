import recipedata from "./recipe.json"

function IngredientList() {
  return (
     <div>
        <h3>Ingredients</h3>
        {recipedata.map((data, name) => {
          return (
            <div key={data.name}>
              {data.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>;
              })}
            </div>
            )})}
      </div>
  );     
 }
 
 export default IngredientList;
 
//import json file for the data
// //use a nested map to get inside the inner array
// const recipeName = recipedata.map((data, recipe) => {
//   return(
//  <div key={recipe}>
//   <h1>{data.name}</h1>
// </div>
// )
// })
// return <div>{recipeName}</div>

// const ingredientList = recipedata.map((data, name) => {
//   return data.ingredients;
// })
//   const ingredientslisted = ingredientList.map((ingredient, idx) => {
//     return (
//       <li key={idx}>{ingredient}</li>
//     )
// })
// return (
//   <div>
//      <h3>Ingredients</h3>
//      <ul>{ingredientslisted}</ul>
//   </div>
// );
// }