import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  ChangeDetectorRef
} from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-progressive-rendered-table',
  templateUrl: './progressive-rendered-table.component.html',
  styleUrls: ['./progressive-rendered-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressiveRenderedTableComponent implements OnInit {
  @ViewChild('itemsContainer', { read: ViewContainerRef })
  container: ViewContainerRef;
  @ViewChild('item', { read: TemplateRef }) template: TemplateRef<any>;

  constructor(
    private dataService: DataService,
    private changeDetector: ChangeDetectorRef
  ) {}

  /*
   ** https://blog.bitsrc.io/3-ways-to-render-large-lists-in-angular-9f4dcb9b65
   */
  private buildData(users: Array<Faker.UserCard>) {
    const ITEMS_RENDERED_AT_ONCE = 50;
    const INTERVAL_IN_MS = 10;

    let currentIndex = 0;

    const interval = setInterval(() => {
      const nextIndex = currentIndex + ITEMS_RENDERED_AT_ONCE;

      for (let n = currentIndex; n <= nextIndex; n++) {
        if (n >= users.length) {
          clearInterval(interval);
          break;
        }
        const context = {
          user: users[n],
          index: n,
          isOdd: n % 2 !== 0
        };

        this.container.createEmbeddedView(this.template, context);
      }

      this.changeDetector.markForCheck();
      currentIndex += ITEMS_RENDERED_AT_ONCE;
    }, INTERVAL_IN_MS);
  }

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => {
      this.buildData(users);
    });
  }
}
