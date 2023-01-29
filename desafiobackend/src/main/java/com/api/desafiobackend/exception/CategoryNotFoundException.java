package com.api.desafiobackend.exception;

public class CategoryNotFoundException extends RuntimeException{

    public CategoryNotFoundException(Long id){
        super("Could not found the category with id " + id);
    }
}
