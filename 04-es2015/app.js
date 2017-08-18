
//LET
let favoriteCityId = 'rome';
console.log(favoriteCityId);

favoriteCityId = 'paris';
console.log(favoriteCityId);

//CONST
const citiesId = ['paris', 'nyc', 'rome', 'rio de janeiro'];
console.log(citiesId);

citiesId.push('tokio');
console.log(citiesId);

//CREATION DUN OBJECT
function getWeather (cityId){
    
    let city = cityId.toUpperCase();
    let temperature = 20;

    return {city, temperature};
}

const weather = getWeather (favoriteCityId);
console.log(weather);

//Affectation destructurée
const {city, temperature}=weather;
console.log(city);
console.log(temperature);

//REST OPERATOR

const [parisId, nycId, ...otherCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(otherCitiesId.length);

//Classe
class Trip{
   constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl=imageUrl;
    } 

    toString(){
       console.log('Trip ['+this.id+', '+this.name+ ', ' + this.imageUrl+', '+this.price+"]");
    }

    get price(){
         return this._price;
    }

    set price(newprice){
        this._price=newprice;
    }

    static getDefaultTrip(){
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'rio-de-janeiro.jpg')
    }
    
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);

parisTrip.toString();

parisTrip.price=100;
parisTrip.toString();

const defaultTrip = Trip.getDefaultTrip();
defaultTrip.toString();

//Heritage
class FreeTrip extends Trip{
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.price = 0;
    }

     toString(){
       console.log('Free Trip ['+this.id+', '+this.name+ ', ' + this.imageUrl+', '+this.price+"]");
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nanges.jpg')
freeTrip.toString();

//Promise, set, map, arrow function
class TripService {
    constructor() {
       
        // Set of 3 trips
         this.trips= [new Trip('paris', 'Paris', 'img/paris.jpg'), new Trip('nantes', 'Nantes', 'img/nanges.jpg'), new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')];
       
    }
    findByName(tripName){
        // return promise
        return new Promise((resolve, reject)=>{
            setTimeout(()=> {

                // rechercher le trip qui a le nom tripName
                let filt = this.trips.find((tripElement) => {
                    return tripElement.name === tripName;
                });

                if(filt) {
                    resolve(filt);
                } else {
                    reject(`No trip with name ${tripName}`)
                }

        
            }, 2000);
        })
    }
}



class PriceService {
    constructor() {
    // Map of 2 trips
    this.trips = new Map();
    this.trips.set('paris', 100 )
    this.trips.set('rio-de-janeiro', 800 )
    // no price for 'nantes'
    }


findPriceByTripId(tripId){
        // return promise
        return new Promise((resolve, reject)=>{
            setTimeout(()=> {

                // rechercher le trip qui a le nom tripName
               let tr = this.trips.get(tripId);
                if(tr) {
                    resolve(tr);
                } else {
                    reject(`No price found for id ${tripId}`)
                }
            }, 2000);
        })
    }

}

let trser = new TripService();
let prser = new PriceService();

trser.findByName('Nantes').then(result => {
    console.log("resultat", result);
})

prser.findPriceByTripId('paris').then(result => {
    console.log("resultat", result);
})

prser.findPriceByTripId('toulouse').then(result => {
    console.log("resultat", result);
})



trser.findByName('Nantes')
.then(result => {
    return result.id;
})
.then((id)=>{
   new PriceService().findPriceByTripId(id).then(result => {
    console.log("resultat", result);
        })
})