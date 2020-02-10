import { Injectable } from "@angular/core";
import * as faker from "faker";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private _users: Array<Faker.UserCard> = [];

  constructor() {
    for (let i = 0; i < 2000; i++) {
      this._users.push(faker.helpers.userCard());
    }
  }

  public getUsers(): Array<Faker.UserCard> {
    return this._users;
  }
}
