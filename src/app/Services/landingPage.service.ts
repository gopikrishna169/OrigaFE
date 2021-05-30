import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { UserData } from "../Interfaces/UserData.interface";

@Injectable()
export class LandingPageService {
    constructor(private http: HttpClient) { }
    fetchData(): Observable<UserData[]> {
        return this.http.get<UserData[]>('https://jsonplaceholder.typicode.com/users');
    }
}