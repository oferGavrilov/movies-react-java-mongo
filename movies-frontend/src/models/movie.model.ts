export interface Movie {
      id:string
      imdbId:string
      title:string
      releaseDate:string
      trailerLink:string
      genres:string[]
      poster:string
      backdrops:string[]
      reviews:Review[]
}

interface Review {
      id:string
      reviewBody:string
      imdbId:string
}