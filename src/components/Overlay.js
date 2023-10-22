import React from 'react'
import  ReactDOM  from 'react-dom'
import './Overlay.css'
import { PopUp } from './PopUp'
const Overlay = () => {
  return (
  <>
      {ReactDOM.createPortal(<PopUp /> ,document.getElementById('backdrop'))}
 </>
  )
}

export default Overlay
