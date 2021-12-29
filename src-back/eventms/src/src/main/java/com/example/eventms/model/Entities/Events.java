package com.example.eventms.model.Entities;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table
@Entity
public class Events {
    @Id
    private int id;
    private String type;
    private String eventName;
    private String location;
    private String time;
    private String duration;
    private String src;

@ManyToOne
 @JoinColumn(name = "admin_id" , referencedColumnName = "adminname")
 private Admins admins;

    public Events() {
    }

    public Events(int id, String type, String eventName, String location, String time, String duration, String src, Admins admins) {
        this.id = id;
        this.type = type;
        this.eventName = eventName;
        this.location = location;
        this.time = time;
        this.duration = duration;
        this.src = src;
        this.admins = admins;
    }


    //


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }
    //


//


    public Admins getAdmins() {
        return admins;
    }

    public void setAdmins(Admins admins) {
        this.admins = admins;
    }

    @Override
    public String toString() {
        return "Events{" +
                "id=" + id +
                ", type='" + type + '\'' +
                ", eventName='" + eventName + '\'' +
                ", location='" + location + '\'' +
                ", time='" + time + '\'' +
                ", duration='" + duration + '\'' +
                ", src='" + src + '\'' +
                ", admins=" + admins +
                '}';
    }
}