import "./styling.css";

function ClickedButton() {
  function handleClick2() {
    alert("You have removed this pin!");
  }
  return(
    <button id="clickedButton" onClick={handleClick2}>
      Saved
      </button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
