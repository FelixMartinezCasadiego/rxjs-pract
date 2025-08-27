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

  return () => {
    clearInterval(interval);
    console.log('interval destroyed');
  };
});

const subscription = interval$.subscribe();
const subscription2 = interval$.subscribe();
const subscription3 = interval$.subscribe();

setTimeout(() => {
  subscription.unsubscribe();
  subscription2.unsubscribe();
  subscription3.unsubscribe();

  console.log('complete timeout');
}, 3000);
