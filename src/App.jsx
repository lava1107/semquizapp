import {useState} from "react";

function App()
{
  const[score,setScore]=useState(0);


  return(
    <div>
      <h2>QUIZ APP</h2>
      <h4>Find Prime number ?</h4>
      <button onClick={()=>setScore(score+1)}>2</button>
      <button onClick={()=>setScore(score)}>4</button>
      <button onClick={()=>setScore(score)}>6</button>
      <button onClick={()=>setScore(score)}>8</button>

      <br></br>

      <h4>Find Odd number ?</h4>
      <button onClick={()=>setScore(score)}>2</button>
      <button onClick={()=>setScore(score+1)}>3</button>
      <button onClick={()=>setScore(score)}>4</button>
      <button onClick={()=>setScore(score)}>6</button>

      <h3>Score : {score}/2</h3>
    </div>
  )
}

export default App;