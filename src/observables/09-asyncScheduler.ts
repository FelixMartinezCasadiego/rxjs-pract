import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const regards = () => console.log('Hi world');
const regards2 = (name: string) => console.log(`Hi ${name}`);

// setTimeout
// asyncScheduler.schedule(regards, 2000);
// asyncScheduler.schedule(regards2, 2000, 'Felix');

// setInterval
const subs = asyncScheduler.schedule(
  function (state: number) {
    console.log('state', state);

    this.schedule(state + 1, 1000);
  },
  2000,
  0
);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
