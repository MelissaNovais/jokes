import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "https://official-joke-api.appspot.com/jokes/programming/random";

  constructor(public http: HttpClient) { }

  async getRandomJoke(){
    const response =  await this.http.get(this.url).toPromise();
    console.log(response);
    return response; 
  }
}
