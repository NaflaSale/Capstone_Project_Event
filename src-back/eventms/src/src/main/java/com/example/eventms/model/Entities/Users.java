package com.example.eventms.model.Entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
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
            joinColumns = @JoinColumn(name = "customer_id"),
            inverseJoinColumns = @JoinColumn(name = "services_id"))
    private List<Events> serviceMul = new ArrayList<>();

    //
//    public Users(String username, String password) {
//        this.username = username;
//        this.password = password;
//    }


    public Users(String username, String password, List<Events> serviceMul) {
        this.username = username;
        this.password = password;
        this.serviceMul = serviceMul;
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

    public List<Events> getServiceMul() {
        return serviceMul;
    }

    public void setServiceMul(List<Events> serviceMul) {
        this.serviceMul = serviceMul;
    }

    @Override
    public String toString() {
        return "Users{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
