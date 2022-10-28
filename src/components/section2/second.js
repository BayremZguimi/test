import React from 'react'
import Smallcard from '../card/smallcard';
import bg1 from './bg1.png';
import bg2 from './bg2.png';
import bg3 from './bg3.png';


export default function Second() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'#eaf0fb'}}>
        <text className='font-face-gm' style={{fontSize:'36px',color:'#284384',marginTop:'141px'}}>Pourquoi nous rejoindre?</text>
        <div style={{display:'flex',flexDirection:'row',marginTop:'90px'}}>
              <Smallcard mtb='100px' display='true' fs='18px' wtt='134.64px' htt='142.65px'  wt='343px' ht='600px'  src={bg1} color='#121325' title='1- Nunc sit amet commodo diam.' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit tincidunt lacus, quis efficitur est mollis et. Aliquam erat volutpat. Morbi vel augue imperdiet, porta turpis ut, molestie nunc. Nunc non faucibus leo. Cras ornare at augue vitae pretium. Duis vulputate dolor vitae ex porttitor, sit amet molestie mauris volutpat. Donec tincidunt eget mi quis hendrerit.
'/>
              <Smallcard mtb='125px' display='true' fs='18px' wtt='134.64px' htt='142.65px' ml='90px' wt='343px' ht='600px' src={bg2} color='#121325' title='2-  Ut eu arcu nulla. Etiam in nulla' desc='Phasellus nec quam ut lorem rutrum hendrerit non non purus. Mauris lorem quam, consequat sit amet accumsan at, malesuada vel magna. Phasellus nec quam ut lorem rutrum hendrerit non non purus. Mauris lorem quam, consequat sit amet accumsan at, malesuada vel magna.
'/>
              <Smallcard mtb='100px' display='true' fs='18px' wtt='134.64px' htt='142.65px' ml='90px' wt='343px' ht='600px' src={bg3} color='#121325' title='3-  Nam tempor mauris non risus sollicitudin,' desc='Maecenas suscipit purus ac mattis tempor. Mauris cursus pellentesque justo at tempor. Cras elit est, blandit eget placerat consectetur, pulvinar lobortis lorem. Vestibulum convallis ullamcorper nunc. Maecenas aliquam gravida imperdiet. In hac habitasse platea dictumst.
'/>

              </div>

    </div>
  )
}
