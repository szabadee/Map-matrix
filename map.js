let readlineSync = require('readline-sync');
let map = [
  ['Szeged', 'Csongrád', 'Békéscsaba'],
  ['Kecskemét', 'Budapest', 'Debrecen'],
  ['Szekszárd', 'Siófok', 'Zalaegerszeg']
];
let coordinate = [0, 0]; //y, x

while (true) {
  let location = readlineSync.question('Add meg a léptetést: ');

  switch (location) {
    case 'jobb':
      coordinate[1]++;
      break;

    case 'bal':
      coordinate[1]--;
      break;

    case 'fel':
      coordinate[0]--;
      break;

    case 'le':
      coordinate[0]++;
      break;

    case 'exit':
      console.log(map[coordinate[0]][coordinate[1]]);
      break;
  }
}

