import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { delay, first, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly API = '/assets/contacts.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Contact[]>(this.API).pipe(
      first(),
      delay(500),
      tap((contacts) => console.log(contacts))
    );
  }
}
