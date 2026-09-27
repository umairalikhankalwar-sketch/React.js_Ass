import { useState } from "react"


function Ass() {


const [count, setCount] = useState(0);


if (count <= -1) {

setCount(0);

};





 return (

    <>

    <h1>Counting</h1>
    <h2>{count}</h2>

   
      <button onClick={ () => setCount(count + 1  )} id="m">
        Increase
    </button>

    <button onClick={ () => setCount(count - 1  )} id="m">
        Decrease
    </button>
    
     <button onClick={ () => setCount(count - count )} id="m">
        Reset
    </button>
    
    <button onClick={ () => setCount(count - 10 )} id="m">
        -10
    </button>
    

     <button onClick={ () => setCount(count + 10 )} id="m">
        +10
    </button>
    
    </>
    
    
    
)




};

export default Ass;