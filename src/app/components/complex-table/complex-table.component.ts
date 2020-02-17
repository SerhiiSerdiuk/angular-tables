import { Component, OnInit, ElementRef, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-complex-table',
  templateUrl: './complex-table.component.html',
  styleUrls: ['./complex-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComplexTableComponent implements OnInit, OnChanges {
  @Input() public users: Array<Faker.UserCard & { index: number }>;
  @Input() public id: string;
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
    this.updateDisplayedRows(this.displayFrom, this.displayTo);
  }

  ngOnChanges() {
    this.updateDisplayedRows(this.displayFrom, this.displayTo);
  }

  public updateDisplayedRows(from: number, to: number): void {
    let firstIndex = Math.floor((this.users.length * from) / 100);
    let lastIndex = Math.ceil((this.users.length * to) / 100);

    if (from !== to) {
      const SPAN_ROWS = 6;
      firstIndex = firstIndex >= SPAN_ROWS ? firstIndex - SPAN_ROWS : 0;
      lastIndex = lastIndex + SPAN_ROWS >= this.users.length ? this.users.length : lastIndex + SPAN_ROWS;
    }

    this.hideUsersBefore = firstIndex;
    this.hideUsersAfter = this.users.length - lastIndex;
    this.displayUsers = this.users.slice(firstIndex, lastIndex);
  }
}
