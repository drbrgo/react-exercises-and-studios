import styles from './Description.module.css';
import React from 'react';

const RecipeAuthor = () => {
    let authorLink = "https://thewoksoflife.com/" ;
    let authorPhoto = "https://thewoksoflife.com/wp-content/uploads/2020/10/TWOL-Headshots-Sarah2-edited-1.jpg";
    let authorName = "Sarah, elder daughter of the Woks of Life family";
    return (
            <div className = {styles.recipeAuthorBlock}>
               <img src={authorPhoto} alt = "Sarah holding knife" className={styles.imageUpdates} width = "200" />
               <div>
                  <h3>{authorName}</h3>
                  <a href={authorLink}>The Woks of Life</a> 
               </div>
            </div>
    );
};

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
            <div>
               <h1>Chinese Tomato Egg Stir-Fry</h1>
               <p>The tangy tomatoes, mixed with rich scrambled eggs, a hint of sugar, and flavorful sesame oil and Shaoxing wine all come together to create a very satisfying (and vegetarian!) dish that tastes lovely on a bed of rice.</p>
            </div>
            <RecipeAuthor />
         </div>
        )

    }
}

//export default RecipeAuthor;
export default RecipeDescription;