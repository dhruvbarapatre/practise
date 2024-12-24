import { useState } from 'react'

import './App.css'

function App() {
  const [file, setfile] = useState(null)
  const onchange=()=>{
    console.log(file)
    axios.post("",{file},{
      headers:{
        "Content-Type":"multipart/from-data"
      }
    })
  }
  return (
    <>
      <input type="file" onChange={(e)=>setfile(e.target.files[0])}/>
      <button onClick={onchange}>Upload</button>
    </>
  )
}

export default App
