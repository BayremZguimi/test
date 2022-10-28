import React from 'react'
import Contactform from './contactform'

export default function Contactcard() {
  return (
    <div className="contact" style={{backgroundColor:'#DCE9FB',marginTop:'66px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection: 'row'}}>
        <text className='font-face-gm' style={{fontSize:'48px',color:'#121325',marginLeft:'114px'}}>N'hésitez pas à nous contacter
</text>
<Contactform/>
         </div>
  )
}
