import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { ComplexTableComponent } from '../complex-table/complex-table.component';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-multi-table',
  templateUrl: './multi-table.component.html',
  styleUrls: ['./multi-table.component.scss']
})
export class MultiTableComponent implements OnInit {
  @ViewChildren(ComplexTableComponent) private complexTables: QueryList<
    ComplexTableComponent
  >;
  private tablesMap = new Map();

  public users$: Observable<Array<Faker.UserCard>>;
  public get tables() {
    return this.tablesMap.values();
  }

  constructor(
    private dataService: DataService,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    for (let i = 0; i < 1; i++) {
      this.tablesMap.set(i.toString(), {
        id: i.toString(),
        data$: this.dataService.getUsers(),
        displayFrom: 0,
        displayTo: 0
      });
    }
    this.scrollService.info$.subscribe(() => {
      this.updateView();
    });
    setTimeout(() => {
      this.updateView();
    });
  }

  private updateView(): void {
    const viewportHeight = window.innerHeight;
    this.complexTables.forEach(t => {
      const tableBodyElement = (t.el
        .nativeElement as HTMLElement).querySelector('tbody');
      const { from, to } = this.percentageInViewport(
        tableBodyElement,
        viewportHeight
      );
      const table = this.tablesMap.get(t.id);
      table.displayFrom = from;
      table.displayTo = to;
      this.tablesMap.set(table.id, table);
    });
  }

  private percentageInViewport(
    element: HTMLElement,
    viewportHeight: number
  ): { from: number; to: number } {
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top;
    const elementHeight = elementRect.height;
    let from = 0;
    let to = 100;

    if (elementTop > viewportHeight) {
      to = 0;
    } else if (-elementTop > elementHeight) {
      from = 100;
    } else {
      from = (-elementTop * 100) / elementHeight;
      to = ((viewportHeight - elementTop) * 100) / elementHeight;
    }

    return { from: from < 0 ? 0 : from, to: to > 100 ? 100 : to };
  }
}
