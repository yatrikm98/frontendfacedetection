import brain from './brain.png'
import './Logo.css'
import Tilt from 'react-parallax-tilt';
const Logo =()=>{
return (
    <div>
    <Tilt className='tilt'>
    <div className='size pa4 shadow-4 grow'>
     <img src={brain} alt='No Pics'/>
    </div>
  </Tilt>
    </div>

)
}

export default Logo