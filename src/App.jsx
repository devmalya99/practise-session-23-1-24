import { useState } from 'react'

import './App.css'


function App() {

 const[name,setName] =useState("")

 const [heading,setHeading]=useState("")
function changeInput(e)
{
   setName(e.target.value)
}

 function changeHeading()
 {
   setHeading(name);
   setName("");
 }

  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <input 
      onChange={changeInput}
      type="text" 
      placeholder="What's your name?" 
      value={name}
      />
      <button onClick={changeHeading}>Submit</button>
    </div>
  )
}

export default App
