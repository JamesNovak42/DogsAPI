package tech.elektron.spring.dogsapi.models;

import java.io.Serializable;
import java.util.Map;

public class BreedsResponse extends AbstractBasicResponse implements Serializable {
    private Map<String, Object> message;

    public Map<String, Object> getMessage() {
        return message;
    }

    public void setMessage(Map<String, Object> message) {
        this.message = message;
    }
}
