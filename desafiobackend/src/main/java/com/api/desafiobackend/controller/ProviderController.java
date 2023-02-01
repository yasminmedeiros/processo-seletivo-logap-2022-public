package com.api.desafiobackend.controller;

import com.api.desafiobackend.exception.ProviderNotFoundException;
import com.api.desafiobackend.model.Provider;
import com.api.desafiobackend.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("*")
public class ProviderController {
    @Autowired
    ProviderRepository providerRepository;

    @PostMapping("/provider")
    public Provider createNewProvider(@RequestBody Provider provider){
        return  providerRepository.save(provider);
    }

    @GetMapping("/provider")
    List<Provider> getAllProviders(){
        return providerRepository.findAll();
    }

    @GetMapping("/provider/{id}")
    Provider getProviderById(@PathVariable Long id){
        return providerRepository.findById(id)
                .orElseThrow(()-> new ProviderNotFoundException(id));
    }

    @PutMapping("/provider/{id}")
    Provider updateProvider(@RequestBody Provider newProvider, @PathVariable Long id){
        return providerRepository.findById(id)
                .map(provider -> {
                    provider.setEmail(newProvider.getEmail());
                    provider.setCnpj(newProvider.getCnpj());
                    provider.setName(newProvider.getName());
                    provider.setPhone(newProvider.getPhone());
                    return providerRepository.save(provider);
                }).orElseThrow(()-> new ProviderNotFoundException(id));
    }

    @DeleteMapping("/provider/{id}")
    String deleteProvider(@PathVariable Long id){
        if(!providerRepository.existsById(id)){
            throw new ProviderNotFoundException(id);
        }
        providerRepository.deleteById(id);
        return "Provider with id " + id + "has been deleted success. ";
    }
}
