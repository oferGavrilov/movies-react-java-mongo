import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function MovieDetails() {
      const { id } = useParams<{ id: string }>()

      useEffect(() => {
            console.log('MovieDetails', id)
      }, [])

      return (
            <div>MovieDetails</div>
      )
}

export default MovieDetails