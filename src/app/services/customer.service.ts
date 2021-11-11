import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class CustomerService {

 
    // private baseURL = 'http://localhost:3000/api/v1/customers';
    private baseURL = 'https://cd-news-backend.herokuapp.com/api/v1/customers';
    

    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json; charset=UTF-8'
       
      
    })
  }

  constructor(private httpClient: HttpClient)  { }




  
  readAll(): Observable<any> {
     
    return this.httpClient.get(this.baseURL, this.httpOptions);
  }

  create(data): Observable<any> {
    return this.httpClient.post(this.baseURL, data, this.httpOptions);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`, this.httpOptions);
  }

}
