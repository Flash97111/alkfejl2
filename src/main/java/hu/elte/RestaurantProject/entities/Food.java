/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.RestaurantProject.entities;

/**
 *
 * @author berec
 */
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Food implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(unique=true)
    @NotNull
    private String name;
    
    @Column
    @NotNull
    private Integer price;
    
    @Column
    private String Description;
    
    @Column
    private String image;
    
    @JsonIgnore
    @OneToMany(mappedBy = "food")
    private List<Ordered> orders;
    
    @JsonIgnore
    @ManyToMany(mappedBy = "foods")
    private List<Restaurant> restaurants;
    
}

