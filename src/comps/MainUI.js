import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../App.css'
import images from './images';



function MainUI() {

  const [width, setWidth] = useState(0);
  const carousel =  useRef();
  // replace these with numbers corresponding to the total width of all images in carousel
  // useEffect(() => {setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);},[]);
  //   console.log(images)
  //   console.log(width)

  return( <div>
      
      <div className='Slideshow' >
      <motion.div ref={carousel} className='Carousel'>
        <motion.div drag="x" dragConstraints={{right: 0, left:-400*(images.length-1)}} className='inner-carousel'>
        {images.map(image => {
          return(
            <motion.div className='item'>
              <img src={image} alt="Maybe if you wish REALLY hard... or hit ctrl+r, a cake will appear here"/>
            </motion.div>
          );
        }) }


        </motion.div>
      </motion.div>
      </div>
  
  </div>
  )
}
export default MainUI;

