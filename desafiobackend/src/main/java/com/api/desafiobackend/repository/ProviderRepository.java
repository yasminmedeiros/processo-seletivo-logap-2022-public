package com.api.desafiobackend.repository;

import com.api.desafiobackend.model.Provider;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProviderRepository extends JpaRepository<Provider,Long> {
}
