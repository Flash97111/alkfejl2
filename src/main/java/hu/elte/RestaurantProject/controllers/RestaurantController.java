/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.RestaurantProject.controllers;

/**
 *
 * @author berec
 */
import hu.elte.RestaurantProject.entities.Food;
import hu.elte.RestaurantProject.entities.Ordered;
import hu.elte.RestaurantProject.entities.Restaurant;
import hu.elte.RestaurantProject.repositories.FoodRepository;
import hu.elte.RestaurantProject.repositories.OrderedRepository;
import hu.elte.RestaurantProject.repositories.RestaurantRepository;
import java.util.Iterator;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {
    @Autowired
    private RestaurantRepository restaurantRepository;
    @Autowired
    private FoodRepository foodRepository;
    @Autowired
    private OrderedRepository orderRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Restaurant>> getAll() {
        return ResponseEntity.ok(restaurantRepository.findAll());
    }   
    
    @GetMapping("/{id}")
    public ResponseEntity<Iterable<Food>> get(@PathVariable Integer id) {
        Optional<Restaurant> oRestaurant = restaurantRepository.findById(id);
        if (!oRestaurant.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(oRestaurant.get().getFoods());
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Restaurant> oRestaurant = restaurantRepository.findById(id);
        if (!oRestaurant.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        Iterable<Ordered> oOrder = orderRepository.findByRestaurant(oRestaurant.get());
        Iterator<Ordered> it = oOrder.iterator();
        while(it.hasNext()){
            orderRepository.delete(it.next());   
        }
        
        Iterable<Food> oFood = foodRepository.findAll();
        Iterator<Food> it2 = oFood.iterator();
        while(it2.hasNext()){
            Food tmp = it2.next();
            for(int i=0; i<tmp.getRestaurants().size(); ++i) {
                if(tmp.getRestaurants().get(i).equals(oRestaurant.get())){
                    tmp.getRestaurants().remove(i);
                    break;
                }
            }
        }
        
            
        restaurantRepository.delete(oRestaurant.get());
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("/{id}")
    @Secured({ "ROLE_USER" })
    public ResponseEntity<Ordered> post(@PathVariable Integer id, @RequestBody Ordered order) {
        Optional<Restaurant> oRestaurant = restaurantRepository.findById(id);
        if (oRestaurant.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        Optional<Food> oFood = foodRepository.findById(order.getId());
        if (oFood.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        
        order.setId(null);
        return ResponseEntity.ok(orderRepository.save(order));
    }
    
    @PostMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Restaurant> post(@RequestBody Restaurant restaurant) {
        Optional<Restaurant> oRestaurant = restaurantRepository.findByName(restaurant.getName());
        if (oRestaurant.isPresent()) {
            return ResponseEntity.badRequest().build();
        }

        restaurant.setId(null);
        return ResponseEntity.ok(restaurantRepository.save(restaurant));
    }
}