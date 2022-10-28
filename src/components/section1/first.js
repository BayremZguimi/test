import React from 'react'
import Card from '../card/card'
import Description from '../description'

export default function First() {
  return (
    <div style={{display:'flex',justifyItems:'center',alignItems:'center',flexDirection:'row',backgroundColor:'#eaf0fb'}}>
        <Description/>
      <Card/>
      </div>
  )
}
