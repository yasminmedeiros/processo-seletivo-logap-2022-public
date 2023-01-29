package com.api.desafiobackend.repository;

import com.api.desafiobackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {

    List<Product> findByCategoryId(Long categoryId);

    List<Product> findByProviderId(Long providerId);

    @Transactional
    void deleteByCategoryId(Long categoryId);

    @Transactional
    void deleteByProviderId(Long providerId);

}
