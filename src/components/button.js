import React from 'react'

export default function Button(props) {
  return (
    <div><button className='font-face-gm' style={{backgroundColor:'#284384',color:'#FFFFFF',width:props.wt,height:'50px',fontSize:'18px',marginLeft:props.ml,marginTop:props.mt}}>{props.name}</button></div>
  )
}
