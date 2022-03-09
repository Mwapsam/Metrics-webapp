import React from 'react'
import { useSelector } from 'react-redux'

const Details = () => {
    const data = useSelector((state) => state.covid.covid);
  return (
    <div>

    </div>
  )
}

export default Details