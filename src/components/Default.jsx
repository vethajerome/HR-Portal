import React from 'react'
import Photo from './Photo'
import DrawerAppBar from './HomePage'
import LoginButton from './LoginButton'

const Default = () => {
  return (
    <div className="body">
    <DrawerAppBar></DrawerAppBar>
    <div style={{ textAlign: "center" }}>
      <Photo className="photo" />
    </div>
    <div style={{ textAlign: "center" }}>
      <LoginButton />
    </div>
  </div>
  )
}

export default Default