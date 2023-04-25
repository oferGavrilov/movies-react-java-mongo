import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import MovieDetails from "../pages/MovieDetails"

const App = (): JSX.Element => {
  return (
    <div className='app-bg'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
