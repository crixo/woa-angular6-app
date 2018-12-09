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

// guid() {
//   function s4() {
//     return Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1);
//   }
//   return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
// }


export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}


