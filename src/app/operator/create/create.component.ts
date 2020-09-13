import { Component, OnInit, OnDestroy } from '@angular/core';
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
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
})
export class CreateComponent implements OnInit, OnDestroy {
  intervalObservable: any;
  constructor() {}

  ngOnInit(): void {
    // this.intervalDemo()
    // this.combineLatest();
    // this.concatDemo();
    // this.createDemo();
    // this.debounceDemo();
  }

  intervalDemo(): void {
    const numbers = interval(1000);
    this.intervalObservable = numbers.subscribe((x) => console.log(x));
  }

  bindCallbackDemo(): void {
    let someFunction = (a, b, c) => {
      console.log(a); // 5
      console.log(b); // 'some string'
      console.log(c); // {someProperty: 'someValue'}
    };

    const boundSomeFunction = bindCallback(someFunction);
    boundSomeFunction(5, 'some string', {
      someProperty: 'someValue',
    }).subscribe((values) => {
      console.log(values); // [5, 'some string', {someProperty: 'someValue'}]
    });
  }

  createDemo(): void {
    const observable = Observable.create((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });
    observable.subscribe(
      (value) => console.log(value),
      (err) => {},
      () => console.log('this is the end')
    );
  }

  deferDemo(): void {
    const clicksOrInterval = defer(() => {
      if (Math.random() > 0.5) {
        return fromEvent(document, 'click');
      } else {
        return interval(1000);
      }
    });
    clicksOrInterval.subscribe((x) => console.log(x));
  }

  ofDemo(): void {
    const numbers = of(10, 20, 30);
    const letters = of('a', 'b', 'c');
    const intervalO = interval(1000);
    // const result = numbers.pipe(concat(letters), concat(intervalO));
    const result = concat(numbers, letters, intervalO);
    result.subscribe((x) => console.log(x));
  }

  emptyDemo(): void {
    const intervalO = interval(1000);
    const result = intervalO.pipe(
      mergeMap((x) =>
        x % 2 === 1 ? of('a', 'b', 'c') : empty().pipe(startWith(7))
      )
    );
    result.subscribe((x) => console.log(x));
  }

  rangeDemo(): void {
    const numbers = range(1, 10);
    numbers.subscribe((x) => console.log(x));
  }

  timerDemo(): void {
    const numbers = timer(3000, 1000);
    numbers.subscribe((x) => console.log(x));
  }

  fromDemo(): void {
    function* generateDoubles(seed) {
      let i = seed;
      while (true) {
        yield i;
        i = 2 * i; // double it
      }
    }

    const iterator = generateDoubles(3);
    const result = from(iterator).pipe(take(10));
    result.subscribe((x) => console.log(x));
  }
  ngOnDestroy(): void {
    this.intervalObservable && this.intervalObservable.unsubscribe();
  }
}
