import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class CustomerService {


  private baseURL = 'https://treehousechallenge.contractornation.com/newsletter';
    //  private baseURL = 'http://localhost:3000/api/v1/customers/';
  


  httpOptions = {
    headers: new HttpHeaders({
       Authorization: 'c1c36db0-1bdf-11ec-bc70-3ba4acafe2c5'
       
      
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
