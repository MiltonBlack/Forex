import { Button } from '@mui/material';
import React, { createRef, useState } from 'react'
import { MdDelete, MdUpload } from 'react-icons/md'

const ImageUpload = (props) => {
    const [image, _setImage] = useState();
    const inputFileRef = createRef();
    const cleanup = () => {
        URL.revokeObjectURL(image && props.image);
        inputFileRef.current.value = null;
    };
    const setImage = (newImage) => {
        if (image) {
            cleanup();
        };
        _setImage(newImage);
    };
    const handleOnChange = (event) => {
        const newImage = event.target.files[0];
        if (newImage) {
            setImage(URL.createObjectURL(newImage));
        }
        props.imageUpload(event);
    };
    return (
        <div>
            <input type="file" id="proof" hidden accept='image/*' ref={inputFileRef} onChange={handleOnChange} />
            <label htmlFor="proof">
                <Button color='primary'>
                    {image ? <MdDelete className='mr-2'/> : <MdUpload className='mr-2' />}
                </Button>
            </label>
        </div>
    )
}

export default ImageUpload