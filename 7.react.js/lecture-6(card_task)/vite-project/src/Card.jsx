import React from 'react'
// import CardImg from './assets/pexels.jpg'

const Card = (props) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='max-w-[350px] shadow-xl shadow-gray-600 mx-4 h-fit-content'>
        <div>
          <img  className='w-[350px] h-[250px] object-cover'src={props.Img} alt="" />
        </div>
        <div className='p-4'>
          <h1 className='text-2xl font-bold mb-2'>
          {props.title}
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero odit repellendus doloribus in ad! Quae, excepturi porro. Quis et cupiditate quos aperiam, iste praesentium voluptatum labore enim consequuntur officia?</p>
          <a  className='btn inline-block mt-4' href=''>
            {props.name}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
