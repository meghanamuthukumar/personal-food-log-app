import React, {useRef} from 'react'

import Webcam from 'react-webcam'

const AllCameras = () => {

    const [devices, setDevices] = React.useState([])

    const handleDevices = React.useCallback((mediaDevices) => {
        // eslint-disable-next-line no-unused-expressions
        setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
        [setDevices]
    })

    React.useEffect(() => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices)
    }, [handleDevices])

    return(
        <>
            {devices.map((device, key) => (
                <div key = {key}>
                    <Webcam audio={false} videoConstraints={{deviceId:device.deviceId}}></Webcam>

                    {device.label || `Device ${key + 1}`}
                </div>
            ))}
        </>
    )
}

export default AllCameras;