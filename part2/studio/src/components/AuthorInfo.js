import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  const recipeAuthor = recipedata.map((data) => {
    return <div key={data.name}>{data.author}</div>
  });
  const recipeAuthorImage = recipedata.map((data) => {
    return(
      <div key={data.name}>
       <img src={data.authorImage} alt={data.author} className="authorImage" />
     </div>
    )
  });
  const recipeURL = recipedata.map((data) => {
    return <a href={data.website}>https://thewoksoflife.com/stir-fried-tomato-and-egg/</a>
    });
return (
  <div>
    <br></br>
   {recipeAuthorImage}
   <br></br>
   {recipeAuthor}
   {recipeURL}
  </div>
);
};
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 