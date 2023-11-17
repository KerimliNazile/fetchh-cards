import React from 'react'
import './index.css'
const Card = ({id,title,age}) => {
    return (
        <div>
            <div className='container'>
                <div className='image1'>
                    <img src="https://i.pinimg.com/1200x/5c/45/0a/5c450ae64993802e5d6cd83c34064b82.jpg" alt="" />
                    <p>{title}</p>
                </div>
                <div className='image2'>
                    <img src="https://i.pinimg.com/736x/46/a6/57/46a657c8ccf170a172961f00335df75e.jpg" alt="" />
                    <p>{id}</p>
                </div>
                <div className='image3'>
                    <img src="https://i.pinimg.com/736x/24/c2/8d/24c28daa9bd1c13049a17c954c066200.jpg" alt="" />
                    <p>{age}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
