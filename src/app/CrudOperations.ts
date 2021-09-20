import { Observable } from "rxjs";

export interface CrudOperations<T,ID>{
    get(endpoint:string):Observable<T[]>;
    post(endpoint:string,payload:T):Observable<T>;
    getById(endpoint:string,id:ID):Observable<T>;
    delete(endpoint:string,id:ID):Observable<T>;
}