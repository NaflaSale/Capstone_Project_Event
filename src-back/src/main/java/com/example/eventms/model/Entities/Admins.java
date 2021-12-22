package com.example.eventms.model.Entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table
@Entity
public class Admins {

        @Id
        private String adminname;
        private String password;
//        @ManyToMany
//        @JoinTable(name = "Event-Admin",
//        joinColumns = @JoinColumn(name = "E_id"),
//                inverseJoinColumns = @JoinColumn(name = "A_id"))
//        private List<Events> events=new ArrayList<>();

//    public Admins(String adminName, String password, List<Events> events) {
//        this.adminName = adminName;
//        this.password = password;
//        //this.events = events;
//    }

    public Admins(String adminname, String password) {
        this.adminname = adminname;
        this.password = password;


    }

    public Admins() {
    }

    public String getAdminName() {
        return adminname;
    }

    public void setAdminName(String adminname) {
        this.adminname = adminname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    public List<Events> getEvents() {
//        return events;
//    }
//
//    public void setEvents(List<Events> events) {
//        this.events = events;
//    }

    @Override
    public String toString() {
        return "Admins{" +
                "adminName='" + adminname + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

