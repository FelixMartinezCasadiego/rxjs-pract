import { fromEvent, map, tap } from 'rxjs';

const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci velit, feugiat at mattis imperdiet, interdum ac nisl. Ut maximus id nibh non congue. Mauris maximus eros in pharetra pretium. Nullam viverra felis ac lectus venenatis consequat ut non ex. Curabitur consectetur sem quis iaculis aliquam. Morbi rutrum, ex nec malesuada placerat, tortor odio lacinia purus, a tempor lectus arcu a urna. Aliquam ultrices massa id mauris eleifend suscipit. Aliquam vitae justo dapibus, cursus elit at, elementum nunc. Donec porta sollicitudin leo eu condimentum. Praesent massa purus, dignissim at dapibus vel, bibendum in orci. Vestibulum convallis id neque et lacinia. Nulla ut est vestibulum, egestas turpis nec, elementum dui. Cras magna urna, hendrerit id accumsan luctus, vehicula blandit justo. Curabitur vel mi lectus.
<br/><br/>
Nulla quis eleifend ex. Duis bibendum fringilla ex. Quisque in nibh ex. Praesent dolor enim, auctor in imperdiet sit amet, consequat vitae arcu. Integer pharetra orci sed risus pulvinar rutrum. Duis ut nisi blandit, feugiat orci nec, mattis nunc. Ut tincidunt leo vel tincidunt luctus.
<br/><br/>
Integer eros nulla, cursus quis sapien et, pellentesque pellentesque nisl. Morbi laoreet, nisi id vulputate aliquam, lectus arcu dignissim diam, a elementum augue nisi sed enim. Vestibulum maximus malesuada nisl sit amet sagittis. Praesent rutrum, sem sit amet dapibus elementum, odio nulla scelerisque nibh, at feugiat nisi felis auctor diam. Fusce semper faucibus arcu nec commodo. Cras ornare massa mauris, a pellentesque ipsum condimentum non. Morbi convallis feugiat velit quis pellentesque. Etiam fermentum posuere bibendum. Suspendisse potenti.
<br/><br/>
Quisque elementum mauris sed libero porta, a condimentum nulla ultricies. Praesent volutpat justo ante, sit amet lacinia enim porta quis. Aenean dapibus nisi sit amet arcu ultricies mollis. Pellentesque non luctus dui, sit amet rutrum mi. Sed et suscipit purus, ut dignissim nisi. Mauris dui lorem, vehicula non suscipit at, commodo quis urna. Nam facilisis neque nec neque lobortis, laoreet mollis neque pretium.
<br/><br/>
Pellentesque a diam porttitor, malesuada neque quis, iaculis erat. Praesent luctus massa at magna congue, vel viverra sapien pulvinar. Vivamus lacinia lacus in imperdiet maximus. Quisque sed ipsum finibus, facilisis velit in, maximus ipsum. Vivamus sit amet sem et nunc porta lobortis. Nullam nec dui vel velit commodo laoreet. Integer sit amet tortor mollis, bibendum tellus vitae, maximus tortor. Phasellus ac dictum nisi, at porttitor est.
`;

const body = document.querySelector('body');

body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const calculateScrollPercentage = (e) => {
  const { scrollTop, scrollHeight, clientHeight } = e.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress = scroll$.pipe(
  map((e) => calculateScrollPercentage(e)),
  tap(console.log)
);

progress.subscribe((percentage) => {
  progressBar.style.width = `${percentage}%`;
});
