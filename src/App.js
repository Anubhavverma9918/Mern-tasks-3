import './App.css';
import {useState} from "react";

function App() {
  const[val, setVal] = useState('')
  const[word, setWord] = useState(0)

  const handleChange = (e)=>{
    const data = e.target.value.split(' ')
    console.log(data)
    setVal(e.target.value)
    setWord(data.length)
  }
  return (
    <div>
      <h1>Responsive Paragraph Word Counter</h1>      
      <textarea rows="13" cols="65" value={val} onChange={(e)=>handleChange(e)}/>
      <h3>Word count: {word}</h3>
    </div>
  );
}

export default App;
