import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class AdminService {

   private apiUrl = `${environment.apiUrl}/api/admin`;

  constructor(private http: HttpClient) {}

  obterDashboard(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dashboard`);
  }

  listarUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuarios`);
  }

  listarContas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contas`);
  }

  listarTransacoes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/transacoes`);
  }
}
