import projects from './../data.json';
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    let them = projects.map((value, key)=>
    [value.name, value['years-active'], value.imgurl, value.alttext]
    )
    let displayed = them[index]
    const handleClick = () => {
        (index<them.length-1)? setIndex(index+1) : setIndex(0)
    }


    // let them = projects.map((value, key)=>
    // <div>
    //     <div>{value.name}</div>
    //     <div>{value['years-active']}</div>
    //     <img src={value.imgurl} alt={value.alttext} width="300px"/>
    // </div>
    
    return (
    <div>
        <div>
        <h3>Herping their way to stardom:</h3>
        <p>{displayed[0]}</p>
        <p>{displayed[1]}</p>
        <img src={displayed[2]} alt={displayed[3]} width="300px" />
        </div>
        <button onClick={handleClick}>Next</button>    
    </div>
    )
}