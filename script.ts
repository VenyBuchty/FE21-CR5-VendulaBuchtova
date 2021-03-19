/* BASE CLASS */

class Locations {
    name;
    city;
    zip_code;
    address;
    image;
    created;

    constructor (name: string, city: string, zip_code: number, address: string, image: string, created: string) {
        this.name = name;
        this.city = city;
        this.zip_code = zip_code;
        this.address = address;
        this.image = image;
        this.created = created;
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
    new Locations("Palmenhaus Schönbrunn", "Vienna", 1130, "Schönbrunner Schloßstraße 47", "./img/place1.jpg", "03.11.2020, 12:23"),
    new Locations("Walt Disney Concert Hall", "Los Angeles", 90012, "111 S Grand Ave", "./img/place2.jpg", "15.12.2020, 20:42"),
    new Locations("Museum Montanelli Bocelo","Praha", 11015, "Staroměstské nám. 1/12", "./img/place3.jpg", "08.09.2020, 08:35"),
    new Locations("Parc zoologique de Paris", "Paris", 75012, " Avenue Daumesnil", "./img/place4.jpg", "24.10.2020, 10:15"),
]

for (let value of locationsArr) {
    document.querySelector(`[data-meta="places-cards"]`).innerHTML += value.display() + value.closeDiv();
}





/* EXTENDOR RESTAURANT CLASS */

class Restaurant extends Locations {
    tel_number;
    cuisine;
    web_address;

    constructor (name: string, city: string, zip_code: number, address: string, image: string, tel_number: number, cuisine: string, web_address: string, created: string) {
        super(name, city, zip_code, address, image, created);
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
                                    <p class="card-text">${this.web_address}</p>
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
    new Restaurant("Osteria Francescana", "Modena", 41121, "Via Stella, 22", "./img/res1.jpg", 660834234, "american", "osterFrances@gmail.com", "29.10.2020, 07:12"),
    new Restaurant("El Celler de Roca", "Girona", 17007, "Carrer de Can Sunyer, 48", "./img/res2.jpg", 4354363463, "spanish", "cellerRoca@gmail.com", "18.09.2020, 11:47"),
    new Restaurant("Mirazur", "Menton", 6500, "30 Avenue Aristide Briand", "./img/res3.jpg", 823395432, "oriental", "mirazur@mail.com", "02.08.2020, 18:29"),
    new Restaurant("The Ledbury", "Nothing Hill, London", 1120, "127 Ledbury Rd", "./img/res4.jpg", 233358102, "rustical", "ledBurys@mail.com", "13.02.2021, 15:02"),
]

for (let value of restaurantArr) {
    document.querySelector(`[data-meta="restaurant-cards"]`).innerHTML += value.display();


}

/* EXTENDOR EVENTS CLASS */

class Events extends Locations {
    event_date;
    event_time;
    ticket_price;

    constructor (name: string, city: string, zip_code: number, address: string, image: string,event_date: string, event_time: string, ticket_price: string, created: string) {
        super(name, city, zip_code, address, image, created);
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
    new Events("DJ TemeraF", "Belfort", 14424, "Club DiAziO, Eurockeennes 173", "./img/event1.jpg", "01.07.2021", "21:00", "120 €", "09.01.2021, 14:10"),
    new Events("Spring Food Festival", "Budapest", 1093, "Vámház krt. 1-3", "./img/event2.jpg", "04.04.2021", "09:00", "3 €", "20.02.2021, 00:41"),
    new Events("Schwanensee", "Vienna", 1010, "Vienna Oper, Opernring 2", "./img/event3.jpg", "12.05.2021", "20:00", "203 €", "07.11.2020, 09:08"),
    new Events("Zucchero", "Milano", 57391, "Stadium Theatre 2", "./img/event4.jpg", "14.08.2021", "19:00", "89 €", "18.10.2020, 12:37"),
]

for (let value of eventsArr) {
    document.querySelector(`[data-meta="events-cards"]`).innerHTML += value.display();
}


