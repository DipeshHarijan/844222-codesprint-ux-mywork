import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl:string;

  constructor(private httpClient:HttpClient) {
    this.baseUrl="http://localhost:4444/appointment";
   }

   getAll():Observable<Appointment[]>{
     return this.httpClient.get<Appointment[]>(this.baseUrl);
   }

   getBySno(sno:number):Observable<Appointment>{
     return this.httpClient.get<Appointment>(`${this.baseUrl}/${sno}`);
   }

   add(trainee:Appointment): Observable<Appointment>{
     return this.httpClient.post<Appointment>(this.baseUrl,trainee);
   }

   save(trainee:Appointment): Observable<Appointment>{
     return this.httpClient.put<Appointment>(this.baseUrl,trainee);
   }

   deleteBySno(sno:number): Observable<void>{
     return this.httpClient.delete<void>(`${this.baseUrl}/${sno}`);
   }
}
