import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Profissional } from 'src/app/model/profissional';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:5000/api/profissional';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

}
