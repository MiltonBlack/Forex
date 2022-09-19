import React, { useState } from 'react'

const Uploader = () => {
    const [file, setFile] = useState(null)
    const changeHandler = (e) => {
        const chooseFile = e.target.files[0]
        console.log(chooseFile);
    }
  return (
    <div>
        <input type='file' onChange={changeHandler}/>
    </div>
  )
}

export default Uploader