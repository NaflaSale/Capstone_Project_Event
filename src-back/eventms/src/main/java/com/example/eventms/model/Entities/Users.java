package com.example.eventms.model.Entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Users {

    @Id
    private String username;
    private String password;
    //
    @ManyToMany
    @JoinTable(name = "USER_EVENT",
            joinColumns = @JoinColumn(name = "E_id"),
            inverseJoinColumns = @JoinColumn(name = "U_id"))
    private List<Events> withUser = new ArrayList<>();
//with ticket
  @OneToMany(mappedBy = "users")
  @JsonIgnore
  private List<Ticket> items3= new ArrayList<>();


    public Users(String username, String password, List<Events> withUser) {
        this.username = username;
        this.password = password;
        this.withUser = withUser;
    }

    public Users() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Events> getWithUser() {
        return withUser;
    }

    public void setWithUser(List<Events> withUser) {
        this.withUser = withUser;
    }

    public List<Ticket> getItems3() {
        return items3;
    }

    public void setItems3(List<Ticket> items3) {
        this.items3 = items3;
    }

    @Override
    public String toString() {
        return "Users{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
