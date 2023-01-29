package com.api.desafiobackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "value_send")
    private Float value_send;

    @Column(name = "value_buy")
    private Float value_buy;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "quantity_minimum")
    private Integer quantity_minimum;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "category_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Category category;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "provider_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Provider provider;

    public Product() {
    }

    public Product( String name, Float value_send, Float value_buy, Integer quantity, Integer quantity_minimum) {
        this.name = name;
        this.value_send = value_send;
        this.value_buy = value_buy;
        this.quantity = quantity;
        this.quantity_minimum = quantity_minimum;
    }
    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getValue_send() {
        return value_send;
    }

    public void setValue_send(Float value_send) {
        this.value_send = value_send;
    }

    public Float getValue_buy() {
        return value_buy;
    }

    public void setValue_buy(Float value_buy) {
        this.value_buy = value_buy;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getQuantity_minimum() {
        return quantity_minimum;
    }

    public void setQuantity_minimum(Integer quantity_minimum) {
        this.quantity_minimum = quantity_minimum;
    }

}
