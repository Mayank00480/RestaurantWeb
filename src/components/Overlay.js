import React from 'react'
import  ReactDOM  from 'react-dom'
import './Overlay.css'
import { PopUp } from './PopUp'
const Overlay = (props) => {
  const closeHandler = () =>{
    props.closeHandler();
  }
  return (
  <>
      {ReactDOM.createPortal(<PopUp closeHandler = {closeHandler}/> ,document.getElementById('backdrop'))}
 </>
  )
}

export default Overlay
