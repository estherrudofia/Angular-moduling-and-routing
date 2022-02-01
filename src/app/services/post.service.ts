import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

    url:string = "http://localhost:3000";
    postUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.url}/kettles`)
  }

  create (body: any) {
    return this.http.post(this.postUrl, {
      body: body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }});
  }

  update() {

  }

  remove() {

  }

}
