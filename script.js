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
    function Locations(city, zip_code, address, image) {
        this.city = city;
        this.zip_code = zip_code;
        this.address = address;
        this.image = image;
    }
    Locations.prototype.display = function () {
        return "City: " + this.city + ", ZIP-code: " + this.zip_code + ", Address: " + this.address + ", Image: " + this.image;
    };
    return Locations;
}());
/* EXTENDOR RESTAURANT CLASS */
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, zip_code, address, image, tel_number, cuisine, web_address) {
        var _this = _super.call(this, city, zip_code, address, image) || this;
        _this.tel_number = tel_number;
        _this.cuisine = cuisine;
        _this.web_address = web_address;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return "Restaurant " + _super.prototype.display.call(this);
    };
    return Restaurant;
}(Locations));
/* EXTENDOR EVENTS CLASS */
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, zip_code, address, image, event_date, event_time, ticket_price) {
        var _this = _super.call(this, city, zip_code, address, image) || this;
        _this.event_date = event_date;
        _this.event_time = event_time;
        _this.ticket_price = ticket_price;
        return _this;
    }
    Events.prototype.display = function () {
        return "Events " + _super.prototype.display.call(this);
    };
    return Events;
}(Locations));
