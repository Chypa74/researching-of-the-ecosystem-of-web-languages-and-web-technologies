// URL: IIFE-001

function imediate() {
  return iifeFunc => iifeFunc();
}
imediate()(() => Out.log('Меня вызвали!'));
