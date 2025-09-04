import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1, 10)
//   .pipe(filter((val) => val % 2 === 1))
//   .subscribe(console.log);

range(1, 10).pipe(
  filter((val, i) => {
    console.log('i:', i);
    return val % 2 === 1;
  })
);
//   .subscribe(console.log);

interface Characters {
  type: string;
  name: string;
}

const characters: Characters[] = [
  { type: 'Hero', name: 'Batman' },
  { type: 'Hero', name: 'Robin' },
  { type: 'Villain', name: 'Joker' },
];

const findHero$ = from(characters);

findHero$.pipe(filter((val) => val.type === 'Hero')).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map((val) => val.code),
  filter((key) => key === 'Enter')
);

keyup$.subscribe(console.log);
