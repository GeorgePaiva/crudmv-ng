import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Profissional } from 'src/model/profissional';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:8080/profissionais';


@Injectable({
  providedIn: 'root'
})
export class ApiProf {

  constructor(private http: HttpClient) { }

  getProfissionais(): Observable<Profissional[]> {
    return this.http.get<Profissional[]>(apiUrl)
      .pipe(
        tap(profissionais => console.log('leu os profissionais')),
        catchError(this.handleError(' getProfissionais', []))
      );
  }

  getProfissional(id: number): Observable<Profissional> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Profissional>(url).pipe(
      tap(_ => console.log(`leu o profissional id=${id}`)),
      catchError(this.handleError<Profissional>(`getProfissional id=${id}`))
    );
  }

  addProfissional(profissional): Observable<Profissional> {
    return this.http.post<Profissional>(apiUrl, profissional, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((profissional: Profissional) => console.log(`adicionou o profissional com w/ id=${profissional._id}`)),
      catchError(this.handleError<Profissional>('addProfissional'))
    );
  }

  updateProfissional(id, profissional): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, profissional, httpOptions).pipe(
      tap(_ => console.log(`atualiza o profissional com id=${id}`)),
      catchError(this.handleError<any>('updateProfissional'))
    );
  }

  deleteProfissional(id): Observable<Profissional> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<Profissional>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o profissional com id=${id}`)),
      catchError(this.handleError<Profissional>('deleteProfissional'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
