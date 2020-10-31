import React from 'react';
import ShopNow from '../assets/home.jpg';
import {Link} from 'react-router-dom';

function Directory() {
    return (
        <div className="directory">
           <div className="item" style={{
               backgroundImage: `url(${ShopNow})`
           }}>
              <Link to="/items">
                <span>Shop Now</span> 
              </Link>
            </div> 
        </div>
    );
};

export default Directory;
