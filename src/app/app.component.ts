import { Component, OnInit, OnDestroy, NgZone } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  private eventOptions: boolean | { capture?: boolean; passive?: boolean };
  private alreadyTested = false;
  private passiveSupported = false;

  constructor(private ngZone: NgZone) {
    this.isPassiveSupported();
  }

  private isPassiveSupported() {
    if (this.alreadyTested) {
      return this.passiveSupported;
    } else {
      this.alreadyTested = true;

      // Test via a getter in the options object to see if the passive property is accessed
      try {
        const opts = Object.defineProperty({}, "passive", {
          get() {
            this.passiveSupported = true;
          }
        });
        window.addEventListener("test", null, opts);
      } catch (e) {}
      return this.passiveSupported;
    }
  }

  ngOnInit() {
    if (this.passiveSupported) {
      this.eventOptions = {
        capture: true,
        passive: true
      };
    } else {
      this.eventOptions = true;
    }
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener("scroll", this.scroll.bind(this), this.eventOptions);
    });
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.scroll.bind(this), this.eventOptions);
  }

  scroll(): void {
    if (true) {
      this.ngZone.run(() => {
        console.log(window.scrollY);
      });
    }
  }
}
