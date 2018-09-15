import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

const getFlagsUrl = 'http://whereisthesea.apphb.com/api/flags';
const addFlagsUrl = 'http://whereisthesea.apphb.com/api/flags';

@Injectable()
export class FlagSevice {

    constructor(private http: HttpClient) { }

    getALlFlags() {
        return this.http.get(getFlagsUrl)
    }

    addNewFlag(flag: any) {
        return this.http.post(addFlagsUrl, flag)
    }

} 
