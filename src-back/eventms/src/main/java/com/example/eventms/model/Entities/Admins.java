package com.example.eventms.model.Entities;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table
@Entity
public class Admins {

    @Id
    private String adminname;
    private String password;

    @ManyToOne
    @JoinColumn(name = "event_id" , referencedColumnName = "id")
    private Events events;


    public Admins(String adminname, String password, Events events) {
        this.adminname = adminname;
        this.password = password;
        this.events = events;
    }


    //

    public Admins() {
    }

    public String getAdminname() {
        return adminname;
    }

    public void setAdminname(String adminname) {
        this.adminname = adminname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
 //

    public Events getEvents() {
        return events;
    }

    public void setEvents(Events events) {
        this.events = events;
    }


    //


    @Override
    public String toString() {
        return "Admins{" +
                "adminname='" + adminname + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

