import { Injectable, OnDestroy, NgZone } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ScrollService implements OnDestroy {
  private _info: Subject<void> = new Subject();
  public info$ = this._info.asObservable();

  private eventOptions: boolean | { capture?: boolean; passive?: boolean };
  private alreadyTested = false;
  private passiveSupported = false;

  constructor(private ngZone: NgZone) {
    this.isPassiveSupported();
    this.init();
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

  private init() {
    if (this.passiveSupported) {
      this.eventOptions = {
        capture: true,
        passive: true
      };
    } else {
      this.eventOptions = true;
    }
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener(
        "scroll",
        this.scroll.bind(this),
        this.eventOptions
      );
    });
  }

  private scroll(): void {
    if (true) {
      this.ngZone.run(() => {
        this._info.next();
      });
    }
  }

  ngOnDestroy() {
    window.removeEventListener(
      "scroll",
      this.scroll.bind(this),
      this.eventOptions
    );
  }
}
