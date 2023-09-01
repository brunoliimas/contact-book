import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly API = 'http://localhost/api-contact-book/';
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient
      .get<Contact[]>(this.API, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .pipe(
        first(),
        delay(100),
        tap((contacts) => console.log(contacts))
      );
  }

  delete(id: number) {
    return this.httpClient
      .get(`${this.API}delete.php?id=${id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .subscribe();
  }
  save(contact: Contact) {
    return this.httpClient
      .post(
        `${this.API}insert.php`,
        { contact },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .subscribe();
  }
}
