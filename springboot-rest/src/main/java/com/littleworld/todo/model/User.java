package com.littleworld.todo.model;

public class User {
    String naam;
    boolean first;
    int ronde = 0;
    int id;



    public User (boolean first, int id, String naam) {
        this.first = first;
        this.id = id;
        this.naam = naam;
    }

    public boolean isFirst() {
        return first;
    }

    public void setFirst(boolean first) {
        this.first = first;
    }

    public int getRonde() {
        return ronde;
    }

    public void setRonde(int ronde) {
        this.ronde = ronde;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }
}
