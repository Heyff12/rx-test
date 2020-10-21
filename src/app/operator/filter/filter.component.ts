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
import {
  debounce,
  debounceTime,
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  elementAt,
  every,
  groupBy,
  flatMap,
} from 'rxjs/operators';

interface Person {
  age: number;
  name: string;
}

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
    const result = clicks.pipe(debounce(() => interval(1000)));
    result.subscribe((x) => console.log(x));
  }

  debounceTimeDemo(): void {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(debounceTime(1000));
    result.subscribe((x) => console.log(x));
  }

  distinctDemo(): void {
    of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
      .pipe(distinct())
      .subscribe((x) => console.log(x)); // 1, 2, 3, 4

    of<Person>(
      { age: 4, name: 'Foo' },
      { age: 7, name: 'Bar' },
      { age: 5, name: 'Foo' }
    )
      .pipe(distinct((p: Person) => p.name))
      .subscribe((x) => console.log(x));
  }

  distinctUntilChangedDemo(): void {
    of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
      .pipe(distinctUntilChanged())
      .subscribe((x) => console.log(x)); // 1, 2, 1, 2, 3, 4

    of<Person>(
      { age: 4, name: 'Foo' },
      { age: 7, name: 'Bar' },
      { age: 5, name: 'Foo' },
      { age: 6, name: 'Foo' }
    )
      .pipe(distinctUntilChanged((p: Person, q: Person) => p.name === q.name))
      .subscribe((x) => console.log(x));
  }

  distinctUntilKeyChangedDemo(): void {
    of<Person>(
      { age: 4, name: 'Foo' },
      { age: 7, name: 'Bar' },
      { age: 5, name: 'Foo' },
      { age: 6, name: 'Foo' }
    )
      .pipe(distinctUntilKeyChanged('name'))
      .subscribe((x) => console.log(x));
  }

  elementAtDemo(): void {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(elementAt(2));
    result.subscribe((x) => console.log(x));
  }

  everyDemo(): void {
    of(1, 2, 3, 4, 5, 6)
      .pipe(every((x) => x < 5))
      .subscribe((x) => console.log(x)); // -> false
  }

  groupByDemo(): void {
    of(
      { id: 1, name: 'aze1' },
      { id: 2, name: 'sf2' },
      { id: 2, name: 'dg2' },
      { id: 1, name: 'erg1' },
      { id: 1, name: 'df1' },
      { id: 2, name: 'sfqfb2' },
      { id: 3, name: 'qfs3' },
      { id: 2, name: 'qsgqsfg2' },
      { id: 4, name: 'qsgqsfg2' }
    )
      .pipe(
        groupBy((p) => p.id)
        // flatMap((group$) => group$.reduce((acc, cur) => [...acc, cur], []))
      )
      .subscribe((p) => console.log(p));
  }
}
