import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

const getFlagsUrl = '';
const addFlagsUrl = '';

@Injectable()
export class FlagSevice {

    constructor(private http: HttpClient) { }

    getALlFlags(latitude: number, longtite: number) {
        const position = {
            lat: latitude,
            long: longtite
        }
        return this.http.post(getFlagsUrl, position)
    }

    addNewFlag(flag: any) {
        return this.http.post(addFlagsUrl, flag)
    }

} 
