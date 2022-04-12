// sử dụng thư viện zlib
const zlib = require('zlib');
const gzip = zlib.createGzip();

const fs = require('fs');
// File cần nén 
const inp = fs.createReadStream('index.html');
// File sau khi nén
const out = fs.createWriteStream('index.gz');

inp.pipe(gzip).pipe(out)
console.log('Successfully');