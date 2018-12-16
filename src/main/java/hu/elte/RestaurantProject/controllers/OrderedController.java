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
import hu.elte.RestaurantProject.entities.Ordered;
import hu.elte.RestaurantProject.entities.Restaurant;
import hu.elte.RestaurantProject.entities.User;
import hu.elte.RestaurantProject.repositories.OrderedRepository;
import hu.elte.RestaurantProject.repositories.RestaurantRepository;
import hu.elte.RestaurantProject.repositories.UserRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/orders")
public class OrderedController {
    @Autowired
    private OrderedRepository orderRepository;
    @Autowired
    private RestaurantRepository restaurantRepository;
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<Ordered>> getAll() {
        Iterable<Ordered> orders = orderRepository.findAll();
        return ResponseEntity.ok(orders);
    }
    
    @GetMapping("/my/{username}")
    public ResponseEntity<Iterable<Ordered>> get(@PathVariable String username) {
        Optional<User> oUser = userRepository.findByUsername(username);
        if (!oUser.isPresent()) {
            System.out.println("-----");
            System.out.println(username + " not found");
            System.out.println("-----");
            return ResponseEntity.badRequest().build();
        }
        Iterable<Ordered> orders = orderRepository.findByUser(oUser.get());
        return ResponseEntity.ok(orders);
    }
    
    @PostMapping("/new")
    public ResponseEntity<Ordered> post(@RequestBody Ordered order) {
        order.setId(null);        
        return ResponseEntity.ok(orderRepository.save(order));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Ordered> oOrder = orderRepository.findById(id);
        if (!oOrder.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
            
        orderRepository.delete(oOrder.get());
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/{restaurantID}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Iterable<Ordered>> get(@PathVariable Integer restaurantID) {
        Optional<Restaurant> oRestaurant = restaurantRepository.findById(restaurantID);
        if (!oRestaurant.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(oRestaurant.get().getOrders());
    }
}
