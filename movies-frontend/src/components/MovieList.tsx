import { Movie } from "src/models/movie.model"
import MoviePreview from "./MoviePreview"

interface Props {
      movies: Movie[]
}

function MovieList({ movies }: Props) {
      console.log(movies)
      return (
            <ul className="flex flex-wrap place-content-center gap-x-8 gap-y-16 ml-auto  my-14">
                  {movies.map(movie => (
                        <MoviePreview key={movie._id} movie={movie}/>
                  ))}
            </ul>
      )
}

export default MovieList