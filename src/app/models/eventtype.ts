import { Time } from "@angular/common";

export interface eventtype {
    id?: number;
    topic: string;
    date: Date;
    speaker: string;
    place: string;
    timedetails: {
        start: String;
        end: String;
    };
    photo: string;
    description:string
}