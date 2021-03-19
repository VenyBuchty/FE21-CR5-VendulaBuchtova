/* BASE CLASS */
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
    function Locations(name, city, zip_code, address, image, created) {
        this.name = name;
        this.city = city;
        this.zip_code = zip_code;
        this.address = address;
        this.image = image;
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
    new Locations("Palmenhaus Schönbrunn", "Vienna", 1130, "Schönbrunner Schloßstraße 47", "./img/place1.jpg", "2016-01-16T05:23:38"),
    new Locations("Walt Disney Concert Hall", "Los Angeles", 90012, "111 S Grand Ave", "./img/place2.jpg", "2018-01-16T05:23:38"),
    new Locations("Museum Montanelli Bocelo", "Praha", 11015, "Staroměstské nám. 1/12", "./img/place3.jpg", "2020-01-16T05:23:38"),
    new Locations("Parc zoologique de Paris", "Paris", 75012, " Avenue Daumesnil", "./img/place4.jpg", "2021-01-16T05:23:38"),
];
for (var _i = 0, locationsArr_1 = locationsArr; _i < locationsArr_1.length; _i++) {
    var value = locationsArr_1[_i];
    document.querySelector("[data-meta=\"places-cards\"]").innerHTML += value.display() + value.closeDiv();
}
/* SORTING FUNCTION for PLACES*/
var sorting = document.querySelector("#sort");
sorting.addEventListener("click", cardSort);
var isAscending = true;
function cardSort(e) {
    if (e.target.id == "sort") {
        /* remove old locationsArray */
        var places = document.getElementById("places-cards");
        places.innerHTML = "";
        isAscending = !isAscending;
        /* sort locationsArray */
        locationsArr.sort(function (a, b) {
            if (isAscending) {
                return b.created - a.created;
            }
            else {
                return a.created - b.created;
            }
        });
    }
    ;
    /* create new sorted movieArray */
    for (var _i = 0, locationsArr_2 = locationsArr; _i < locationsArr_2.length; _i++) {
        var value = locationsArr_2[_i];
        document.querySelector("[data-meta=\"places-cards\"]").innerHTML += value.display() + value.closeDiv();
    }
}
;
/* EXTENDOR RESTAURANT CLASS */
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zip_code, address, image, tel_number, cuisine, web_address, created) {
        var _this = _super.call(this, name, city, zip_code, address, image, created) || this;
        _this.tel_number = tel_number;
        _this.cuisine = cuisine;
        _this.web_address = web_address;
        return _this;
    }
    Restaurant.prototype.display = function () {
        var cardCreator = " " + _super.prototype.display.call(this) + "\n                                    <span class=\"badge color-badge\"><i class=\"fas fa-phone\"></i> Telephone:</span>\n                                    <p class=\"card-text\">" + this.tel_number + "</p>\n                                    <span class=\"badge color-badge\"><i class=\"fas fa-utensils\"></i> Cuisine:</span>\n                                    <p class=\"card-text\">" + this.cuisine + "</p>\n                                    <span class=\"badge color-badge\"><i class=\"fas fa-globe\"></i> Web page:</span>\n                                    <p class=\"card-text\">" + this.web_address + "</p>\n                                    <div class=\"card-footer text-center\">\n                                            <small class=\"fw-light\">Created: " + this.created + "</small>\n                                    </div>\n                                </div>       \n                            </div>\n                        </div>";
        return cardCreator;
    };
    return Restaurant;
}(Locations));
var restaurantArr = [
    new Restaurant("Osteria Francescana", "Modena", 41121, "Via Stella, 22", "./img/res1.jpg", 660834234, "american", "osterFrances@gmail.com", "29.10.2020, 07:12"),
    new Restaurant("El Celler de Roca", "Girona", 17007, "Carrer de Can Sunyer, 48", "./img/res2.jpg", 4354363463, "spanish", "cellerRoca@gmail.com", "18.09.2020, 11:47"),
    new Restaurant("Mirazur", "Menton", 6500, "30 Avenue Aristide Briand", "./img/res3.jpg", 823395432, "oriental", "mirazur@mail.com", "02.08.2020, 18:29"),
    new Restaurant("The Ledbury", "Nothing Hill, London", 1120, "127 Ledbury Rd", "./img/res4.jpg", 233358102, "rustical", "ledBurys@mail.com", "13.02.2021, 15:02"),
];
for (var _a = 0, restaurantArr_1 = restaurantArr; _a < restaurantArr_1.length; _a++) {
    var value = restaurantArr_1[_a];
    document.querySelector("[data-meta=\"restaurant-cards\"]").innerHTML += value.display();
}
/* SORTING FUNCTION for RESTAURANT*/
var sorting2 = document.querySelector("#sort");
sorting2.addEventListener("click", cardSort2);
var isAscending2 = true;
function cardSort2(e) {
    if (e.target.id == "sort") {
        /* remove old restaurantArray */
        var restaurants = document.getElementById("restaurant-cards");
        restaurants.innerHTML = "";
        isAscending2 = !isAscending2;
        /* sort restaurantArray */
        restaurantArr.sort(function (a, b) {
            if (isAscending) {
                return b.created - a.created;
            }
            else {
                return a.created - b.created;
            }
        });
    }
    ;
    /* create new sorted movieArray */
    for (var _i = 0, restaurantArr_2 = restaurantArr; _i < restaurantArr_2.length; _i++) {
        var value = restaurantArr_2[_i];
        document.querySelector("[data-meta=\"restaurant-cards\"]").innerHTML += value.display();
    }
}
;
/* EXTENDOR EVENTS CLASS */
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, zip_code, address, image, event_date, event_time, ticket_price, created) {
        var _this = _super.call(this, name, city, zip_code, address, image, created) || this;
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
    new Events("DJ TemeraF", "Belfort", 14424, "Club DiAziO, Eurockeennes 173", "./img/event1.jpg", "01.07.2021", "21:00", "120 €", "09.01.2021, 14:10"),
    new Events("Spring Food Festival", "Budapest", 1093, "Vámház krt. 1-3", "./img/event2.jpg", "04.04.2021", "09:00", "3 €", "20.02.2021, 00:41"),
    new Events("Schwanensee", "Vienna", 1010, "Vienna Oper, Opernring 2", "./img/event3.jpg", "12.05.2021", "20:00", "203 €", "07.11.2020, 09:08"),
    new Events("Zucchero", "Milano", 57391, "Stadium Theatre 2", "./img/event4.jpg", "14.08.2021", "19:00", "89 €", "18.10.2020, 12:37"),
];
for (var _b = 0, eventsArr_1 = eventsArr; _b < eventsArr_1.length; _b++) {
    var value = eventsArr_1[_b];
    document.querySelector("[data-meta=\"events-cards\"]").innerHTML += value.display();
}
/* SORTING FUNCTION for EVENTS*/
var sorting3 = document.querySelector("#sort");
sorting3.addEventListener("click", cardSort3);
var isAscending3 = true;
function cardSort3(e) {
    if (e.target.id == "sort") {
        /* remove old eventsArray */
        var events = document.getElementById("events-cards");
        events.innerHTML = "";
        isAscending3 = !isAscending3;
        /* sort eventsArray */
        eventsArr.sort(function (a, b) {
            if (isAscending) {
                return b.created - a.created;
            }
            else {
                return a.created - b.created;
            }
        });
    }
    ;
    /* create new sorted movieArray */
    for (var _i = 0, eventsArr_2 = eventsArr; _i < eventsArr_2.length; _i++) {
        var value = eventsArr_2[_i];
        document.querySelector("[data-meta=\"events-cards\"]").innerHTML += value.display();
    }
}
;
/* RANDOM DATE AND TIME FUNCTION */
function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
}
