import React, {useState} from 'react';
import './Slider.css'
import BtnSlider from './BtnSlider';


export default function Slider() {
  const [index, setIndex] = useState(0)
  setTimeout(() => {  setIndex(index+1); }, 10000);
  return <div className='container-slider'>
    
        <img src = { `.../img/cake${index+1}.jpg`}/>
        
      </div>
    
  
}



