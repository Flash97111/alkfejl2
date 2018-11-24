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
import hu.elte.RestaurantProject.entities.Ordered;
import hu.elte.RestaurantProject.entities.Restaurant;
import hu.elte.RestaurantProject.entities.User;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderedRepository extends CrudRepository<Ordered, Integer> {
    public Iterable<Ordered> findByUser(User user);
    public Iterable<Ordered> findByRestaurant(Restaurant restaurant);
    public Iterable<Ordered> findByFood(Food food);
}
