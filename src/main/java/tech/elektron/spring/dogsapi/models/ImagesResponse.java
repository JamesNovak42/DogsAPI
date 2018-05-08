package tech.elektron.spring.dogsapi.models;

import java.io.Serializable;

public class ImagesResponse extends AbstractBasicResponse implements Serializable {
    private String[] message;

    public String[] getMessage() {
        return message;
    }

    public void setMessage(String[] message) {
        this.message = message;
    }
}
