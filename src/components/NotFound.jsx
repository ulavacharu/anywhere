import React from 'react'
import image from '../assets/lost-404.png'
function NotFound() {
  return (
    <div>
        <img src={image} alt="Not Found"/>
        <h2>Error</h2>
        <h3>Page Not Found</h3>
    </div>
  )
}

export default NotFound