/* BASE CLASS */

class Locations {
    city;
    zip_code;
    address;
    image;

    constructor (city: string, zip_code: number, address: string, image: string) {
        this.city = city;
        this.zip_code = zip_code;
        this.address = address;
        this.image = image;
        }

    display():string {
        return `City: ${this.city}, ZIP-code: ${this.zip_code}, Address: ${this.address}, Image: ${this.image}`
    }
    
}

/* EXTENDOR RESTAURANT CLASS */

class Restaurant extends Locations {
    tel_number;
    cuisine;
    web_address;

    constructor (city: string, zip_code: number, address: string, image: string, tel_number: number, cuisine: string, web_address: string) {
        super(city, zip_code, address, image);
        this.tel_number = tel_number;
        this.cuisine = cuisine;
        this.web_address = web_address;
    }

    display():string {
        return `Restaurant ${super.display()}`;
    }
}

/* EXTENDOR EVENTS CLASS */

class Events extends Locations {
    event_date;
    event_time;
    ticket_price;

    constructor (city: string, zip_code: number, address: string, image: string, event_date: string, event_time: number, ticket_price: string) {
        super(city, zip_code, address, image);
        this.event_date = event_date;
        this.event_time = event_time;
        this.ticket_price = ticket_price;
    }

    display():string {
        return `Events ${super.display()}`;
    }
}
