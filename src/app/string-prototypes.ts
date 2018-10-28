// String.prototype.trimWhiteSpaces = trimWhiteSpaces;
// String.prototype.capitalize = capitalize;


// interface String {
//   trimWhiteSpaces: typeof trimWhiteSpaces;
//   capitalize: typeof capitalize;
// }


// function trimWhiteSpaces() {
//   return this.split(' ').join('');
// }

// function capitalize() {
//   const s = this;
//   if (typeof s !== 'string') return '';
//   return s.charAt(0).toUpperCase() + s.slice(1);
// }


export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}


