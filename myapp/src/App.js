import {useState} from 'react'
import './App.css';

function App() {
  const [count , setcount] = useState(0);
  const [count1 , setcount1] = useState(0);
  let c = 0;
  return (
    <div className="App">
      <h1>Hii there</h1>
      <button onClick={()=>{
        setcount(count + 1)
      }}>
        Count is {count}
      </button>

      <button onClick={()=>{
        setcount1(count1 + 1)
      }}>
        Count is {count1}
      </button>
    </div>
  );
  
}

export default App;
