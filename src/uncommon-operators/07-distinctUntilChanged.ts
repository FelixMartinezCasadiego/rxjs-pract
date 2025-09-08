import { distinctUntilKeyChanged, from } from 'rxjs';

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

from(characters).pipe(distinctUntilKeyChanged('name')).subscribe(console.log);
