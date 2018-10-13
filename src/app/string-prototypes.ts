String.prototype.trimWhiteSpaces = trimWhiteSpaces;


interface String {
  trimWhiteSpaces: typeof trimWhiteSpaces;
}


function trimWhiteSpaces() {
  return this.split(' ').join('');
}


