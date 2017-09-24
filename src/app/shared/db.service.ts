import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Calendar } from './models/calendar';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DbService {
     constructor (private http: Http) {}
     private calendarsUrl = 'http://localhost:3000/';
     
     getList() : Observable<Calendar[]>{
         return this.http.get(this.calendarsUrl)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw('Server error'));
        
     }

    addCalendar (body: Object): Observable<Calendar[]> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.calendarsUrl, body, options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }   

    updateCalendar (body: Object): Observable<Calendar[]> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(`${this.calendarsUrl}/${body['id']}`, body, options)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }   

    removeCalendar (id:string): Observable<Calendar[]> {
        return this.http.delete(`${this.calendarsUrl}/${id}`)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }   
}