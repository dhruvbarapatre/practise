import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [file, setfile] = useState([])
  const onchange=()=>{
    console.log(file)
  }
  return (
    <>
      <input type="file" onChange={(e)=>setfile(e.target.files)}/>
      <button onClick={onchange}>Upload</button>
    </>
  )
}

export default App
