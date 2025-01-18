/**
 *
 * @param str
 *
 */
// Make sure that value is only a string.
// If there is a spaces remove it...
// Be At least 1 Charachter Long
// Case Senstive As well.
//
function problem1(str) {
    // Make sure that input is only aa string
    if (str.length < 1) {
        console.log('Length is not greater than 1');
        return false;
    }
    // Remove All WhiteSpaces.
    var _str = str.split(' ').join('');
    var temp = '';
    // Explain this.
    for (var i = _str.length - 1; i >= 0; i--) {
        temp += _str[i];
    }
    console.log(temp);
    if (_str === str) {
        return true;
    }
    else {
        return false;
    }
}
console.log(problem1('Togos'));
//# sourceMappingURL=CCP-1.js.map