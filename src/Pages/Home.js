import React from 'react'

const Home = ({pokemon: results}) => {
  return (
    <div>
      {
        results &&
        results.map((value, index) => (
          <p key={index}>
            {value.name}
          </p>
        ))
      }
    </div>
  )
}

export default Home
