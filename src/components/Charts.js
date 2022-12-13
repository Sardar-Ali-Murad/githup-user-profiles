import React from 'react'
import Languages from './Languages'
import Stars from './Stars'
import MostForked from './MostForked'
import MostWatched from './MostWatched'

const Charts = () => {
  return (
    <div className='grid-22 div-center-80 main-div-margins'>
      <Languages/>
      <Stars/>
      <MostForked/>
      <MostWatched/>
    </div>
  )
}

export default Charts
