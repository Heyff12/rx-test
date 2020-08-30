import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import {} from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
})
export class CreateComponent implements OnInit {
  intervalObservable: any;
  constructor() {}

  ngOnInit(): void {
    const numbers = interval(1000);
    this.intervalObservable = numbers.subscribe((x) => console.log(x));
  }

  ngOnDestroy(): void {
    this.intervalObservable.unsubscribe();
  }
}
