import { map, range, tap } from 'rxjs';

const numbers$ = range(1, 5);

numbers$
  .pipe(
    tap((value) => console.log('before', value)),
    map((val) => val * 10),
    tap({
      next: (value) => console.log('after', value),
      complete: () => console.log('finished'),
    })
  )
  .subscribe((val) => console.log('subs', val));
