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
import { takeUntil, defaultIfEmpty, take } from 'rxjs/operators';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.less'],
})
export class BooleanComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  defaultIfEmptyDemo(): void {
    const clicks = fromEvent(document, 'click');
    const clicksBeforeFive = clicks.pipe(takeUntil(interval(5000)));
    const result = clicksBeforeFive.pipe(defaultIfEmpty('no clicks'));
    clicksBeforeFive.subscribe((x) => console.log(x));
  }
}
