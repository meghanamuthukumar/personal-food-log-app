import React from 'react'
import AllCameras from '../AllCameras/AllCameras'
import Camera from '../Camera/Camera'

export default function uploadImage() {
  return (
    <div>
      Upload your meal image here - 

      <br/>
      <input type="file" accept="image/x-png,image/jpeg,image/gif"/>

      <br />
      All Cameras - 
      {/* <AllCameras /> */}
      <Camera />
    </div>
  )
}
