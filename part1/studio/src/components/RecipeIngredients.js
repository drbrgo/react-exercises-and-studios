import styles from './Ingredients.module.css';

const RecipeIngredients = () => {
    let ingredients = ["4 small to medium tomatoes", "1 scallion", "4 eggs", "3/4 tsp salt", "1/4 tsp white pepper", "1/2 tsp sesame oil", "1 tsp shaoxing wine", "3 tbsp cooking oil (divided)", "2 tsp sugar", "1/4-1/2 cup water"];
    return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className = {styles.ingredientList}>
         <li>{ingredients[0]}</li>
         <li>{ingredients[1]}</li>
         <li>{ingredients[2]}</li>
         <li>{ingredients[3]}</li>
         <li>{ingredients[4]}</li>
      </ul>
   </div>
    );
};

export default RecipeIngredients;
