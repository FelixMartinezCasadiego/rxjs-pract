import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';

// range(1, 5)
//   .pipe(map<number, number>((val) => val * 10))
//   .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(map((event) => event.code));

const keyupMapTo$ = keyup$.pipe(map(() => 'Press'));

keyup$.subscribe(console.log);
keyupCode$.subscribe((code) => console.log('map', code));
keyupMapTo$.subscribe((val) => console.log(val));
