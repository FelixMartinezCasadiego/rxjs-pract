import { Observable, Subject, type Observer } from 'rxjs';

const observer: Observer<unknown> = {
  next: (value) => console.log('next:', value),
  error: (error) => console.warn('error:', error),
  complete: () => console.log('Complete'),
};

const interval$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(intervalID);
    console.log('interval destruyed');
  };
});

/*
 * 1 - Casteo múltiple
 * 2 - También es un type Observer
 * 3 - Next, error y complete
 */

const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);

  subject$.complete();

  subscription.unsubscribe();
}, 3500);

// const subs1 = interval$.subscribe((randonNumber) =>
//   console.log('subs1', randonNumber)
// );
// const subs2 = interval$.subscribe((randonNumber) =>
//   console.log('subs2', randonNumber)
// );
