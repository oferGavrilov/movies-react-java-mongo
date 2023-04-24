package dev.ofer.movies.controller;

import dev.ofer.movies.Movie;
import dev.ofer.movies.service.MovieService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/movies")
@CrossOrigin
public class MovieController {
    @Autowired
    private MovieService service;
    @GetMapping
    public ResponseEntity<List<Movie>> getMovies() {
        return new ResponseEntity<List<Movie>>(service.findAllMovies(), HttpStatus.OK);
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<Optional<Movie>> getMovieById(@PathVariable String id) {
//        return new ResponseEntity<Optional<Movie>>(service.movieById(id) , HttpStatus.OK);
//    }

}

