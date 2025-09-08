import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

// Example 1
// const click$ = fromEvent<PointerEvent>(document, 'click');
// click$.pipe(debounceTime(2000)).subscribe(console.log);

// Example 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
  .pipe(
    debounceTime(1000),
    map((event) => {
      const target = event.target as HTMLInputElement;
      return target.value;
    }),
    distinctUntilChanged((before, current) => before === current)
  )
  .subscribe(console.log);
