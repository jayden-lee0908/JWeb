import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout the past projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/facial-image.jpg"
              text="Utilize face recognition to auto playout songs matching the mood"
              label='Projects'
              path='/projects'
            />
            <CardItem
              src="images/datamatch.png"
              text="Build a survey-based matchmaking service platform for students at 50+ Colleges. Generated 30k matches in 2023."
              label='Projects'
              path='/projects'
            />
            <CardItem
              src='images/finance.jpeg'
              text='Stock Market Analysis'
              label='Projects'
              path='/projects'
            />
          </ul>
          <ul className='cards__items'>
            {/* <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/projects'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/projects'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
