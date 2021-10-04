import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <h2>This is our Gallery</h2>
           <div className="gallery">
           <div>
                <img src="https://t3.ftcdn.net/jpg/04/59/26/08/240_F_459260836_R8RI9gHl1YJXfC6L0r0HVo6w6kXCpr7h.jpg" alt="" />
            </div>
            <div>
                <img src="https://t4.ftcdn.net/jpg/04/57/82/81/240_F_457828176_da6EdaaefOxH0xfUD4QfR7OblWy75HMH.jpg" alt="" />
                </div>
            <div>
            <img src="https://t3.ftcdn.net/jpg/04/56/28/60/240_F_456286086_nJJSNLoPXyYqXg7TiJhSqHS1eo2FgO16.jpg" alt="" />
            </div>
            <div>
            <img src="https://t3.ftcdn.net/jpg/04/49/75/46/240_F_449754635_8YG5DVxXshAQ8n94MDoGamPVRbY6Nqzp.jpg" alt="" />
            </div>
            
           </div>
        </div>
    );
};

export default Gallery;