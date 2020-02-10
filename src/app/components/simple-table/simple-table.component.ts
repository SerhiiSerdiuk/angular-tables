import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-simple-table",
  templateUrl: "./simple-table.component.html",
  styleUrls: ["./simple-table.component.css"]
})
export class SimpleTableComponent implements OnInit {
  public users: Array<Faker.UserCard>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }
}
