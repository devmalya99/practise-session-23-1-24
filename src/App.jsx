import { useState } from 'react'

import './App.css'

function App() {
  const [style, setStyle] = useState({backgroundColor: 'white'})
  const [mouseLeave,setMouseLeave]=useState(false)
  function handleButtonHoover()
  {
    setStyle({backgroundColor: 'black'})
  }

  function handleMouseLeave()
  {
    setStyle({backgroundColor:'white'})
  }
    
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={style}
      onMouseOver={handleButtonHoover}
      onMouseLeave={handleMouseLeave}
      >Submit</button>
    </div>
  )
}

export default App
