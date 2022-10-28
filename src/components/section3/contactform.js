import React from 'react'
import Button from '../button'

export default function Contactform() {
  return (
    <form> 
        <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',flexDirection:'row'}}>
        <input className='font-face-gm' type="text" name="nom" placeholder='Nom' style={{width:'233px',height:'53px',marginRight:'12px',fontSize:'14px'}} />
        <input className='font-face-gm' type="text" name="prenom" placeholder='Prénom' style={{width:'233px',height:'53px',marginRight:'99px',fontSize:'14px'}} />

        </div>
        <input className='font-face-gm' type="text" name="tel" placeholder='Téléphone' style={{width:'478px',height:'53px',fontSize:'14px',marginTop:'30px'}} />
        <input className='font-face-gm' type="text" name="email" placeholder='Email' style={{width:'478px',height:'53px',fontSize:'14px',marginTop:'30px'}} />
        <textarea className='font-face-gm' placeholder='Message' style={{width:'478px',height:'158px',fontSize:'14px',marginTop:'30px'}}></textarea>
        
        <Button wt="237px" mt='14px' ml='241px' name="Envoyer"/>
        </div>
  </form>
  )
}
