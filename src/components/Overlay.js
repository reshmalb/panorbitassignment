import React from 'react'
import './Overlay.css'

const Overlay = ({isOpen,onClose,children}) => {
    console.log("overlay clicked")
  return (
   <>
   {isOpen ?(
   <div className='overlay'>
     <div className='overlay-background'/>
     <div className='overlay-container'>
        <div className='overlay-controls'>
            <button className='overlay-close'
            type='button'
            onClick={onClose}/>

            

        </div>
        {children}

     </div>


   </div>
   ):null}
   </>
  )
}

export default Overlay