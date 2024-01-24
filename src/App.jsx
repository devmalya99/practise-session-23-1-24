import React from "react";
import { useState } from "react";
import "./App.css";
function App() {

  const [fullName,setFullName] =useState({
    fName:"",
    lName:"",
  })

  const handleChange = (e) => {
    e.preventDefault();
    const {name,value}=e.target
    
    setFullName((prev)=>
    {
      return {...prev,[name]:value}
    })
    // In your function handleChange, name is a variable that can either be 'fName' or 'lName' (based on the name property of the field that triggered the change).
    //  So, you want to use it as a variable key, not a literal string key, hence you wrap it in square brackets: { [name]: value }.
    //   This will correctly create { fName: "John" } or { lName: "Doe" } based on the input field.
  }

  const handleSubmit =(e)=>
  {
    e.preventDefault();
    console.log(fullName);
    
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form onSubmit={handleSubmit}>
        <input 
        onChange={handleChange }
        name="fName" 
        placeholder="First Name" 
        value={fullName.fName}
        />
      

        <input
        onChange={handleChange } 
        name="lName" 
        placeholder="Last Name" 
        value={fullName.lName}
        />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
