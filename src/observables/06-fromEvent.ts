import { fromEvent, type Observer } from 'rxjs';

/*
 * DOM events
 */

const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer: Observer<unknown> = {
  next: (val) => console.log('next', val),
  error: null,
  complete: () => console.log('complete'),
};

src1$.subscribe(observer);
src2$.subscribe((event) => {
  console.log(event.key);
});
