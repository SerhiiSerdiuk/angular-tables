import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: "app-one-complex-table",
  templateUrl: "./one-complex-table.component.html",
  styleUrls: ["./one-complex-table.component.css"]
})
export class OneComplexTableComponent implements OnInit {
  public users$: Observable<Array<Faker.UserCard>>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users$ = this.dataService.getUsers();
  }
}
