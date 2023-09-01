import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file)
  console.log(progress, url);
  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url])
  return (
    <div style={{ width: progress + '%' }} className="h-1 bg-lime-500 rounded-lg">{progress}% </div>
  )
}

export default ProgressBar