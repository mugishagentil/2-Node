const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(_dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)

// var path = require('path');
// var filename = path.basename('/Users/Refsnes/demo_path.js');
// console.log(filename);