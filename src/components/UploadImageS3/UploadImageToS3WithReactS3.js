import React , {useState} from 'react';
import { uploadFile } from 'react-s3';
import {Camera} from '../Camera/Camera'
window.Buffer = window.Buffer || require("buffer").Buffer;


const S3_BUCKET ='sepmstorage';
const REGION ='ca-central-1';
const ACCESS_KEY ='AKIAYCIYQ2JZHGDKEPP3';
const SECRET_ACCESS_KEY ='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';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const UploadImageToS3WithReactS3 = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const handleUpload = async (file) => {
        uploadFile(file, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    return <div>
        <p>Capture an image</p>
        {/* <Camera /> */}
        <p>or</p>
        <div>Choose file</div>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
        <br />
    </div>
}

export default UploadImageToS3WithReactS3;
