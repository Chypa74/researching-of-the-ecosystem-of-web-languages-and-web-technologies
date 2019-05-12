// URL: https://kodaktor.ru/startask_2b9d7

import { exampleStats } from './exampleStats';
import compose from './utils/compose';

function getIPsMap(array) {
  return Array.from(
    array.reduce((map, value) => {
      const { ip } = value;
      return map.set(ip, map.has(ip) ? map.get(ip) + 1 : 1);
    }, new Map())
  );
}

function sortIPs(array) {
  return array.sort((a, b) => {
    if (a[1] < b[1]) return 1;

    if (a[1] > b[1]) return -1;

    return 0;
  });
}

const ipsSortedMap = compose(
  sortIPs,
  getIPsMap
)(exampleStats);

const uniqueIPs = ipsSortedMap.length;

const ipsWithSingleVisit = ipsSortedMap.filter(value => value[1] === 1).length;

const maxVisitCountIP = ipsSortedMap[0][1];
