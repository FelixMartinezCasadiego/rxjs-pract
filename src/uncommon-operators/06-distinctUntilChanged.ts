import { distinctUntilChanged, from, of } from 'rxjs';

const numbers$ = of(1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numbers$.pipe(distinctUntilChanged()).subscribe({
  next: (val) => console.log('next:', val),
  complete: () => console.log('complete'),
});

interface Character {
  name: string;
}

const characters: Character[] = [
  { name: 'Megaman' },
  { name: 'Megaman' },
  { name: 'Megaman' },
  { name: 'x' },
  { name: 'Zero' },
  { name: 'Zero' },
  { name: 'Megaman' },
  { name: 'zero' },
  { name: 'Megaman' },
];

from(characters)
  .pipe(distinctUntilChanged((before, current) => before.name === current.name))
  .subscribe(console.log);
