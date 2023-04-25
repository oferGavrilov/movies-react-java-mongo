package dev.ofer.movies;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movie")
@Data
@AllArgsConstructor // Takes all that private fields as arguments
@NoArgsConstructor
public class Movie {
    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    private ObjectId _id;
    private Boolean adult;
    private String backdrop_path;
//    @DocumentReference
    private List<Integer> genre_ids;
    private String original_language;
    private String original_title;
    private String overview;
    private Double popularity;
    private String poster_path;
    private String release_date;
    private String title;
    private Boolean video;
    private Double vote_average;
    private Float vote_count;
    @DocumentReference
    private List<Review> reviewIds;


}
