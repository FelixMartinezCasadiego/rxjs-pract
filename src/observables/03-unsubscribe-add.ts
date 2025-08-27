import { Observable, type Observer } from 'rxjs';

const observer: Observer<unknown> = {
  next: (value) => console.log('next:', value),
  error: (error) => console.warn('error:', error),
  complete: () => console.log('Complete'),
};

const interval$ = new Observable<number>((subs) => {
  let count: number = 0;

  const interval = setInterval(() => {
    count += 1;
    subs.next(count);
    console.log(count);
  }, 1000);

  setTimeout(() => {
    subs.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('interval destroyed');
  };
});

const subscription = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription.add(subscription2);
subscription.add(subscription3);

setTimeout(() => {
  subscription.unsubscribe();

  console.log('complete timeout');
}, 6000);
