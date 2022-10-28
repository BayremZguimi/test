import React from 'react'
import Contactcard from './contactcard'

export default function Contact() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'#eaf0fb'}}>
        <text className='font-face-gm' style={{fontSize:'36px',color:'#284384',marginTop:'48px'}}>Nous contacter</text>
        <Contactcard/>

    </div>
  )
}
