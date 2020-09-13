import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { buffer, bufferCount, bufferWhen } from 'rxjs/operators';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less'],
})
export class SwitchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  bufferDemo(): void {
    const clicks = fromEvent(document, 'click');
    const intervalO = interval(1000);
    const buffered = intervalO.pipe(buffer(clicks));
    buffered.subscribe((x) => console.log(x));
  }
  bufferCountDemo(): void {
    const clicks = fromEvent(document, 'click');
    const buffered = clicks.pipe(bufferCount(2));
    buffered.subscribe((x) => console.log(x));
  }
  bufferWhenDemo(): void {
    const clicks = fromEvent(document, 'click');
    const buffered = clicks.pipe(
      bufferWhen(() => interval(1000 + Math.random() * 4000))
    );
    buffered.subscribe((x) => console.log(x));
  }
}
