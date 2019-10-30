import React, { useState } from 'react';

function Banner (){
    const color = ['red', 'yellow', 'green', 'blue'];
    const [banner,setColor] = useState(color[0]);
    const changeColor = () => {
        const index = Math.floor(Math.random() * Math.floor(color.length))
        setColor(color[index]);
    };
        return (
            <div className="banner" style={{backgroundColor: banner}}>
               <button onClick={changeColor}>CHANGE COLOR</button>
            </div>
        );
}


export default Banner;
