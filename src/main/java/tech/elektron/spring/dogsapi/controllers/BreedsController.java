package tech.elektron.spring.dogsapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.elektron.spring.dogsapi.models.BreedsResponse;
import tech.elektron.spring.dogsapi.services.DataService;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;


@RestController
@RequestMapping(value="/api/breeds",produces=APPLICATION_JSON_VALUE)
public class BreedsController {

    @Autowired
    private DataService dataService;

    /**
     * Returns a JSON object of all available breeds and sub-breeds.
     *
     * This is exactly what comes from the Dog API at
     * https://dog.ceo/api/breeds/list/all
     *
     * @return array of all breeds and sub-breeds
     */

    @GetMapping
    public BreedsResponse getAllBreeds() {
        return dataService.getAllBreeds();
    }

}
