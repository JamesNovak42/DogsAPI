package tech.elektron.spring.dogsapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.elektron.spring.dogsapi.models.ImagesResponse;
import tech.elektron.spring.dogsapi.services.DataService;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(value="/api/images", produces=APPLICATION_JSON_VALUE)
public class ImagesController {

    @Autowired
    private DataService dataService;

    /**
     * Returns a JSON array of image URLs of the supplied breed.
     *
     * This is exactly what comes from the Dog API at
     * https://dog.ceo/api/breed/{breed}/images
     *
     * @param   breed   a recognized dog breed
     * @return  array of images of the supplied breed
     */

    @GetMapping("/{breed}")
    public ImagesResponse breedImages(@PathVariable("breed") String breed) {
        return dataService.getBreedImages(breed);
    }


    /**
     * Returns a JSON array of image URLs of the supplied sub-breed.
     *
     * This is exactly what comes from the Dog API at
     * https://dog.ceo/api/breed/{breed}/{sub-breed}/images
     *
     * @param   breed       a recognized dog breed
     * @param   subBreed    a recognized sub-breed of @param breed
     * @return  array of images of the supplied sub-breed
     */

    @GetMapping("/{breed}/{subBreed}")
    public ImagesResponse subBreedImages(@PathVariable("breed") String breed,
                                         @PathVariable("subBreed") String subBreed) {
        return dataService.getBreedImages(breed, subBreed);
    }
}
