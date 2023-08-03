import styles from './ChoresList.module.css'

export default function ChoresList () {
   return (
      <div>
         <h3 className= {styles.choresHeading}>CHORES!</h3>
         <ul className={styles.choresText}><li>Clean</li>
         <li>Pack</li>
         <li>Homework</li></ul>
      </div>
   );
}