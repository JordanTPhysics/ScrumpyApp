import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import images from './images';



function MainUI() {
    console.log(images)
  return( <div>
  
      This will be the center ui, showing images of cakes
      <div className='Slideshow' >
      <motion.div className='Carousel'>
        <motion.div className='inner-carousel'>
        {images.map(image => {
          return(
            <motion.div>
              <img src={image} alt=""/>
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

