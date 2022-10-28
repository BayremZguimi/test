import React from 'react';
import Cardimage from './cardimage';

export default function Smallcard(props) {
  return (
    <div style={{marginLeft:props.ml,marginTop:props.mt,zIndex:props.zindex,position:props.position,backgroundColor:'#F7FAFF',width:props.wt,height:props.ht}} className="slice">
      <Cardimage mtb={props.mtb} display={props.display} src={props.src} fs={props.fs} title={props.title} color={props.color} desc={props.desc} wtt={props.wtt} htt={props.htt} />
      </div>
  )
}