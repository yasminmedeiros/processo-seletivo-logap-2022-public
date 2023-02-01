package com.api.desafiobackend.controller;

import com.api.desafiobackend.exception.CategoryNotFoundException;
import com.api.desafiobackend.exception.ProductNotFoundException;
import com.api.desafiobackend.exception.ProviderNotFoundException;
import com.api.desafiobackend.model.Category;
import com.api.desafiobackend.model.Product;
import com.api.desafiobackend.model.Provider;
import com.api.desafiobackend.repository.CategoryRepository;
import com.api.desafiobackend.repository.ProductRepository;
import com.api.desafiobackend.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProviderRepository providerRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @PostMapping("/product/category/{category_id}/provider/{provider_id}")
    public Product createNewProduct (@PathVariable(value = "category_id") Long categoryId,
                                     @PathVariable(value = "provider_id") Long providerId,
                                     @RequestBody Product product){
        System.out.println(product);
        Product product1 = providerRepository.findById(providerId).map(provider->{
            product.setProvider(provider);
            return product;
        }).orElseThrow(() -> new ProviderNotFoundException(providerId));
        Product product2 = categoryRepository.findById(categoryId).map(category->{
            product1.setCategory(category);
            return productRepository.save(product1);
        }).orElseThrow(() -> new ProviderNotFoundException(providerId));
        return product2;
    }

    @GetMapping("/product")
    List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @GetMapping("/product/{id}")
    Product getProductById(@PathVariable Long id){
        return productRepository.findById(id)
                .orElseThrow(()-> new ProductNotFoundException(id));
    }

    @GetMapping("/product/category/{id_category}")
    List<Product> getProductByCategoryId(@PathVariable(value = "id_category") Long categoryId){
        if(!categoryRepository.existsById(categoryId)){
            throw new CategoryNotFoundException(categoryId);
        }
        return productRepository.findByCategoryId(categoryId);
    }

    @GetMapping("/product/provider/{id_provider}")
    List<Product> getProductByProviderId(@PathVariable(value = "id_provider") Long providerId){
        if(!providerRepository.existsById(providerId)){
            throw new ProviderNotFoundException(providerId);
        }
        return productRepository.findByProviderId(providerId);
    }

    @PutMapping("/product/{id}/category/{categoryId}/provider/{providerId}")
     Product updateProduct(@RequestBody Product newProduct, @PathVariable Long id,
                           @PathVariable(value = "categoryId") Long categoryId,
                           @PathVariable(value = "providerId") Long providerId){
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(()-> new CategoryNotFoundException(categoryId));
        Provider provider = providerRepository.findById(providerId)
                .orElseThrow(()-> new ProviderNotFoundException(providerId));
        return productRepository.findById(id)
                .map(product -> {
                    product.setName(newProduct.getName());
                    product.setQuantity(newProduct.getQuantity());
                    product.setQuantity_minimum(newProduct.getQuantity_minimum());
                    product.setValue_buy(newProduct.getValue_buy());
                    product.setValue_send(newProduct.getValue_send());
                    product.setCategory(category);
                    product.setProvider(provider);
                    return productRepository.save(product);
                }).orElseThrow(()-> new ProductNotFoundException(id));
    }

    @DeleteMapping("/product/{id}")
    String deleteProduct(@PathVariable Long id){
        if(!productRepository.existsById(id)){
            throw new ProductNotFoundException(id);
        }
        productRepository.deleteById(id);
        return "Product with id " + id + "has been deleted success. ";
    }
}
