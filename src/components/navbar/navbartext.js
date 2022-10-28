import React from 'react'

export default function Navbartext(props) {
  return (
    <div className='font-face-gm' style={{color:'#121325',fontSize:'18px',marginLeft:props.ml,marginTop:"20px"}}><a href='#'>{props.name}</a></div>
  )
}
