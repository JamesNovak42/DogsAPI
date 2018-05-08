package tech.elektron.spring.dogsapi.services;

import tech.elektron.spring.dogsapi.models.ImagesResponse;
import tech.elektron.spring.dogsapi.models.BreedsResponse;

public interface DataService {
    BreedsResponse getAllBreeds();
    ImagesResponse getBreedImages(String breed);
    ImagesResponse getBreedImages(String breed, String subBreed);
}
