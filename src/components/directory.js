import React from 'react';
import ShopNow from '../assets/home.jpg';

function Directory() {
    return (
        <div className="directory">
           <div className="item" style={{
               backgroundImage: `url(${ShopNow})`
           }}>
              <a>Shop Now</a> 
            </div> 
        </div>
    );
};

export default Directory
