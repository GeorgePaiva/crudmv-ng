import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Estabelecimento } from 'src/model/estabelecimento';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:8080/estabelecimentos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEstabelecimentos(): Observable<Estabelecimento[]> {
    return this.http.get<Estabelecimento[]>(apiUrl)
      .pipe(
        tap(profissionais => console.log('leu os estabelecimentos')),
        catchError(this.handleError(' getEstabelecimentos', []))
      );
  }

  getEstabelecimento(id: number): Observable<Estabelecimento> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Estabelecimento>(url).pipe(
      tap(_ => console.log(`leu o estabelecimento id=${id}`)),
      catchError(this.handleError<Estabelecimento>(`getEstabelecimento id=${id}`))
    );
  }

  addEstabelecimento(estabelecimento): Observable<Estabelecimento> {
    return this.http.post<Estabelecimento>(apiUrl, estabelecimento, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((estabelecimento: Estabelecimento) => console.log(`adicionou o estabelecimento com w/ id=${estabelecimento._id}`)),
      catchError(this.handleError<Estabelecimento>('addEstabelecimento'))
    );
  }

  updateEstabelecimento(id, estabelecimento): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, estabelecimento, httpOptions).pipe(
      tap(_ => console.log(`atualiza o estabelecimento com id=${id}`)),
      catchError(this.handleError<any>('updateEstabelecimento'))
    );
  }

  deleteEstabelecimento(id): Observable<Estabelecimento> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<Estabelecimento>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o estabelecimento com id=${id}`)),
      catchError(this.handleError<Estabelecimento>('deleteEstabelecimento'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}

