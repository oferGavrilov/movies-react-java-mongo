import Layout from 'components/Layout'
import MovieList from 'components/MovieList'

import { useEffect, useState } from "react"
import { Movie } from "src/models/movie.model"
import { movieService } from "../services/movieService"

function Home() {
      const [movies, setMovies] = useState<Movie[]>([])

      useEffect(() => {
            loadMovies()
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=3bb2e65a839793d05ec311b4926c2ae0')
                  .then(response => response.json())
                  .then(data => console.log(data))
                  .catch(error => console.error(error));
      }, [])

      async function loadMovies() {
            const data = await movieService.getMovies()
            setMovies(data)
      }

      return (
            <>
                  <Layout>
                        <MovieList movies={movies} />
                  </Layout>
            </>
      )
}

export default Home