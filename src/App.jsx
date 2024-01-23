import { useState } from 'react'
import cars from './Cars'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [honda,tesla]=cars

  const {teslaModel,coloursByPopularity:[teslaTopColour],speedStats:{topSpeed:teslaTopSpeed}}=tesla
  const {hondaModel,coloursByPopularity:[hondaTopColour],speedStats:{topSpeed:hondaTopSpeed}}=honda

    
  return (
    <>
      <h1 className="text-3xl text-center font-bold underline">Vite + React</h1> 
         <div>
         <table>
     <tr>
       <th>Brand</th>
       <th>Top Speed</th>
     </tr>
    <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
     </tr>
     <tr>
       <td>{honda.model}</td>
       <td>{hondaTopSpeed}</td>
       <td>{hondaTopColour}</td>
     </tr>
   </table>
    </div>
    
    </>
  )
}

export default App
