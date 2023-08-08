let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating() {
    return (props.rating > 0 && props.rating < 6) ? <h3>{stars[props.rating - 1]}</h3> : null;
 }
  return GiveRating();
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
