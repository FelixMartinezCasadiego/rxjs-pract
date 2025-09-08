import {
  throttleTime,
  distinctUntilChanged,
  fromEvent,
  map,
  asyncScheduler,
} from 'rxjs';

// Example 1
// const click$ = fromEvent<PointerEvent>(document, 'click');
// click$.pipe(throttleTime(2000)).subscribe(console.log);

// Example 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: true,
      trailing: true,
    }),
    map((event) => {
      const target = event.target as HTMLInputElement;
      return target.value;
    }),
    distinctUntilChanged((before, current) => before === current)
  )
  .subscribe(console.log);
