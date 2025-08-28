import { interval, type Observer, timer } from 'rxjs';

const observer: Observer<unknown> = {
  next: (val) => console.log(val),
  error: null,
  complete: () => console.log('completed'),
};

const todayIn5 = new Date();
todayIn5.setSeconds(todayIn5.getSeconds() + 5);

// const interval$ = interval(1000);
// const timer$ = timer(2000);

// * Create a interval with a init with 2segs
// const timer$ = timer(2000, 1000);

const timer$ = timer(todayIn5);

console.log('init');
timer$.subscribe(observer);
// interval$.subscribe(observer);
console.log('end');
