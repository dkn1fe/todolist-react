import { useState } from 'react'
import nightImg from '../../img/night.svg'
import sunImg from '../../img/sun.png'
import './NightMode.scss'

const NightMode = (props) => {
    const [night,setNight] = useState(false)
    function onSetNight() {
        setNight(prevNight => {
            const newNight = !prevNight;
            document.body.classList.toggle('night',newNight);
            props.updateIsNight(newNight);
            return newNight;
        });
    }
  
    return (
         <>
         <button onClick={onSetNight} className="night-button">
            <img className='night-img' src = {night ? sunImg : nightImg}></img>
         </button>
         </>
    )
}

export default NightMode;