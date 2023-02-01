package com.api.desafiobackend.controller;

import com.api.desafiobackend.exception.CategoryNotFoundException;
import com.api.desafiobackend.model.Category;
import com.api.desafiobackend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CategoryController {
    @Autowired
    CategoryRepository categoryRepository;

    @PostMapping("/category")
    public Category createNewProduct (Category category){
        return categoryRepository.save(category);
    }

    @GetMapping("/category")
    List<Category> getAllCategory(){
        return categoryRepository.findAll();
    }

    @GetMapping("/category/{id}")
    Category getCategoryById(@PathVariable Long id){
        return categoryRepository.findById(id)
                .orElseThrow(()-> new CategoryNotFoundException(id));
    }
    @PutMapping("/category/{id}")
    Category updateCategory(@RequestBody Category newCategory, @PathVariable Long id){
        return categoryRepository.findById(id)
                .map(category -> {
                    category.setName(newCategory.getName());
                    return categoryRepository.save(category);
                }).orElseThrow(()-> new CategoryNotFoundException(id));
    }
    @DeleteMapping("/category/{id}")
    String deleteCategory(@PathVariable Long id){
        if(!categoryRepository.existsById(id)){
            throw new CategoryNotFoundException(id);
        }
        categoryRepository.deleteById(id);
        return "Category with id " + id + "has been deleted success. ";
    }
}
