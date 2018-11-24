/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.RestaurantProject.repositories;

/**
 *
 * @author berec
 */
import hu.elte.RestaurantProject.entities.Food;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends CrudRepository<Food, Integer> {
    public Optional<Food> findByName(String name);
}
