import React from 'react'
import '../styles/ErrorHandler.css'

const ErrorHandler = ({ error }) => {
    return (
        <div className='error_handler-container'>
            <p>{error}</p>
        </div>
    )
}

export default ErrorHandler