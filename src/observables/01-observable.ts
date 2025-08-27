import { Observable, type Observer } from 'rxjs';

const observer: Observer<unknown> = {
  next: (value) => console.log('next:', value),
  error: (error) => console.warn('error:', error),
  complete: () => console.log('Complete'),
};

// const obs$ = Observable.create()
const obs$ = new Observable<string>((subs) => {
  subs.next('Hello');
  subs.next('World');

  // force an error
  //   const a = undefined;
  //   a.name = 'Felix';

  subs.complete();

  subs.next('Hello');
  subs.next('World');
});

obs$.subscribe(observer);

// obs$.subscribe(
//   (value) => console.log('next:', value),
//   (error) => console.warn('error:', error),
//   () => console.log('complete')
// );
