const diff = (arg1, arg2) => [
  ...arg1.filter(e => !arg2.includes(e)),
  ...arg2.filter(e=> !arg1.includes(e))
]

function sym(...args) {
  return [...new Set(args.reduce(diff))]
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));