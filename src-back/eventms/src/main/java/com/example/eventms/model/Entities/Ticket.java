package com.example.eventms.model.Entities;

import javax.persistence.*;

@Entity
@Table
public class Ticket {
     @Id
    private int TicketId;
    private String Name;
    private String price;


//with event
    @ManyToOne
    @JoinColumn(name = "E_id" , referencedColumnName = "id")
    private Events events;
//with user
  @ManyToOne
  @JoinColumn(name = "U_id" , referencedColumnName = "username")
  private Users users;


    public Ticket() {
    }

//    public Ticket(int ticketId, String name, String price, Events events) {
//        TicketId = ticketId;
//        Name = name;
//        this.price = price;
//        this.events = events;
//    }


    public Ticket(int ticketId, String name, String price, Events events, Users users) {
        TicketId = ticketId;
        Name = name;
        this.price = price;
        this.events = events;
        this.users = users;
    }

    public int getTicketId() {
        return TicketId;
    }

    public void setTicketId(int ticketId) {
        TicketId = ticketId;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Events getEvents() {
        return events;
    }

    public void setEvents(Events events) {
        this.events = events;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    @Override
    public String toString() {
        return "Ticket{" +
                "TicketId=" + TicketId +
                ", Name='" + Name + '\'' +
                ", price='" + price + '\'' +
                ", events=" + events +
                '}';
    }
}
