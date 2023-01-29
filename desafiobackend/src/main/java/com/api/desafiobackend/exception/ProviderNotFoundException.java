package com.api.desafiobackend.exception;

public class ProviderNotFoundException extends RuntimeException{

    public ProviderNotFoundException(Long id){
        super("Could not found the provider with id " + id);
    }
}
