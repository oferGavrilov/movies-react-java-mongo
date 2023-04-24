import Layout from 'components/Layout'
import MovieList from 'components/MovieList'

import { useEffect, useState } from "react"
import { Movie } from "src/models/movie.model"
import { movieService } from "../services/movieService"

function Home() {
      const [movies, setMovies] = useState<Movie[]>([])

      useEffect(() => {
            loadMovies()
      }, [])

      async function loadMovies() {
            const data = await movieService.getMovies()
            setMovies(data)
      }

      return (
            <>
                  <Layout>
                        <MovieList />
                  </Layout>
            </>
      )
}

export default Home