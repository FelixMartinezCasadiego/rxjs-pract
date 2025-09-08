import { fromEvent, map, sampleTime } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
  .pipe(
    sampleTime(2000),
    map(({ x, y }) => ({ x, y }))
    // sampleTime(2000)
  )
  .subscribe(console.log);
