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
import { mergeMap, startWith, take } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  debounceDemo(): void {
    const clicks = fromEvent(document, 'click');
    // const result = clicks.debounce(() => interval(1000));
    // result.subscribe((x) => console.log(x));
  }
}
