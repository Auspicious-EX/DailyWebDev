import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/026/151/988/small/futuristic-super-sports-car-speed-ai-generated-photo.jpeg" alt="" style={{borderRadius: 23, marginLeft:24 }} />
        <h1>{props.title}</h1>
        <p>{props.discription}</p>
    </div>
  )
}

export default Card