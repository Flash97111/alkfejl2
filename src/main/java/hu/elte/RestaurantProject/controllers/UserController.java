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
import hu.elte.RestaurantProject.entities.User;
import hu.elte.RestaurantProject.repositories.OrderedRepository;
import hu.elte.RestaurantProject.repositories.UserRepository;
import java.util.Iterator;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrderedRepository orderedRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    
    @GetMapping("")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Iterable<User>> getAll() {
        Iterable<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }
    
    @GetMapping("/{id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<User> get(@PathVariable Integer id) {
        Optional<User> oUser = userRepository.findById(id);
        if (!oUser.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        return ResponseEntity.ok(oUser.get());
    }
    
    @DeleteMapping("/{id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<User> oUser = userRepository.findById(id);
        if (!oUser.isPresent()) {
            return ResponseEntity.notFound().build();   
        }
        
        Iterable<Ordered> oOrder = orderedRepository.findByUser(oUser.get());
        Iterator<Ordered> it = oOrder.iterator();
        while(it.hasNext()){
            orderedRepository.delete(it.next());   
        }        
            
        userRepository.delete(oUser.get());
        return ResponseEntity.ok().build();
    }
    
    @PutMapping("/{id}/admin")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<User> putToAdmin(@PathVariable Integer id,
                                              @RequestBody User user) {
        Optional<User> oUser = userRepository.findById(id);
        if (!oUser.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        user.setId(id);
        user.setUsername(oUser.get().getUsername());
        user.setPassword(oUser.get().getPassword());
        user.setAddress(oUser.get().getAddress());
        user.setPhone(oUser.get().getPhone());
        return ResponseEntity.ok(userRepository.save(user));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> put(@PathVariable Integer id, @RequestBody User user) {
        Optional<User> oUser = userRepository.findById(id);
        if (!oUser.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        
        user.setId(id);
        user.setRole(User.Role.ROLE_USER);
        return ResponseEntity.ok(userRepository.save(user));
    }
    
    @PostMapping("/register")
    public ResponseEntity<User> post(@RequestBody User user) {
        Optional<User> oUser = userRepository.findByUsername(user.getUsername());
        if (oUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        user.setId(null);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(User.Role.ROLE_USER);
        return ResponseEntity.ok(userRepository.save(user));
    }
    
    @PostMapping("login")
    public ResponseEntity login(@RequestBody User user) {
        return ResponseEntity.ok().build();
    } 
}
