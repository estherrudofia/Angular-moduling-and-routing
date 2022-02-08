import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

    url:string = "http://localhost:3000";
    postUrl: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.url}/kettles`);
  }

  getPost() {
    return this.http.get(`${this.postUrl}/comments`);
  }

  create (body: any) {
    return this.http.post(`${this.postUrl}/posts`, {        
      body: body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }});
  }

  update(body: any) {
    console.log(body);
    
    return this.http.put(`${this.postUrl}/comments/1`, body);
  }

  remove() {
    return this.http.delete(`${this.postUrl}/comments/1`);
  }

}
