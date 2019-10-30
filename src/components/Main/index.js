import React, {useState} from 'react';

function Main(){
    // const initialCount = 0;
    const person = {
        name: 'deep',
        age: 22
    }
    // const [count, setCount] =  useState(initialCount);
    const [deepanjan , setDeepanjan] = useState(person);
    const changeName = () => {
        const newDeep = {...deepanjan};
        deepanjan.name ="leena"
        setDeepanjan(newDeep);
    }

    return (
    <div>

        <h1>{deepanjan.name}</h1>
        <h2>{ deepanjan.age}</h2>
        <h1>ggvhbknl</h1>
        <button onClick = {changeName}/>

    </div>

   );
}

export default Main;
