import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CrudOperations } from './CrudOperations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService<T,ID> implements CrudOperations<T,ID>{

  constructor(public http:HttpClient) { }

  // get():Observable<T[]>;
  //   post(payload:T):Observable<T>;
  //   getById(id:ID):Observable<T>

  
  get(endpoint:string):Observable<T[]>{
    return this.http.get<T[]>(endpoint);
  }

  post(endpoint:string,payload:T):Observable<T>{
    return this.http.post<T>(endpoint,payload);
  }

  getById(endpoint:string,id:ID):Observable<T>{
    return this.http.get<T>(`${endpoint}/${id}`);
  }

  delete(endpoint:string,id:ID):Observable<T>{
    return this.http.delete<T>(`${endpoint}/${id}`);
  }
}
