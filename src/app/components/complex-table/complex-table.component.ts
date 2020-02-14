import { Component, OnInit, ElementRef, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-complex-table",
  templateUrl: "./complex-table.component.html",
  styleUrls: ["./complex-table.component.css"]
})
export class ComplexTableComponent implements OnInit {
  @Input() public users: Array<Faker.UserCard & { index: number }>;
  @Input() public displayFrom = 0;
  @Input() public displayTo = 100;

  public displayUsers: Array<Faker.UserCard & { index: number }>;
  public hideUsersBefore: number;
  public hideUsersAfter: number;

  constructor(public el: ElementRef) {}

  ngOnInit() {
    this.users.map((user, i) => {
      user.index = i + 1;
      return user;
    });
    this.display(this.displayFrom, this.displayTo);
  }

  public display(from: number, to: number): void {
    const firstIndex = Math.floor((this.users.length * from) / 100);
    const lastIndex = Math.ceil((this.users.length * to) / 100);
    this.hideUsersBefore = firstIndex;
    this.hideUsersAfter = this.users.length - lastIndex;
    this.displayUsers = this.users.slice(firstIndex, lastIndex);
  }
}
