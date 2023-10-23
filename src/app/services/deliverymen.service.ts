import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_FAST } from 'app/app.api';
import { DeliveryMan } from 'app/models/deliveryman.model';
import { Observable } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class DeliveryManService {

  constructor(private http: HttpClient) { }

  saveDeliveryman(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(`${API_FAST}/new-deliveryman`, formData);
  }
}
