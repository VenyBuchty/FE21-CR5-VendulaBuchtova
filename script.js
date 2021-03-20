/* BASE CLASS LOCATIONS*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(name, city, zip_code, address, image) {
        this.name = name;
        this.city = city;
        this.zip_code = zip_code;
        this.address = address;
        this.image = image;
        /* I decided to use randomDate function because I wanted to play with JS Date Object :-)*/
        this.created = (randomDate(new Date(2020, 0, 1), new Date(2021, 0, 3), 0, 24));
    }
    Locations.prototype.display = function () {
        var cardCreator = "<div class=\"col card-container\">\n                                    <div class=\"card\" style=\"width: 18rem;\">\n                                        <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"...\" style=\"object-fit: cover; height: 12rem;\">\n                                    <div class=\"card-body\">\n                                        <div class=\"d-flex flex-column justify-content-start\">\n                                            <h4 class=\"card-title text-center\">" + this.name + "</h4>\n                                        </div>\n                                        <div class=\"d-flex flex-column\">\n                                                    <span class=\"badge color-badge\"><i class=\"fas fa-map-marker-alt\"></i> Address:</span>\n                                                    <p class=\"card-text\">" + this.city + "</p>\n                                                    <p class=\"card-text\">" + this.zip_code + "</p>\n                                                    <p class=\"card-text\">" + this.address + "</p>\n                            ";
        return cardCreator;
    };
    Locations.prototype.closeDiv = function () {
        return "                            <div class=\"card-footer text-center\">\n                                            <small class=\"fw-light\">Created: " + this.created + "</small>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>";
    };
    return Locations;
}());
var locationsArr = [
    new Locations("Palmenhaus Schönbrunn", "Vienna", 1130, "Schönbrunner Schloßstraße 47", "./img/place1.jpg"),
    new Locations("Walt Disney Concert Hall", "Los Angeles", 90012, "111 S Grand Ave", "./img/place2.jpg"),
    new Locations("Museum Montanelli Bocelo", "Praha", 11015, "Staroměstské nám. 1/12", "./img/place3.jpg"),
    new Locations("Parc zoologique de Paris", "Paris", 75012, " Avenue Daumesnil", "./img/place4.jpg"),
];
for (var _i = 0, locationsArr_1 = locationsArr; _i < locationsArr_1.length; _i++) {
    var value = locationsArr_1[_i];
    document.querySelector("[data-meta=\"places-cards\"]").innerHTML += value.display() + value.closeDiv();
}
/* EXTENDOR RESTAURANT CLASS */
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zip_code, address, image, tel_number, cuisine, web_address) {
        var _this = _super.call(this, name, city, zip_code, address, image) || this;
        _this.tel_number = tel_number;
        _this.cuisine = cuisine;
        _this.web_address = web_address;
        return _this;
    }
    Restaurant.prototype.display = function () {
        var cardCreator = " " + _super.prototype.display.call(this) + "\n                                    <span class=\"badge color-badge\"><i class=\"fas fa-phone\"></i> Telephone:</span>\n                                    <p class=\"card-text\">" + this.tel_number + "</p>\n                                    <span class=\"badge color-badge\"><i class=\"fas fa-utensils\"></i> Cuisine:</span>\n                                    <p class=\"card-text\">" + this.cuisine + "</p>\n                                    <span class=\"badge color-badge\"><i class=\"fas fa-globe\"></i> Web page:</span>\n                                    <p class=\"card-text\"><a href=\"" + this.web_address + "\">" + this.web_address + "</a></p>\n                                    <div class=\"card-footer text-center\">\n                                            <small class=\"fw-light\">Created: " + this.created + "</small>\n                                    </div>\n                                </div>       \n                            </div>\n                        </div>";
        return cardCreator;
    };
    return Restaurant;
}(Locations));
var restaurantArr = [
    new Restaurant("Osteria Francescana", "Modena", 41121, "Via Stella, 22", "./img/res1.jpg", 660834234, "italian", "https://osteriafrancescana.it"),
    new Restaurant("El Celler de Roca", "Girona", 17007, "Carrer de Can Sunyer, 48", "./img/res2.jpg", 4354363463, "spanish", "https://cellercanroca.com"),
    new Restaurant("Mirazur", "Menton", 6500, "30 Avenue Aristide Briand", "./img/res3.jpg", 823395432, "oriental", "https://www.mirazur.fr"),
    new Restaurant("The Ledbury", "Nothing Hill, London", 1120, "127 Ledbury Rd", "./img/res4.jpg", 233358102, "rustical", "http://www.theledbury.com"),
];
for (var _a = 0, restaurantArr_1 = restaurantArr; _a < restaurantArr_1.length; _a++) {
    var value = restaurantArr_1[_a];
    document.querySelector("[data-meta=\"restaurant-cards\"]").innerHTML += value.display();
}
/* EXTENDOR EVENTS CLASS */
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zip_code, address, image, event_date, event_time, ticket_price) {
        var _this = _super.call(this, name, city, zip_code, address, image) || this;
        _this.event_date = event_date;
        _this.event_time = event_time;
        _this.ticket_price = ticket_price;
        return _this;
    }
    Events.prototype.display = function () {
        var cardCreator = " " + _super.prototype.display.call(this) + "\n                                    <span class=\"badge color-badge\"><i class=\"fas fa-calendar-week\"></i> Event Date:</span>\n                                    <p class=\"card-text\">" + this.event_date + "</p>\n                                    <p class=\"card-text\">" + this.event_time + "</p>\n                                    <span class=\"badge color-badge\"><i class=\"fas fa-euro-sign\"></i> Price:</span>\n                                    <p class=\"card-text\">" + this.ticket_price + "</p>\n                                    <div class=\"card-footer text-center\">\n                                            <small class=\"fw-light\">Created: " + this.created + "</small>\n                                    </div>\n                                </div>       \n                            </div>\n                        </div>";
        return cardCreator;
    };
    return Events;
}(Locations));
var eventsArr = [
    new Events("DJ TemeraF", "Belfort", 14424, "Club DiAziO, Eurockeennes 173", "./img/event1.jpg", "01.07.2021", "21:00", "120 €"),
    new Events("Spring Food Festival", "Budapest", 1093, "Vámház krt. 1-3", "./img/event2.jpg", "04.04.2021", "09:00", "3 €"),
    new Events("Schwanensee", "Vienna", 1010, "Vienna Oper, Opernring 2", "./img/event3.jpg", "12.05.2021", "20:00", "203 €"),
    new Events("Zucchero", "Milano", 57391, "Stadium Theatre 2", "./img/event4.jpg", "14.08.2021", "19:00", "89 €"),
];
for (var _b = 0, eventsArr_1 = eventsArr; _b < eventsArr_1.length; _b++) {
    var value = eventsArr_1[_b];
    document.querySelector("[data-meta=\"events-cards\"]").innerHTML += value.display();
}
/* SORTING FUNCTIONS */
var sorting_places = document.querySelector("#sort_places");
sorting_places.addEventListener("click", cardSortHandler);
var sorting_restaurants = document.querySelector("#sort_restaurants");
sorting_restaurants.addEventListener("click", cardSortHandler);
var sorting_events = document.querySelector("#sort_events");
sorting_events.addEventListener("click", cardSortHandler);
var isAscending = true;
function cardSortHandler(e) {
    if (e.target.id == ("sort_places")) {
        var places = document.getElementById("places-cards");
        places.innerHTML = "";
        sortCards(locationsArr);
        for (var _i = 0, locationsArr_2 = locationsArr; _i < locationsArr_2.length; _i++) {
            var value = locationsArr_2[_i];
            document.querySelector("[data-meta=\"places-cards\"]").innerHTML += value.display() + value.closeDiv();
        }
    }
    if (e.target.id == ("sort_restaurants")) {
        var restaurants = document.getElementById("restaurant-cards");
        restaurants.innerHTML = "";
        sortCards(restaurantArr);
        for (var _a = 0, restaurantArr_2 = restaurantArr; _a < restaurantArr_2.length; _a++) {
            var value = restaurantArr_2[_a];
            document.querySelector("[data-meta=\"restaurant-cards\"]").innerHTML += value.display();
        }
    }
    if (e.target.id == ("sort_events")) {
        var events = document.getElementById("events-cards");
        events.innerHTML = "";
        sortCards(eventsArr);
        for (var _b = 0, eventsArr_2 = eventsArr; _b < eventsArr_2.length; _b++) {
            var value = eventsArr_2[_b];
            document.querySelector("[data-meta=\"events-cards\"]").innerHTML += value.display();
        }
    }
}
;
//I wasn't sure, which type should be Array, because I am using three different.
function sortCards(arrayOfCards) {
    isAscending = !isAscending;
    arrayOfCards.sort(function (a, b) {
        if (isAscending) {
            return b.created - a.created;
        }
        else {
            return a.created - b.created;
        }
    });
}
/* RANDOM DATE AND TIME FUNCTION */
// I wasn't sure, which type should be "start" and "end". I tryied "Date" or "Number" but it wasn't accepted. 
function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
}
