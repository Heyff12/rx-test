import { Component, OnInit } from '@angular/core';
import {
  interval,
  timer,
  combineLatest,
  range,
  concat,
  Observable,
  fromEvent,
  defer,
  empty,
  of,
  from,
  bindCallback,
  merge,
  zip,
} from 'rxjs';
import { delay, delayWhen, map } from 'rxjs/operators';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.less'],
})
export class ToolsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  delayDemo(): void {
    const clicks = fromEvent(document, 'click');
    const delayedClicks = clicks.pipe(delay(1000));
    delayedClicks.subscribe((x) => console.log(x));
  }
  delayWhenDemo(): void {
    const clicks = fromEvent(document, 'click');
    const delayedClicks = clicks.pipe(
      delayWhen((event) => {
        const a = Math.random() * 5000;
        console.log(a);
        return interval(a);
      })
    );
    delayedClicks.subscribe((x) => console.log(x));
  }

  doDemo(): void {
    const clicks = fromEvent(document, 'click');
    // const positions = clicks.pipe(
    //   dob((ev) => console.log(ev)),
    //   map((ev) => ev.clientX)
    // );
    // positions.subscribe((x) => console.log(x));
  }
}
