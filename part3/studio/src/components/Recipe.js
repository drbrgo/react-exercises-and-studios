const RecipeAuthor = () => {
   let authorLink = "https://therecipecritic.com/food-blogger/";
   let authorPhoto = "https://therecipecritic.com/wp-content/uploads/2019/01/The-Recipe-Critic-edits-0004-2.jpg";
   let authorName = "Alyssa Rivers";

   return (
      <div>
         <img src={authorPhoto} alt = "Alyssa in kitchen" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["3 large peaches just barely ripe", "1 Tablespoon lemon juice", "1/2 cup brown sugar packed", "1/4 cup salted butter melted", "2 cups all-purpose flour", "1-1/5 teaspoon baking powder", "3/4 teaspoon salt", "6 Tablespoons unsalted butter softened", "3/4 cup granulated sugar", "6 Tablespoons brown sugar packed", "2 large eggs", "6 Tablespoons sour cream", "3/4 cup milk"
      ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
            <li>{ingredients[7]}</li>
            <li>{ingredients[8]}</li>
            <li>{ingredients[9]}</li>
            <li>{ingredients[10]}</li>
            <li>{ingredients[11]}</li>
            <li>{ingredients[12]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Peach Upside-Down Cake</h1>
            <p>Let's bake an upside-down cake!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://therecipecritic.com/wp-content/uploads/2022/07/peachupsidedowncake-2-750x1000.jpg" alt="slice of cake on utensil" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}