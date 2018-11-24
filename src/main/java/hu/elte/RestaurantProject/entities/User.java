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
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class User implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column
    @Enumerated(EnumType.STRING)
    private Role role;
    
    @Column(unique=true)
    @NotNull
    private String username;
    
    @Column
    @NotNull
    private String password;
    
    @Column(unique=true)
    @NotNull
    private String address;
    
    @Column(unique=true)
    @NotNull
    private String phone;
    
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Ordered> orders;
    
    public enum Role {
        ROLE_QUEST, ROLE_USER, ROLE_ADMIN
    }
}
