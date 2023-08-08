import { useState, useEffect } from "react";
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import { projectStorage } from '../firebase/config'

function useStorage(file) {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)
    useEffect(() => {
        //reference to a file in a firebase storage
        const storageRef = ref(projectStorage, `/files/${file.name}`)
        const uploadImg = uploadBytesResumable(storageRef, file)

        uploadImg.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const urlLink = getDownloadURL(uploadImg.snapshot.ref).then((url) => console.log(url));
            setUrl(urlLink);
        })
    }, [file]);
    return { progress, url, error }
}

export default useStorage;