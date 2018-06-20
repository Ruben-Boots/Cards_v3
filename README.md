# Cards_v3

It's another cards against humanity clone. This clone features LAN-multiplayer functionality.

## Getting Started

This consists of an Angular app (front-end) and a spring Rest app (backend). Both in their own folder.

### Installing

Make sure you have node.js and maven installed. And have a MySQL database named cards


In the cards project in card.service.ts change variable origin to


```
origin: 'yourip:8080';
```
and in the springboot-rest project in CardController.java change origins in @Crossorigin to

```
@CrossOrigin(origins = "http://yourip:4200")
```

For single machine testing yourip can be localhost. For LAN multiplayer use your actual ip-adress

In the springboot-rest project in application.properties change
```
spring.datasource.username=YOURUSERNAME
spring.datasource.password=YOURPASSWORD
```
to your MySQL username and password.

## Deployment

Run the springboot-rest app in commandline with 

```
mvn spring-boot:run
``` 

and the angular app with 
```
ng serve --open
```
or
```
ng serve --host yourip
```
for local testing and LAN multiplayer functionality respectively.

## Authors

* **Ruben Boots** - *Initial work, front-end focus* 
* **Tobias Stockem** - *Initial work, back-end focus*
