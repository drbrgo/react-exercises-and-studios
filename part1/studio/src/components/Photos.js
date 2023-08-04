import styles from './Description.module.css';

const RecipePhoto = () => {
    let photo = "https://thewoksoflife.com/wp-content/uploads/2019/05/tomato-egg-8.jpg";
    return (
        <img src={photo} alt="recipe photo" className = {styles.imageUpdates}/>
    )
};
export default RecipePhoto;