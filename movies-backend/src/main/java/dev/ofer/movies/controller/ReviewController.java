package dev.ofer.movies.controller;

import dev.ofer.movies.Review;
import dev.ofer.movies.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
    @Autowired
    private ReviewService service;

//    @PostMapping
//    public ResponseEntity<Review> createReview(@RequestBody Map<String , String> payload) {
//        return new ResponseEntity<Review>(service.createReview(payload.get("reviewBody") , payload.get("imdbId")) , HttpStatus.CREATED);
//    }
}
