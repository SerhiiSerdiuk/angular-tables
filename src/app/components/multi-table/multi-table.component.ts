import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Observable } from 'rxjs';

@Component({
  selector: "app-multi-table",
  templateUrl: "./multi-table.component.html",
  styleUrls: ["./multi-table.component.css"]
})
export class MultiTableComponent implements OnInit {
  public users$: Observable<Array<Faker.UserCard>>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users$ = this.dataService.getUsers();
  }
}
