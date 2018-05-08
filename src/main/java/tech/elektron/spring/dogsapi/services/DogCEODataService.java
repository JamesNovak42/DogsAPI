package tech.elektron.spring.dogsapi.services;

import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;
import tech.elektron.spring.dogsapi.models.ImagesResponse;
import tech.elektron.spring.dogsapi.models.BreedsResponse;

import java.io.IOException;
import java.util.Arrays;

@Service
public class DogCEODataService implements DataService {
    private class HttpHeaderReqInterceptor implements ClientHttpRequestInterceptor {
        private final String headerName;
        private final String headerValue;

        public HttpHeaderReqInterceptor(String headerName, String headerValue) {
            this.headerName = headerName;
            this.headerValue = headerValue;
        }

        @Override
        public ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution execution) throws IOException {
            request.getHeaders().set(headerName, headerValue);
            return execution.execute(request, body);
        }
    }

    private final String apiUrl = "https://dog.ceo/api";
    private final RestTemplate restTemplate = new RestTemplate();

    public DogCEODataService() {
        super();
        String userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
                           "(KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36";
        HttpHeaderReqInterceptor interceptor = new HttpHeaderReqInterceptor("User-Agent", userAgent);
        restTemplate.setInterceptors(Arrays.asList(interceptor));
    }

    @Override
    public BreedsResponse getAllBreeds() {
        return restTemplate.getForObject(apiUrl + "/breeds/list/all", BreedsResponse.class);
    }

    @Override
    public ImagesResponse getBreedImages(String breed) {
        return getImages(breed, null);
    }

    @Override
    public ImagesResponse getBreedImages(String breed, String subBreed) {
        return getImages(breed, subBreed);
    }

    private ImagesResponse getImages(String breed, String subBreed) {
        ImagesResponse imagesResponse;
        if (StringUtils.isEmpty(subBreed)) {
            imagesResponse = restTemplate.getForObject(
                    apiUrl + "/breed/{breed}/images",
                    ImagesResponse.class,
                    breed);
        } else {
            imagesResponse = restTemplate.getForObject(
                    apiUrl + "/breed/{breed}/{subBreed}/images",
                    ImagesResponse.class,
                    breed, subBreed);
        }
        return imagesResponse;
    }
}
