import { of, from } from 'rxjs';

/*
 * of = take args and generate sequence
 * from = array, promise, iterable, observable
 */

const observer = {
  next: (val) => console.log('val', val),
  complete: () => console.log('completed'),
};

const myGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const myIterable = myGenerator();

// for (let id of myIterable) {
//   console.log(id);
// }
from(myIterable).subscribe(observer);

// const src$ = from([1, 2, 3, 4, 5]);
// const src$ = of(...[1, 2, 3, 4, 5]);

// const src$ = of('Felix');
// const src$ = from('Felix');

// const src$ = from(fetch('https://api.github.com/users/FelixMartinezCasadiego'));

// src$.subscribe(observer);

// src$.subscribe(async (resp) => {
//   console.log(resp);
//   const dataResp = await resp.json();
//   console.log(dataResp);
// });
