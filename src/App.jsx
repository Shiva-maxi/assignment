import { useState } from 'react'
import './App.css'
import './togg.css'

function App() {
  const [flag,setFlag]=useState(true);

  const toggle=()=>{
    setFlag(!flag);
  }
  return (
    <>

      <div className='togg' style={{backgroundColor:flag?"red":"black"}}  ></div>
    <br/>
      <button style={{backgroundColor:"purple"}} onClick={toggle}>Toggle</button>
      
    </>
  )
}

export default App
