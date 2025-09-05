import { from, map, reduce, scan } from 'rxjs';

const numbers = [1, 2, 3, 4, 5];

const totalAccumulated = (acc: number, cur: number) => acc + cur;

// * Reduce
from(numbers).pipe(reduce(totalAccumulated, 0)).subscribe(console.log);

// * Scan
from(numbers).pipe(scan(totalAccumulated, 0)).subscribe(console.log);

// * Redux

interface User {
  id?: string;
  auth?: boolean;
  token?: string;
  age?: number;
}
const user: User[] = [
  { id: 'fel', auth: false, token: null },
  { id: 'fel', auth: true, token: 'ABC' },
  { id: 'fel', auth: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
  scan<User>((acc, cur) => {
    return { ...acc, ...cur };
  })
);

const id$ = state$.pipe(map((state) => state));

id$.subscribe(console.log);
