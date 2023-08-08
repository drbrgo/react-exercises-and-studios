  import recipedata from "./recipe.json";
  
  function RecipeImage() {
    const recipeImage = recipedata.map((data, recipe) => {
       return (
       <div key={recipe}>
       <img src={data.recipeImage} alt={data.name} className="recipeImage" />
       </div>
      )
    })
  return <div>{recipeImage}</div>;
 };
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 
//  const recipeName = recipedata.map((data, recipe) => {
//   return(
//  <div key={recipe}>
//   <h1>{data.name}</h1>
// </div>
// )
// })
// return <div>{recipeName}</div>