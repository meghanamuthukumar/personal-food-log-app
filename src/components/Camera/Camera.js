import React, {useEffect, useRef, useState} from 'react'
import Webcam from 'react-webcam';

const videoConstraints = {
    width: 540,
    facingMode: 'environment'
}

const Camera = () => {

    const webcamRef = useRef(null)

    const [url, setUrl] = useState(null)

    const capturePhoto = React.useCallback(async() => {
        const imageSrc = webcamRef.current.getScreenshot()

        setUrl(imageSrc)
    },[webcamRef])

    const onUserMedia = (e) => {
        console.log(e)
    }

    return (
        
        <>
            <Webcam 
                ref = {webcamRef}
                audio = {true}
                screenshotFormat = "image/png"
                videoConstraints = {videoConstraints}
                onUserMedia = {onUserMedia}
                mirrored = {true}
            />
            <br />
            <button onClick={capturePhoto}>Capture</button>
            <br />
            <button onClick = { () => setUrl(null)}>Refresh</button>

            {
                url && (
                    <div>
                        <img src={url} alt = "Screenshot" />
                    </div> 
                )
            }
        </>
    )



}

export default Camera;