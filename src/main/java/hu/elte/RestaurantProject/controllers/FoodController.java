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
@RequestMapping("/foods")
public class FoodController {
    @Autowired
    private FoodRepository foodRepository;
    @Autowired
    private OrderedRepository orderRepository;
    @Autowired
    private RestaurantRepository restaurantRepository;
    
    
    @GetMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Iterable<Food>> getAll() {
        Iterable<Food> foods = foodRepository.findAll();
        return ResponseEntity.ok(foods);
    }
    
    @DeleteMapping("/{id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Food> oFood = foodRepository.findById(id);
        if (!oFood.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        Iterable<Ordered> oOrder = orderRepository.findByFood(oFood.get());
        Iterator<Ordered> it = oOrder.iterator();
        while(it.hasNext()){
            orderRepository.delete(it.next());   
        }
        
        Iterable<Restaurant> oRestaurant = restaurantRepository.findAll();
        Iterator<Restaurant> it2 = oRestaurant.iterator();
        while(it2.hasNext()){
            Restaurant tmp = it2.next();
            for(int i=0; i<tmp.getFoods().size(); ++i) {
                if(tmp.getFoods().get(i).equals(oFood.get())){
                    tmp.getFoods().remove(i);
                    break;
                }
            }
        }
            
        foodRepository.delete(oFood.get());
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Food> post(@RequestBody Food food) {
        Optional<Food> oFood = foodRepository.findByName(food.getName());
        if (oFood.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        food.setId(null);
        return ResponseEntity.ok(foodRepository.save(food));
    }
}
