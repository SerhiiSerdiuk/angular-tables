import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { Observable, of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _users: Array<Faker.UserCard> = [];

  constructor() {
    for (let i = 0; i < 2000; i++) {
      this._users.push(faker.helpers.userCard());
    }
  }

  public getUsers(): Observable<Array<Faker.UserCard>> {
    return of(this._users).pipe(shareReplay());
  }
}
