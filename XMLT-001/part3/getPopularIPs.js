import { exampleStats } from './exampleStats';

const IP_REGEX = /(\d{3}\.\d{3}\.\d{3}\.\d{3})/gm;
const OS_REGEX = /(X11;|Macintosh;|Windows;)/gm;
const OS_MOBILE_REGEX = /(Linux;|iPhone;|iPad;)/gm;

const IPsArray = exampleStats
  .split(IP_REGEX)
  .filter(element => IP_REGEX.test(element));

const OSsArray = exampleStats
  .split(OS_REGEX)
  .filter(element => OS_REGEX.test(element));

const MobileOSsArray = exampleStats
  .split(OS_MOBILE_REGEX)
  .filter(element => OS_MOBILE_REGEX.test(element));

function findPopularValues(array, countOfPopularValues) {
  return Array.from(
    array.reduce(
      (map, value) => map.set(value, map.has(value) ? map.get(value) + 1 : 1),
      new Map()
    )
  )
    .sort((a, b) => {
      if (a[1] < b[1]) return 1;

      if (a[1] > b[1]) return -1;

      return 0;
    })
    .slice(0, countOfPopularValues);
}
const popularIPsValues = findPopularValues(IPsArray, 5);
// console.log(popularIPsValues);

const popularOSsValues = findPopularValues(OSsArray, 5).map(element => [
  element[0].slice(0, -1),
  element[1]
]);
console.log(popularOSsValues);

const popularMobileOSsValues = findPopularValues(MobileOSsArray, 5).map(
  element => [element[0].slice(0, -1), element[1]]
);
// console.log(popularMobileOSsValues);
