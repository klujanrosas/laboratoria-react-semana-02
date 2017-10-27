import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

import './styles/base.css'

const App = ({ movie }) => {
  const {
    title,
    rating,
    length,
    genders,
    description,
    actors
  } = movie
  return (
    <div className="title">
      {title} {rating} {genders} {description} {length}
    </div>
  )
}

App.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
    genders: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])),
    description: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      movies: PropTypes.array.isRequired,
      rol: PropTypes.string.isRequired
    }))
  })
}

render(
  <App
    movie={{
      title: 'Thor: Ragnarok',
      rating: 5,
      length: 120,
      genders: [
        'action',
        90,
        'thriller',
        12,
        []
      ],
      description: 'Really good movie!',
      actors: [
        {
          name: 'Speedy Gonzales',
          movies: [
            'a',
            'b'
          ],
          rol: 'x'
        },
        {
          name: 'Chris Pratt',
          movies: [
            'x',
            'y'
          ],
          rol: 'zxc'
        }
      ]
    }}
  />,
  document.getElementById('root')
)
