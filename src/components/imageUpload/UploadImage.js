import React from 'react'
import UploadImageToS3WithReactS3 from '../UploadImageS3/UploadImageToS3WithReactS3'
import Camera from '../Camera/Camera'

export default function uploadImage() {
  return (
    <div>
      Upload your meal image here - 

      <br />
      {/* <AllCameras /> */}
      {/*<Camera />*/}
      <UploadImageToS3WithReactS3 />
    </div>
  )
}
