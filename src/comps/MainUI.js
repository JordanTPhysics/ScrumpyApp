import React from 'react';
import { useState } from 'react';

import cake1 from '../img/cake1.jpg';
import cake2 from '../img/cake2.jpg';
import cake3 from '../img/cake3.jpg';
import cake4 from '../img/cake4.jpg';
import cake5 from '../img/cake5.jpg';
import cake6 from '../img/cake6.jpg';



 const cakes = [cake1,cake2,cake3,cake4,cake5,cake6];


 

 

function MainUI() {

    const [image, setImage] = useState(0)
  return( <div>
      This will be the center ui, showing images of cakes
      {/* <button onClick={setImage(image+1)}>cakes</button> */}
      <img src={cakes[2]} />
  </div>

  )
}
export default MainUI;

