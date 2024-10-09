import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishItem } from '../../shared/models/WishItem';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class WishService {
  constructor(private httpClient: HttpClient) {}

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      }),
    };
  }

  getWishes() {
    let options = this.getStandardOptions();
    //return this.httpClient.get('assets/wishes.json', options);
    return this.httpClient
      .get('https://mocki.io/v1/30456056-5f68-4567-9932-d254c10e2a4b', options)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with client/network', error.error);
    } else {
      console.error('Service side error : ', error.error);
    }
    return throwError(() => new Error('Something went wrong, Please try again'));
  }

  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'value-token');
    //this.httpClient.post()
  }
}
