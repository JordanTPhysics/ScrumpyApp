import React from 'react';
import '../App.css';

import Order from './Order';
function Rightbar() {
  return (
    <div className='rightbar'>
        <div>
            <ul>
                <h4>Cake related news</h4>
                <li>
                    29/01/2022 A man from Bodmin is in hospital after a caking accident involving a whisk, 3g of flour and a single bad egg.
                </li>
                <li>
                    
                </li>
            </ul>
            <Order/>
        </div>
        
        </div>
  )
}

export default Rightbar;