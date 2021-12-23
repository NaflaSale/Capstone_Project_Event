package com.example.eventms.model.Entities;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table
@Entity
//REEE

public class Admins {

    @Id
    private String adminname;
    private String password;



    public Admins(String adminname, String password) {
        this.adminname = adminname;
        this.password = password;
    }

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



    @Override
    public String toString() {
        return "Admins{" +
                "adminname='" + adminname + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

