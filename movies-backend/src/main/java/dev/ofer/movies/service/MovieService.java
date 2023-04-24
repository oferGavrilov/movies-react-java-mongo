package dev.ofer.movies.service;

import dev.ofer.movies.Movie;
import dev.ofer.movies.repository.MovieRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;
    public List<Movie> findAllMovies() {
        return repository.findAll();
    }

//    public Optional<Movie> movieById(String id) {
//        return repository.findMovieByImdbId(id);
//    }
}
