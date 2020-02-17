import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {
  public users$: Observable<Array<Faker.UserCard>>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users$ = this.dataService.getUsers();
  }
}
