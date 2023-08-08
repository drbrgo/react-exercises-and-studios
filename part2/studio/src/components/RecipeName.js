import recipedata from "./recipe.json";

function RecipeName() {
    const recipeName = recipedata.map((data, recipe) => {
      return(
     <div key={recipe}>
      <h1>{data.name}</h1>
    </div>
    )
  })
  return <div>{recipeName}</div>
}
    



export default RecipeName;

//import return the name of the recipe as a level 1 header