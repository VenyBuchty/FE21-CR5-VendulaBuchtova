
/* BASE CLASS LOCATIONS*/

class Locations {
    //I also added the parameter "name", even though it was not written in the assignment.
    name : string;
    city : string;
    zip_code : number;
    address : string;
    image : string;
    created : any;

    constructor (name: string, city: string, zip_code: number, address: string, image: string) {
        this.name = name;
        this.city = city;
        this.zip_code = zip_code;
        this.address = address;
        this.image = image;
        /* I decided to use randomDate function because I wanted to play with JS Date Object :-)*/
        this.created = (randomDate(new Date(2020, 0, 1), new Date(2021, 0, 3), 0, 24));
        
        }


    display() : string {
    let cardCreator : string = `<div class="col card-container">
                                    <div class="card" style="width: 18rem;">
                                        <img src="${this.image}" class="card-img-top" alt="..." style="object-fit: cover; height: 12rem;">
                                    <div class="card-body">
                                        <div class="d-flex flex-column justify-content-start">
                                            <h4 class="card-title text-center">${this.name}</h4>
                                        </div>
                                        <div class="d-flex flex-column">
                                                    <span class="badge color-badge"><i class="fas fa-map-marker-alt"></i> Address:</span>
                                                    <p class="card-text">${this.city}</p>
                                                    <p class="card-text">${this.zip_code}</p>
                                                    <p class="card-text">${this.address}</p>
                            `
    return cardCreator;
    }

    closeDiv(){
    return `                            <div class="card-footer text-center">
                                            <small class="fw-light">Created: ${this.created}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
    }
    
}

let locationsArr : Array <Locations> = [
    new Locations("Palmenhaus Schönbrunn", "Vienna", 1130, "Schönbrunner Schloßstraße 47", "./img/place1.jpg"),
    new Locations("Walt Disney Concert Hall", "Los Angeles", 90012, "111 S Grand Ave", "./img/place2.jpg"),
    new Locations("Museum Montanelli Bocelo","Praha", 11015, "Staroměstské nám. 1/12", "./img/place3.jpg"),
    new Locations("Parc zoologique de Paris", "Paris", 75012, " Avenue Daumesnil", "./img/place4.jpg"),
]

for (let value of locationsArr) {
    document.querySelector(`[data-meta="places-cards"]`).innerHTML += value.display() + value.closeDiv();
}





/* EXTENDOR RESTAURANT CLASS */

class Restaurant extends Locations {
    tel_number : number;
    cuisine : string;
    web_address : string;

    constructor (name: string, city: string, zip_code: number, address: string, image: string, tel_number: number, cuisine: string, web_address: string) {
        super(name, city, zip_code, address, image);
        this.tel_number = tel_number;
        this.cuisine = cuisine;
        this.web_address = web_address;
    }

    display() : string {
    let cardCreator : string = ` ${super.display()}
                                    <span class="badge color-badge"><i class="fas fa-phone"></i> Telephone:</span>
                                    <p class="card-text">${this.tel_number}</p>
                                    <span class="badge color-badge"><i class="fas fa-utensils"></i> Cuisine:</span>
                                    <p class="card-text">${this.cuisine}</p>
                                    <span class="badge color-badge"><i class="fas fa-globe"></i> Web page:</span>
                                    <p class="card-text"><a href="${this.web_address}">${this.web_address}</a></p>
                                    <div class="card-footer text-center">
                                            <small class="fw-light">Created: ${this.created}</small>
                                    </div>
                                </div>       
                            </div>
                        </div>`
    return cardCreator;
    }

}

let restaurantArr : Array <Restaurant> = [
    new Restaurant("Osteria Francescana", "Modena", 41121, "Via Stella, 22", "./img/res1.jpg", 660834234, "italian", "https://osteriafrancescana.it"),
    new Restaurant("El Celler de Roca", "Girona", 17007, "Carrer de Can Sunyer, 48", "./img/res2.jpg", 4354363463, "spanish", "https://cellercanroca.com"),
    new Restaurant("Mirazur", "Menton", 6500, "30 Avenue Aristide Briand", "./img/res3.jpg", 823395432, "oriental", "https://www.mirazur.fr"),
    new Restaurant("The Ledbury", "Nothing Hill, London", 1120, "127 Ledbury Rd", "./img/res4.jpg", 233358102, "rustical", "http://www.theledbury.com"),
]

for (let value of restaurantArr) {
    document.querySelector(`[data-meta="restaurant-cards"]`).innerHTML += value.display();


}



/* EXTENDOR EVENTS CLASS */

class Events extends Locations {
    event_date : string;
    event_time : string;
    ticket_price : string;

    constructor (name: string, city: string, zip_code: number, address: string, image: string,event_date: string, event_time: string, ticket_price: string) {
        super(name, city, zip_code, address, image);
        this.event_date = event_date;
        this.event_time = event_time;
        this.ticket_price = ticket_price;
    }

    display() : string {
    let cardCreator : string = ` ${super.display()}
                                    <span class="badge color-badge"><i class="fas fa-calendar-week"></i> Event Date:</span>
                                    <p class="card-text">${this.event_date}</p>
                                    <p class="card-text">${this.event_time}</p>
                                    <span class="badge color-badge"><i class="fas fa-euro-sign"></i> Price:</span>
                                    <p class="card-text">${this.ticket_price}</p>
                                    <div class="card-footer text-center">
                                            <small class="fw-light">Created: ${this.created}</small>
                                    </div>
                                </div>       
                            </div>
                        </div>`
    return cardCreator;
    }

}

let eventsArr : Array <Events> = [
    new Events("DJ TemeraF", "Belfort", 14424, "Club DiAziO, Eurockeennes 173", "./img/event1.jpg", "01.07.2021", "21:00", "120 €"),
    new Events("Spring Food Festival", "Budapest", 1093, "Vámház krt. 1-3", "./img/event2.jpg", "04.04.2021", "09:00", "3 €"),
    new Events("Schwanensee", "Vienna", 1010, "Vienna Oper, Opernring 2", "./img/event3.jpg", "12.05.2021", "20:00", "203 €"),
    new Events("Zucchero", "Milano", 57391, "Stadium Theatre 2", "./img/event4.jpg", "14.08.2021", "19:00", "89 €"),
]

for (let value of eventsArr) {
    document.querySelector(`[data-meta="events-cards"]`).innerHTML += value.display();
}






/* SORTING FUNCTIONS */


let sorting_places = document.querySelector("#sort_places")
sorting_places.addEventListener("click", cardSortHandler);

let sorting_restaurants = document.querySelector("#sort_restaurants")
sorting_restaurants.addEventListener("click", cardSortHandler);

let sorting_events = document.querySelector("#sort_events")
sorting_events.addEventListener("click", cardSortHandler);


let isAscending = true;



function cardSortHandler (e){
    if(e.target.id == ("sort_places")) {
        let places = document.getElementById("places-cards")
        places.innerHTML =""
        sortCards(locationsArr);
        for (let value of locationsArr) {
        document.querySelector(`[data-meta="places-cards"]`).innerHTML += value.display() + value.closeDiv();
    }
    }
    if(e.target.id == ("sort_restaurants")) {
        let restaurants = document.getElementById("restaurant-cards")
        restaurants.innerHTML ="" 
        sortCards(restaurantArr);
        for (let value of restaurantArr) {
        document.querySelector(`[data-meta="restaurant-cards"]`).innerHTML += value.display();
        }
    }
    if(e.target.id == ("sort_events")) {
        let events = document.getElementById("events-cards")
        events.innerHTML ="" 
        sortCards(eventsArr);
        for (let value of eventsArr) {
        document.querySelector(`[data-meta="events-cards"]`).innerHTML += value.display();
        }
    }
    

};

//I wasn't sure, which type should be Array, because I am using three different.
function sortCards (arrayOfCards : Array <any>){
    isAscending = !isAscending;
        arrayOfCards.sort((a , b ) => {
        if (isAscending) {
            return b.created - a.created;
        } else {
            return a.created - b.created;
        }
        })
}




/* RANDOM DATE AND TIME FUNCTION */

// I wasn't sure, which type should be "start" and "end". I tryied "Date" or "Number" but it wasn't accepted. 
function randomDate(start : any, end : any, startHour : number, endHour : number) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
}


