import style from './HobbyLinks.module.css'

export default function HobbyLinks() {
let hobbyLinks = ["https://en.wikipedia.org/wiki/Herping", "https://en.wikipedia.org/wiki/Gongoozler"];
return (
    <div className = {style.hobbyList}>
        <h3>Hobbies</h3>
    <a href = {hobbyLinks[0]} target = "_blank">Herping</a><br></br>
    <a href = {hobbyLinks[1]} target = "_blank">Gongoozling</a>
    </div>
    );
}
