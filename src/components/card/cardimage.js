import React from 'react';

export default function Cardimage(props) {
  return (
    <>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
    <div>
        <div style={{marginLeft:'40px',marginTop:'51px',zIndex:'3',position:'absolute',width:props.wtt,height:props.htt,borderStyle:'solid',borderWidth:'1px',borderColor:'#284384'}} className="slice"> </div>
        <img alt='cardimage' style={{marginLeft:'61px',marginTop:'41px',zIndex:'2',width:props.wtt,height:props.htt}} className="slice" src={props.src}/>
      </div>
        <div style={{marginTop:'10%'}}>
    <text className='font-face-gm' style={{fontSize:props.fs,width:'565px',color:props.color,height:'150px'}}>{props.title}
     </text> 
    </div>
    <div>
    <text className='font-face-gm' style={{fontSize:'12px',width:'161px',color:'#121325',height:'63px'}}>{props.desc}
     </text> 
    </div>
    <button style={{width:'237px',height:'50px',marginTop:props.mtb,border:'solid',borderColor:'#284384',color:'#284384',borderWidth:'1px',display:props.display}}><text className='font-face-gm' style={{fontSize:"16px" }}>Visit Page</text></button>

        </div>
    </>
  )
}
