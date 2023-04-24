import { Movie } from "src/models/movie.model"
import MoviePreview from "./MoviePreview"

interface Props {
      movies: Movie[]
}

function MovieList({ movies }: Props) {

      return (
            <ul className="flex flex-wrap gap-8 items-center justify-center">
                  {movies.map(movie => (
                        <MoviePreview key={movie.id} movie={movie}/>
                  ))}
            </ul>
      )
}

export default MovieList