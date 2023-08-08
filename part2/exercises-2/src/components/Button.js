import './styles.css';

const OnLearnMore = () => {
   alert("Splish Splish");
};

function Button() {

   return ( 
         <button onClick={OnLearnMore}>
            Learn More
         </button>
   );
}

export default Button;
