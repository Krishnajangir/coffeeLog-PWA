import { PlaceLocation } from "./PlaceLocation";
import { TestingRating } from "./TestingRating";

export class Coffee {
    //prop
    type: string = '';
    rating: number = 0;
    notes: string = "";
    testingRating: TestingRating | null;

    constructor(public _id: string = "", public name: string = "",
        public place: string = "",
        public location: PlaceLocation | null = null,
    ) {
     this.testingRating = new TestingRating();
     if(!location) {
        this.location = new PlaceLocation();
     }
    }
}