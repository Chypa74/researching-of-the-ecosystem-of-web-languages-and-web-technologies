// RGB concat

function RGBConcat(...args) {
  return `rgb(${args.reduce((accum, arg) =>
    arg <= 255 ? `${accum},${arg}` : `${accum}`
  )})`;
}
