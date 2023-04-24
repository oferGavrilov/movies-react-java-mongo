import axios from "axios"

const getMovies = async () => {
      try {
            const { data } = await axios.get('http://localhost:8080/movies')
            return data
      } catch (err) {
            console.log(err)
      }
}


export const movieService = {
      getMovies
}
