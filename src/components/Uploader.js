import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const Uploader = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const imgTypes = ['image/png', 'image/jpg', 'image/gif', 'image/jpeg']
    const changeHandler = (e) => {
        const chooseFile = e.target.files[0]

        { chooseFile && imgTypes.includes(chooseFile.type) ? setFile(chooseFile) && setError('') : setFile(null) && setError('please select the correct file type for upload'); }
        console.log(chooseFile);
    }
    return (
        <div>
            <input type='file' onChange={changeHandler} />
            <span>+</span>
            <div className='output'>
                {error && <div>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </div>
    )
}

export default Uploader