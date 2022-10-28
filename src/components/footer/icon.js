import React from 'react'

export default function Icon(props) {
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
    <img src={props.src} style={{width:props.wt,height:props.ht}}/>
    <div style={{display:'flex',flexDirection:'column',marginLeft:'20px',marginTop:'-5px'}}>
    <text className='font-face-gm' style={{color:'#121325',fontSize:'13px'}}>{props.title}</text>
    <text className='font-face-gm' style={{color:'#121325',fontSize:'13px'}}>{props.desc}</text>

    </div>
    
    </div>
  )
}
