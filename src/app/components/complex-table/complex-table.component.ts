import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Observable } from 'rxjs';

@Component({
  selector: "app-complex-table",
  templateUrl: "./complex-table.component.html",
  styleUrls: ["./complex-table.component.css"]
})
export class ComplexTableComponent implements OnInit {
  public users$: Observable<Array<Faker.UserCard>>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users$ = this.dataService.getUsers();
  }
}
