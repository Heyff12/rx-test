import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.less'],
})
export class AsyncSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const subject = new AsyncSubject();

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v),
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log('observerB: ' + v),
    });

    subject.next(5);
    subject.complete();
  }
}
