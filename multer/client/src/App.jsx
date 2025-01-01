import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [file, setfile] = useState(null)
  const onchange = () => {
    axios.post("http://localhost:8080/upload", { file }, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(data => {
      console.log(data)
      alert("image upload succesfully")
    })
      .catch(err => console.log(err))
  }
  return (
    <>
      <input type="file" onChange={(e) => setfile(e.target.files[0])} />
      <button onClick={onchange}>Upload</button>
    </>
  )
}

export default App
